const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todolist', 'root', '12345678', {
    host: 'localhost', 
    dialect: 'mysql', 
});

async function syncModels() {
    try {
        await sequelize.sync({ force: false });
        console.log("Modelos sincronizados com o banco de dados.");
    } catch (error) {
        console.error("Erro ao sincronizar modelos:", error);
    }
}

syncModels()

module.exports = sequelize;