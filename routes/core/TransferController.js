/**
 * Rota -> User
 * @desc: rota para acesso a funcionalidades do módulos de usuário PBX
 */

var path = require('app-root-path');
var express = require('express');
var router = express.Router();
var promise = require("bluebird");
var transferBL = require(path + '/business/core/TransferBL');


/**
 * Obtem dados básico de uma aplicação cadastrada através do domínio informado.
 */
router.post('/transfer/new', function (req, res) {

    //log
    var transfer_BL = new transferBL();

    //promise list
    return promise.try(promiseNewTransfer)
        .then(promiseReturn)
        .catch(promiseError);

    //regra de negócio da controller
    function promiseNewTransfer() {
        return transfer_BL.NewTransfer(req.body.transfer);
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
router.get('/transfer/collect/:client_id', function (req, res) {

    //log
    var transfer_BL = new transferBL();

    //promise list
    return promise.try(promiseAllTransfer)
        .then(promiseReturn)
        .catch(promiseError);

    //regra de negócio da controller
    function promiseAllTransfer() {
        return transfer_BL.GetAllTransfer(req.params.client_id);
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



