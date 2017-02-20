/**
 * Rotas de acesso para funcionalidades da aplicação
 * Cada rota poderá acessa por nivel de aplicação do cliente conforme descriçao:
 */

var Path = require('app-root-path');

/**
 * Construtor da Classe
 * @constructor
 */
function RouteApp(app) {

}

/**
 * Carrega listagem de rotas da aplicacao
 * @param app
 * @returns {*}
 * @constructor
 */
RouteApp.prototype.Load = function (app) {
    var route = [];


    //inicial
    route['index'] = require(Path + '/routes/index');

    //errors
    route['error'] = require(Path + '/routes/error');

    //app
    route['app_application'] = require(Path + '/routes/app/ApplicationController');

    /*** Core **/
    route['core_client'] = require(Path + '/routes/core/ClientController');
    route['core_transfer'] = require(Path + '/routes/core/TransferController');
    route['core_operation'] = require(Path + '/routes/core/OperationController');


    /*** TOOLS ***/


    //CARGA DE ROTAS

    //paginas
    app.use('/', route['index']);

    //app
    app.use('/api', route['app_application']);

    /*** CORE  ***/
    app.use('/api/core', route['core_client']);
    app.use('/api/core', route['core_transfer']);
    app.use('/api/core', route['core_operation']);

    /*** TOOLS ***/

    //final
    app.use('/', route['error']);

    return app;
}

module.exports = RouteApp;
