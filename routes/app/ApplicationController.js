/**
 * Rota -> Application
 * @desc: rota para acesso a funcionalidades do módulos de  aplicação.
 */

var path = require('app-root-path');
var express = require('express');
var router = express.Router();
var promise = require("bluebird");
var logger = global.logger;
var applicationBL = require(path + '/business/app/ApplicationBL');

/**
 * Obtem dados básico de uma aplicação cadastrada através do domínio informado.
 */
router.get('/application/information/:domain', function (req, res) {

    //log
    var log = null;

    //promise list
    return promise.try(promiseGetApplication)
        .then(promiseReturn)
        .catch(promiseError);

    function promiseGetApplication() {

        var application_bl = new applicationBL();
        return application_bl.GetBasicInformationForDomain(req.params.domain);
    };

    //retorno de resultado
    function promiseReturn(result) {
        return res.status(200).json(result);
    };


    //tratamento de erro
    function promiseError(ex) {
        var message = {error: ex.message.message};
        return res.status(ex.code).json(message);
    }
})


module.exports = router;



