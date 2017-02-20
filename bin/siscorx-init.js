/**
 * Arquivo de configuração e inicialização da aplicação
 */
var _ = require('lodash');
var path = require('app-root-path');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');
var https = require('https');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var compression = require('compression');
var mongoose = require('mongoose');
var log4js = require('log4js');
var mongoAppender = require('log4js-node-mongodb');
var helmet = require('helmet');
var Error = require('extend-error');
var express_enforces_ssl = require('express-enforces-ssl');
var multipart = require('connect-multiparty');
var router = require(path + '/bin/route-settings.js');
var settings_file = require(path + '/app-settings.js');
var messages_file = require(path + '/app-messages.js');
var sequelize = require('sequelize');
var hub = require('hub');


//pametrização do serviço
var settings = global.server;

var database_uri_log = null;

//ativa bluebird promise para mongoose.
//configurando carga mysql
var settings_msyql = global.database_mysql;
var database_mysql_central = null;
var database_mysql_log = null;


database_mysql_central = new sequelize(
    settings_msyql.dev.database,
    settings_msyql.dev.user,
    settings_msyql.dev.password, {
        host: settings_msyql.dev.host,
        dialect: settings_msyql.dev.dialect,
        port: settings_msyql.dev.port,
        pool: {
            max: settings_msyql.dev.pool.max,
            min: settings_msyql.dev.pool.min,
            idle: settings_msyql.dev.pool.idle,
        },
    });

database_mysql_log = new sequelize(
    settings_msyql.dev.database_log,
    settings_msyql.dev.user,
    settings_msyql.dev.password, {
        host: settings_msyql.dev.host,
        dialect: settings_msyql.dev.dialect,
        port: settings_msyql.dev.port,
        pool: {
            max: settings_msyql.dev.pool.max,
            min: settings_msyql.dev.pool.min,
            idle: settings_msyql.dev.pool.idle,
        },
    });

console.info("Conectado ao banco de dados Mysql em: " + settings_msyql.dev.host + ':' + settings_msyql.dev.port + ' -> ' + settings_msyql.dev.database);
console.info("Conectado ao banco de dados Mysql de LOG em: " + settings_msyql.dev.host + ':' + settings_msyql.dev.port + ' -> ' + settings_msyql.dev.database_log);

hub.database = database_mysql_central;
hub.database_log = database_mysql_log;

    //certificado SSL do Serviço
    var key = fs.readFileSync(path + '/ssl/localhost-ssl.key');
    var cert = fs.readFileSync(path + '/ssl/localhost-ssl.crt');
    var options_ssl = {
        key: key,
        cert: cert,
    };


    //configuração do servidor express
    var app = express();
    app.enable('trust proxy');
    var route_list = new router
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(express.static(path + settings.web_path));
    app.use(cors());
    app.use(compression());
    app.use(helmet());
    app.use(helmet.ieNoOpen());
    app.use(helmet.noSniff());
    app.use(helmet.noCache());
    app.use(helmet.dnsPrefetchControl({allow: false}));
    app.use(express_enforces_ssl());
    app.use(multipart({
        uploadDir: global.file_path,
    }));
    app.enabled('trust proxy');
    app.set('view engine', 'html');
    app = route_list.Load(app);
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    });

    //configurações do servidor de aplicação HTTPS
    app.set('port', settings.https_port);
    https.globalAgent.options.secureProtocol = 'SSLv3_method';
    var server_https = https.createServer(options_ssl, app);
    server_https.listen(settings.https_port);
    server_https.on('error', onError);
    server_https.on('listening', onListeningHttps);


    //configurações do servidor de aplicação HTTPS
    app.set('port', settings.http_port);
    https.globalAgent.options.secureProtocol = 'SSLv3_method';
    var server_http = http.createServer(app);
    server_http.listen(settings.http_port);
    server_http.on('error', onError);
    server_http.on('listening', onListeningHttp);


    //Criando servidor SOCKET da aplicação para realtime data
    var socket_io = require('socket.io')(server_https);
    global.app_socket = [];

    socket_io.on('connection', function ($client) {
        $client.on('getConnectionId', function (data) {
            logger.info('Novo usuário conectado: ', data.app + " / " + data.user_name + "(" + $client.id + ")");
            var ip = $client.handshake.address;
            $client.emit('receiveConnectionId', {id: $client.id});
            if (data.app != undefined && data.app != null) {
                global.app_socket.push({
                    app: data.app,
                    user_id: data.user_id,
                    user_name: data.user_name,
                    socket: $client,
                    id: $client.id,
                });
            }
        });


        //valida socket em aberto
        $client.on('keepAlive', function (user_id) {
            logger.info('Conexão ativa do usuário: ', user_id + $client.id);
            $client.emit('keepalive.result', "200-OK");
        })


    });

    //Normalização de porta do servidorpara: number, string, ou false.
    function normalizePort(val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            return val;
        }

        if (port >= 0) {
            return port;
        }

        return false;
    }


    //Evento de erro de conexão no servidor
    function onError(error) {
        logger.info("Ocorreu um erro ao inicializar o servidor.", Error);

        if (error.syscall !== 'listen') {
            throw error;
        }


        switch (error.code) {
            case 'EACCES':
                console.error(' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    //Evento para excutar eventos do servidor
    function onListeningHttp() {
        var addr_http = server_http.address();
    }

    function onListeningHttps() {
        var addr_http = server_http.address();
    }


