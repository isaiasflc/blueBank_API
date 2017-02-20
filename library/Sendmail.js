var path = require('app-root-path');
var promise = require("bluebird");
var logger = global.logger;
var fs = require('fs');
var appError = Error.extend('AppError', 500);
var sendmail = require('sendmail')();


/**
 * Executa envio de e-mail
 * @param $email_setting
 * */
exports.Send = function ($email_setting) {

    //promise list
    return promise.try(promiseValidate)
        .then(promiseSend)
        .catch(promiseError);


    function promiseValidate() {
        if ($email_setting.user == undefined || $email_setting.user == null) {
            throw new clientError(global.messages.library.sendmail.user_undefined);
        }

        if ($email_setting.password == undefined || $email_setting.password == null) {
            throw new clientError(global.messages.library.sendmail.passowrd_undefined);
        }

        if ($email_setting.smtp == undefined || $email_setting.smtp == null) {
            throw new clientError(global.messages.library.sendmail.smtp_undefined);
        }
        if ($email_setting.port == undefined || $email_setting.port == null || $email_setting.port == 0) {
            throw new clientError(global.messages.library.sendmail.port_undefined);
        }

        if ($email_setting.recipient == undefined || $email_setting.recipient == null) {
            throw new clientError(global.messages.library.sendmail.recipient_undefined);
        }

        if ($email_setting.subject == undefined || $email_setting.subject == null) {
            throw new clientError(global.messages.library.sendmail.subject_undefined);
        }

        if ($email_setting.text == undefined || $email_setting.text == null) {
            throw new clientError(global.messages.library.sendmail.text_undefined);
        }

        return fs.readFile($email_setting.template_path, 'utf8');

    }


    function promiseSend(file) {
        var texto = "";
        if (file != null) {
            texto = file.replace("#mensagem_assunto#", $email_setting.subject).replace("#mensagem_texto#", $email_setting.text);
        }
        else {
            texto = $email_setting.text;
        }

        return sendmail({
            from: $email_setting.user,
            to: $email_setting.recipient,
            subject: $email_setting.subject,
            html: texto
        });

    }


    //tratamento de erro
    function promiseError(ex) {
        console.log("Email: ", ex);
        global.logger.error('Processing error in the module: ' + __filename.split(/[\\/]/).pop(), ex);
        throw appError(ex);
    }
}
