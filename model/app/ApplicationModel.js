// /**
//  * Objeto de Dados -> Application
//  * @desc: representa objeto de uma aplicação disponível no sistema.
//  */
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var model = new Schema({
//     name: {type: String, trim: true},
//     identifier: {type: String, trim: true},
//     url: {type: String, trim: true},
//     version_history: [{
//         number: {type: String, trim: true},
//         date: {type: Date, trim: true, default: Date.now},
//         description: {type: String, trim: true},
//     }],
//     active: {type: Boolean, trim: true, default: true},
//     company: {
//         name: {type: String, trim: true},
//         url: {type: String, trim: true},
//     },
//     settings: {
//         iugu:{
//             id_account:{type: String, required: false, trim: true}
//         },
//         terms: {
//             title: {type: String, required: false, trim: true},
//             text: {type: String, required: false, trim: true}
//         },
//         email_user_register: {
//             subject: {type: String, required: false, trim: true},
//             text: {type: String, required: false, trim: true}
//         },
//         email_user_recovery: {
//             subject: {type: String, required: false, trim: true},
//             text: {type: String, required: false, trim: true}
//         },
//         email_client_register: {
//             subject: {type: String, required: false, trim: true},
//             text: {type: String, required: false, trim: true}
//         },
//         pbx: {
//             phone:{
//                 type: {type: String, required: false, trim: true},
//             },
//             branch_number: {
//                 mask: {type: Number, required: false, trim: true},
//                 name: {type: String, required: false, trim: true},
//                 mode_name: {type: String, required: false, trim: true},
//                 password: {type: String, required: false, trim: true},
//                 ip: {type: String, required: false, trim: true},
//                 nameserver: {type: String, required: false, trim: true},
//             },
//             ddd:[{
//                 area_code: {type: String, required: false, trim: true},
//                 city: {type: String, required: false, trim: true},
//             }]
//         },
//     },
//     email_settings: {
//         "user": {type: String, trim: true},
//         "password": {type: String, trim: true},
//         "smtp": {type: String, trim: true},
//         "ssl": {type: String, trim: true},
//         "port": {type: String, trim: true},
//         "template_path": {type: String, trim: true},
//     },
//     hosts: [{type: String, trim: true}],
//     update_at: {type: Date, trim: true, default: Date.now},
//     create_at: {type: Date, trim: true, default: Date.now}
// });
//
// module.exports = mongoose.model('Application', model);
var Sequelize = require('sequelize');
var hub = require('hub');
var hub_db = hub.database;


var model = hub_db.define('application', {
    idapplication: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    identifier: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    hosts: {
        type: Sequelize.STRING,
        allowNull: true,
    },

}, {
    timestamps: false,
    tableName: 'application',
    freezeTableName: true
});


module.exports = model;
