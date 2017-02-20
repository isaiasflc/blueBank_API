var _ = require('lodash');
var path = require('app-root-path');
var promise = require("bluebird");
var logger = global.logger;
var request = require('request-promise');
var string_tools = require(path + '/library/StringTools');
var changeCase = require('change-case');
var clientError = Error.extend('ClientError', 400);



//Variáveis de classe
var clientModel = require(path + '/model/core/ClientModel');


/**
 * Construtor da Classe
 * @constructor
 */
function ClientBL() {

}

/**
 * login cliente.
 * @param $register
 * @constructor
 */
ClientBL.prototype.LoginClient = function ($register) {


    return promise.try(promiseValid)
        .then(promiseSave)
        .catch(promiseError);


    function promiseValid() {
        return clientModel.findOne({
            where: {
                client_account: $register.account,
                client_agency: $register.agency,
                client_password: $register.password
            }
        });
    }


    function promiseSave(result) {
        if (result == null) {
            throw new clientError(global.messages.user.user_not_found);
        }
        result = result.dataValues;
        _.unset(result, ['client_account']);
        _.unset(result, ['client_agency']);
        _.unset(result, ['client_password']);

        return result;
    }


    function promiseError(ex) {
        throw ex;
    }

};
module.exports = ClientBL;
