var _ = require('lodash');
var path = require('app-root-path');
var promise = require("bluebird");
var logger = global.logger;
var request = require('request-promise');
var clientError = Error.extend('ClientError', 400);



//Variáveis de classe
var transferModel = require(path + '/model/core/TransferModel');
var clientModel = require(path + '/model/core/ClientModel');


/**
 * Construtor da Classe
 * @constructor
 */
function TransferBL() {

}

/**
 * Buscar client.
 * @param $register
 * @constructor
 */
TransferBL.prototype.GetAllTransfer = function ($client_id) {


    return promise.try(promiseGeAll)
        .then(promiseReturn)
        .catch(promiseError);


    function promiseGeAll() {
        return transferModel.findAll({
            where: {
                client_id_transfer: $client_id
            }
        });

    }

    function promiseReturn(result) {
        if(result == null){
            return [];
        }
        var aux = JSON.stringify(result); // json gets the string "2016-08-26 etc..."
        result = JSON.parse(aux);
        return result;
    }


    function promiseError(ex) {
        throw ex;
    }

};

/**
 * Cria novo client no banco de dados.
 * @param $register
 * @constructor
 */
TransferBL.prototype.NewTransfer = function ($register) {
    var client_credit = null;
    var client_debit = null;
    return promise.try(promiseGetClientReceptive)
        .then(promiseValidateAccountReceptive)
        .then(promiseUpdateBalanceDebit)
        .then(promiseUpdateBalanceCredit)
        .then(promiseSave)
        .then(promiseResultAll)
        .then(promiseReturn)
        .catch(promiseError);


    function promiseGetClientReceptive() {

        return clientModel.findOne({where: {client_account: $register.account}});
    }


    function promiseValidateAccountReceptive(result) {
        if (result == null) {
            throw new clientError(global.messages.client.not_found_receptive);
        }

        client_credit = result.dataValues;
        if(client_credit.client_name.toLowerCase() != $register.receptive_holder.toLowerCase()){
            throw new clientError(global.messages.client.not_found_data);

        }else if(client_credit.client_agency != $register.agency){
            throw new clientError(global.messages.client.not_found_data);

        }

        $register.cpf_receptive = result.client_cpf;
        return clientModel.findOne({where: {client_id: $register.client_id_transfer}});

    }

    function promiseUpdateBalanceDebit(result_client) {
        client_debit = result_client.dataValues;
        if(client_debit.client_balance >= $register.value){
            client_debit.client_balance =  client_debit.client_balance - $register.value;
            return clientModel.update(client_debit, {
                where: {
                    client_id: $register.client_id_transfer
                }
            });
        }else {
            throw new clientError(global.messages.client.not_found_balance);
        }
    }

    function promiseUpdateBalanceCredit(result_update_debit) {
        client_credit.client_balance = client_credit.client_balance + $register.value;
        return clientModel.update(client_credit, {
            where: {
                client_id: client_credit.client_id
            }
        });
    }

    function promiseSave(result_update_credit) {
        return transferModel.create($register);
    }

    function promiseResultAll(result_create) {
        return transferModel.findAll({
            where: {
                client_id_transfer: $register.client_id_transfer
            }
        });

    }

    function promiseReturn(result_create) {
        var aux = JSON.stringify(result_create); // json gets the string "2016-08-26 etc..."
        var result = JSON.parse(aux);
        return result;
    }


    function promiseError(ex) {
        throw ex;
    }

};


module.exports = TransferBL;
