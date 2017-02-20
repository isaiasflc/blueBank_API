/**
 * Rota -> User
 * @desc: rota para acesso a funcionalidades do módulos de usuário PBX
 */

var path = require('app-root-path');
var express = require('express');
var router = express.Router();
var promise = require("bluebird");
var operationBL = require(path + '/business/core/OperationBL');


/**
 * Obtem dados básico de uma aplicação cadastrada através do domínio informado.
 */
router.get('/operation/collect/:client_id/:client_cpf', function (req, res) {

    //log
    var operation_BL = new operationBL();

    //promise list
    return promise.try(promiseGetAll)
        .then(promiseReturn)
        .catch(promiseError);

    //regra de negócio da controller
    function promiseGetAll() {
        return operation_BL.GetAllOperation(req.params.client_id, req.params.client_cpf);
    };

    //retorno de resultado
    function promiseReturn(result) {
        return res.status(200).json(result);
    };


    //tratamento de erro
    function promiseError(ex) {
        return res.status(ex.code != undefined ? ex.code : 500).json({
            error: ex.message
        });
    }
})

/**
 * Obtem dados básico de uma aplicação cadastrada através do domínio informado.
 */
router.get('/operation/balance/:client_id', function (req, res) {

    //log
    var operation_BL = new operationBL();

    //promise list
    return promise.try(promiseGetBalance)
        .then(promiseReturn)
        .catch(promiseError);

    //regra de negócio da controller
    function promiseGetBalance() {
        return operation_BL.GetBalance(req.params.client_id);
    };

    //retorno de resultado
    function promiseReturn(result) {
        return res.status(200).json(result);
    };


    //tratamento de erro
    function promiseError(ex) {
        return res.status(ex.code != undefined ? ex.code : 500).json({
            error: ex.message
        });
    }
})

module.exports = router;



