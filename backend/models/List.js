const Sequelize = require("sequelize");
const sequelize = require("./database/sequelize");

class List extends Sequelize.Model{}

List.init({
    name:{
        type: Sequelize.STRING,
        unique: true,
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
}, {
    tableName: "list",
    sequelize
})

module.exports = List;