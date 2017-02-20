var Sequelize = require('sequelize');
var hub = require('hub');
var hub_db = hub.database;


var model = hub_db.define('client', {
    client_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    client_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    client_agency: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    client_account: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    client_password: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    client_balance: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        default: '0',
    },
    client_cpf: {
        type: Sequelize.STRING,
        allowNull: true,
        default: '0',
    }

}, {
    timestamps: false,
    tableName: 'client',
    freezeTableName: true
});


module.exports = model;
