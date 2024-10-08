const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../../config/database');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    prazo: {
        type: DataTypes.DATE,
        allowNull: false
    },
    horario: {
     type: DataTypes.TIME,
     allowNull: true
}
});

(async () => {
    await sequelize.sync({ force: false });
    console.log('Tabelas sincronizadas');
})();

module.exports = {
     Task
};