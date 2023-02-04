const Sequelize = require("sequelize");
const sequelize = require("./database/sequelize");

class Card extends Sequelize.Model{}

Card.init({
    name:{
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isAlpha: true,
        }
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
}, {
    tableName: "list",
    sequelize
})

module.exports = Card;