var Sequelize = require('sequelize');
var hub = require('hub');
var hub_db = hub.database;


var model = hub_db.define('transfer', {
    transfer_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    bank: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    agency: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    account: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    receptive_holder: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    value: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },

    date: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    },
    cpf_receptive: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    client_id_transfer: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }

}, {
    timestamps: false,
    tableName: 'transfer',
    freezeTableName: true
});


module.exports = model;
