const Sequelize = require("sequelize");
const sequelize = require("./database/sequelize");

class Tag extends Sequelize.Model{}

Tag.init({
    name:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    color:{
        type: Sequelize.STRING,
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
}, {
    tableName: "tag",
    sequelize
})

module.exports = Tag;