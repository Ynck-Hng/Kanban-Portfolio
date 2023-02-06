const Sequelize = require("sequelize");
const sequelize = require("./database/sequelize");

class Card extends Sequelize.Model{}

Card.init({
    name:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    color: {
        type: Sequelize.STRING,
    },
    list_id:{
        type: Sequelize.INTEGER,
        unique: true,
        validate: {
            isInt: true
        }
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
}, {
    tableName: "card",
    sequelize
})

module.exports = Card;