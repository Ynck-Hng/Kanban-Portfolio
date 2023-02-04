const {Tag} = require("../../models");
const {Card} = require("./../../models");
const {errorCatcher} = require("./../middlewares/errorHandlers");

const cardController = {
    findAllCards: errorCatcher(async (req,res,next) => {
        const allCards = await Card.findAll({
            include: "tags",
        });

        if(!allCards){
            return res.status(404).json("Aucune carte n'a été trouvée");
        }

        res.status(200).json(allCards);
    }),

    findOneCard: errorCatcher(async (req,res) => {
        const cardId = req.params.cardId;

        const findCard = await Card.findByPk(cardId, {
            include: "tags"
        });

        if(!findCard){
            return res.status(404).json("Cette carte n'existe pas (encore)...");
        }

        res.status(200).json(findCard);
    }),

    createOneCard: errorCatcher(async (req,res) => {
        const {name, color} = req.body;
        
        if(!name){
            return res.status(400).json("Le nom est nécessaire pour créer une carte.");
        }

        if(!color){
            color = "#FFF";
        }

        const newCard = await Card.create({name, color});

        if(!newCard){
            return res.status(500).json("Une erreur s'est produite...");
        }

        res.status(201).json(newCard);
    }),

    updateOneCard: errorCatcher(async (req,res) => {
        const cardId = req.params.cardId;
        let {name, color} = req.body;

        const findCard = await Card.findByPk(cardId);

        if(!findCard){
            return res.status(404).json("Cette carte n'existe pas (encore)...");
        }

        if(!name){
            name = findCard.name;
        }

        if(!color){
            color = findCard.color;
        }

        const updatedCard = await findCard.update({name, color});

        res.status(200).json(updatedCard);
    }),

    deleteOneCard: errorCatcher(async(req,res) => {
        const cardId = req.params.cardId;

        const findCard = await Card.findByPk(cardId);

        if(!findCard){
            return res.status(404).json("Cette carte n'existe pas (ou plus)...");
        }

        await findCard.destroy();

        res.status(200).json("Carte supprimée !");
    }),

    addOneTagToCard: errorCatcher(async (req,res) => {
        const cardId = req.params.cardId;
        const {tagId} = req.body;

        const findCard = await Card.findByPk(cardId, {
            include: {
                association: "tags",
            }
        });

        if(!findCard){
            return res.status(404).json("Cette carte n'existe pas (encore)...");
        }

        const findTagInCard = findCard.tags.find(tag => tag.id === Number(tagId));

        if(findTagInCard){
            return res.status(400).json("Cette carte possède déjà cette catégorie.");
        }
        
        const findTag = await Tag.findByPk(tagId);

        if(!findTag){
            return res.status(404).json("Cette catégorie n'existe pas (encore)...");
        }

        await findCard.addTag(findTag);

        res.status(200).json("Catégorie ajoutée !");
    }),

    removeOneTagFromCard: errorCatcher(async(req,res) => {
        const cardId = req.params.cardId;
        const tagId = req.params.tagId;

        const findCard = await Card.findByPk(cardId, {
            include: {
                association: "tags",
            }
        });

        if(!findCard){
            return res.status(404).json("Cette carte n'existe pas (encore)...");
        }

        const findTagInCard = findCard.tags.find(tag => tag.id === Number(tagId));

        if(!findTagInCard){
            return res.status(404).json("Cette carte ne possède pas/plus la catégorie sélectionnée...")
        }

        const findTag = await Tag.findByPk(tagId);

        if(!findTag) {
            return res.status(404).json("Cette catégorie n'existe pas (encore)...");
        }

        await findCard.removeTag(findTag);

        res.status(200).json("Catégorie retirée !");

    })
}

module.exports = cardController;