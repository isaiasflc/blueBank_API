/**
 * Rota -> Client
 * @desc: rota para acesso a funcionalidades do módulos de client
 */

var path = require('app-root-path');
var express = require('express');
var router = express.Router();
var promise = require("bluebird");
var clienteBL = require(path + '/business/core/ClientBL');


/**
 * Rota de login.
 */
router.post('/client/authenticate', function (req, res) {

    //log
    var cliente_BL = new clienteBL();

    //promise list
    return promise.try(promiseAuthenticate)
        .then(promiseReturn)
        .catch(promiseError);

    //regra de negócio da controller
    function promiseAuthenticate() {
        return cliente_BL.LoginClient(req.body);
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



