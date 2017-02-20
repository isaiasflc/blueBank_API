/** Configuração do Servidor **/
global.server = {
    mode: 'dev',
    dev_ip: '172.0.0.1',
    https_port: 30500,
    http_port: 30000,
    domain: 'seudominio.com',

    log: {
        database: true,
        console: true,
        file: true,
        file_path: '/logs/bluebank.log',
        level: 'ALL',
        name: 'bluebank'
    }
};

/** Configuração do Banco de dados **/
global.database_mysql = {
    dev: {
        database: 'blueBank',
        user: 'root',
        password: 'root',
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    }
}


/** Configuração da API **/
global.api = {
    name: "BLUE BANK",
    corporation: "Sua Empresa",
    version: '1.0.0 - beta',
}


/** Configuração de Aplicações **/
global.applications = {
    core: 'blueBank',
}









