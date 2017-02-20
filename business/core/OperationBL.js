var _ = require('lodash');
var path = require('app-root-path');
var promise = require("bluebird");
var logger = global.logger;
var request = require('request-promise');


//Variáveis de classe
var transferModel = require(path + '/model/core/TransferModel');
var clienteModel = require(path + '/model/core/ClientModel');


/**
 * Construtor da Classe
 * @constructor
 */
function OperationBL() {

}

/**
 * Buscar Operações.
 * @param $register
 * @constructor
 */
OperationBL.prototype.GetAllOperation = function ($client_id, $client_cpf) {
    var client = [];

    return promise.try(promiseGeAll)
        .then(promiseValid)
        .then(promiseValidCredit)
        .catch(promiseError);


    function promiseGeAll() {
        return transferModel.findAll({
            where: {
                client_id_transfer: $client_id
            }
        });

    }

    function promiseValid(result_debit) {
        if(result_debit == null){
            return [];
        }
        var aux = JSON.stringify(result_debit); // json gets the string "2016-08-26 etc..."
        result_debit = JSON.parse(aux);
        _.forEach(result_debit, function (item) {
            var obj ={
                type: "Débito",
                mode: "Transferência",
                date: item.data,
                value: item.value,
                credit: false
            }
            client.push(obj);
        });
        return transferModel.findAll({
            where: {
                cpf_receptive: $client_cpf
            }
        });
    }

    function promiseValidCredit(result_credit) {
        if(result_credit == null || result_credit.length < 1){
            return client;
        }
        var aux = JSON.stringify(result_credit); // json gets the string "2016-08-26 etc..."
        result_credit = JSON.parse(aux);
        _.forEach(result_credit, function (item) {
            var obj ={
                type: "Crédito",
                mode: "Transferência",
                date: item.data,
                value: item.value,
                credit: true
            }
            client.push(obj);
        });
        return client;
    }


    function promiseError(ex) {
        logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }

};

/**
 * Buscar Saldo.
 * @param $register
 * @constructor
 */
OperationBL.prototype.GetBalance = function ($client_id) {
    var client = [];

    return promise.try(promiseGeAll)
        .then(promiseReturn)
        .catch(promiseError);


    function promiseGeAll() {
        return clienteModel.findById($client_id);

    }

    function promiseReturn(result) {
        if(result == null){
            return 0;
        }
        return result.dataValues.client_balance;
    }


    function promiseError(ex) {
        logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }

};

module.exports = OperationBL;
