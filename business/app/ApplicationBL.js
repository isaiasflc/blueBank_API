/**
 * Classe -> Application
 * @desc: classe para manipulação de dados de aplicações.
 */

//imports
var _ = require('lodash');
var path = require('app-root-path');
var promise = require("bluebird");
var appError = Error.extend('AppError', 500);
var logger = global.logger;
var request = require('request-promise');
var notFoundError = Error.extend('HttpNotFoundError', 404);
var unauthorizedError = Error.extend('HttpUnauthorized', 401);



//models and class
var applicationModel = require(path + '/model/app/ApplicationModel');
var _application_name_registred = [];

/**
 * Contrutora da classe de aplicações
 * @constructor
 */
function ApplicationBL() {

}

function ApplicationBL(list_app_name) {
    _application_name_registred = list_app_name;
}

/**
 * Obtem informações básicas de uma applicação com base no dominio informado.
 * @param $domain
 * @return {ApplicationModel}
 */
ApplicationBL.prototype.GetBasicInformationForDomain = function ($domain) {

    //promise list
    return promise.try(promisseProcess)
        .then(promiseResult)
        .catch(promiseError);

    //processamento
    function promisseProcess() {
        return applicationModel.findOne({
            where: {
                hosts: $domain,
            }
        });
    };

    //retorno de resultado
    function promiseResult(result) {
        if (result == null) {
            throw new notFoundError(global.messages.application.not_found);
        }
        return result.dataValues;
    };

    //tratamento de erro
    function promiseError(ex) {
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }
}


/**
 * Obtem dados de uma aplicação por identificador informado.
 * @param $identifier
 * @return {ApplicationModel}
 */
ApplicationBL.prototype.GetApplicationForIdentifier = function ($identifier) {

    //promise list
    return promise.try(promisseProcess)
        .catch(promiseError);

    //processamento
    function promisseProcess() {
        return applicationModel.findOne({'identifier': $identifier}).exec();
    };

    //tratamento de erro
    function promiseError(ex) {
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }
}


/**
 * Autentica autorização de aplicação para acesso a recursos do sistema sem validação de aplicação por classe especifica.
 * @param $app_identifier
 * @return {ApplicationModel}
 */
ApplicationBL.prototype.ValiBasicApplicationAccess = function ($app_identifier) {

    //promise list
    return promise.try(promiseGetApplication)
        .then(promiseValidate)
        .catch(promiseError);

    function promiseGetApplication() {
        if ($app_identifier == null || $app_identifier == undefined || $app_identifier.length == 0) {
            throw new unauthorizedError(global.messages.application.undefined);
        }
        return applicationModel.findOne({'identifier': $app_identifier}).exec();
    };


    function promiseValidate(result) {
        if (result === null) {
            throw new notFoundError(global.messages.application.not_found);
        }
        if (!result.active) {
            throw new unauthorizedError(global.messages.application.not_active);
        }
        return result;
    }

    //tratamento de erro
    function promiseError(ex) {
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }
}


/**
 * Autentica autorização de aplicação para acesso a recursos do sistema
 * @param $app_identifier
 * @return {ApplicationModel}
 */
ApplicationBL.prototype.ValidApplicationAccess = function ($app_identifier) {
    //promise list
    return promise.try(promiseGetApplication)
        .then(promiseValidate)
        .catch(promiseError);

    function promiseGetApplication() {
        if ($app_identifier == null || $app_identifier == undefined || $app_identifier.length == 0) {
            throw new unauthorizedError(global.messages.application.undefined);
        }
        if (_application_name_registred == undefined || _application_name_registred.indexOf($app_identifier) == -1) {
            throw new unauthorizedError(global.messages.default.app_not_permission);
        }
        return applicationModel.findOne({'identifier': $app_identifier}).exec();
    };


    function promiseValidate(result) {
        if (result === null) {
            throw new notFoundError(global.messages.application.not_found);
        }
        if (!result.active) {
            throw new unauthorizedError(global.messages.application.not_active);
        }
        return result;
    }

    //tratamento de erro
    function promiseError(ex) {
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }
}


/**
 *
 * Obtem dados lista de aplicação.
 * @return {ApplicationModel}
 */
ApplicationBL.prototype.GetApplicationList = function () {

    //promise list
    return promise.try(promisseProcess)
        .then(promiseResult)
        .catch(promiseError);

    //processamento
    function promisseProcess() {
        return applicationModel.find().exec();
    };

    //retorno de resultado
    function promiseResult(result) {
        if (result == null) {
            throw new notFoundError(global.messages.application.not_found);
        }
        return result;
    };

    //tratamento de erro
    function promiseError(ex) {
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }
}

/**
 *
 * artiva e desativa aplicação.
 * @return {ApplicationModel}
 */
ApplicationBL.prototype.PutChengeActiveApplicationList = function ($app) {

    //promise list
    return promise.try(promisseProcess)
        .then(promiseResult)
        .catch(promiseError);

    //processamento
    function promisseProcess() {
        return applicationModel.findOneAndUpdate(
            {'_id': $app._id},
            {$set: {'active': $app.active}},
            {safe: true, upsert: true}
        ).exec()
    };

    //retorno de resultado
    function promiseResult(result) {
        if (result == null) {
            throw new notFoundError(global.messages.application.not_found);
        }
        return result;
    };

    //tratamento de erro
    function promiseError(ex) {
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }
}

/**
 *
 * Editar Aplicação.
 * @return {ApplicationModel}
 */
ApplicationBL.prototype.PutEditApplication = function ($app) {

    //promise list
    return promise.try(promisseProcess)
        .then(promiseResult)
        .catch(promiseError);

    //processamento
    function promisseProcess() {
        return applicationModel.findOneAndUpdate(
            {'_id': $app._id},
            {$set: $app},
            {safe: true, upsert: true}
        ).exec()
    };

    //retorno de resultado
    function promiseResult(result) {
        if (result == null) {
            throw new notFoundError(global.messages.application.not_found);
        }
        return result;
    };

    //tratamento de erro
    function promiseError(ex) {
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }
}

/**
 *
 * Editar Aplicação.
 * @return {ApplicationModel}
 */
ApplicationBL.prototype.PutNewApplication = function ($app) {

    //promise list
    return promise.try(promisseProcess)
        .then(promiseResult)
        .catch(promiseError);

    //processamento
    function promisseProcess() {
        var app = new applicationModel($app);
        return app.save();
    };

    //retorno de resultado
    function promiseResult(result) {
        if (result == null) {
            throw new notFoundError(global.messages.application.not_found);
        }
        return result;
    };

    //tratamento de erro
    function promiseError(ex) {
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }
}


/**
 *
 * artiva e desativa aplicação.
 * @return {ApplicationModel}
 */
ApplicationBL.prototype.CreateBCRTicket = function ($ticket) {

    //promise list
    return promise.try(promisseProcess)
        .then(promiseResult)
        .catch(promiseError);

    //processamento
    function promisseProcess() {
        var req_email = $ticket.user_email == null ? "system@55pbx.com" : $ticket.user_email;
        var json = {
            "subject": "Erro (" + $ticket.code + ") 55PBX",
            "comment": {
                "body": "client_id: " + $ticket.client_id +
                "\n client_name: " + $ticket.client_name +
                "\n código de erro: " + $ticket.code +
                "\n transaction_id: " + $ticket.transaction_id +
                "\n mensagem: " + $ticket.message +
                "\n dominio: " + $ticket.domain,
                "public": false
            },
            "requester": {"email": req_email}
        };
        var ticket = {ticket: json};
        return request({
            'uri': 'https://bcrsrv.zendesk.com/api/v2/tickets.json',
            'method': 'POST',
            'json': ticket,
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Basic ' + new Buffer('system@55pbx.com' + ':' + '1041@Plex').toString('base64')
            }
        });
    };

    //retorno de resultado
    function promiseResult(result) {
        if (result == null) {
            throw new notFoundError(global.messages.application.not_found);
        }
        return result;
    };

    //tratamento de erro
    function promiseError(ex) {
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw ex;
    }
}

module.exports = ApplicationBL;
