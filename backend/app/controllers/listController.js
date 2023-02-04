const List = require("./../../models/List");
const {errorCatcher} = require("./../middlewares/errorHandlers");

const listController = {
    findAllLists: errorCatcher(async (req,res,next) => {
        const allLists = await List.findAll();

        if(!allLists){
            return res.status(404).json("Aucune liste n'a été trouvée");
        }

        res.status(200).json(allLists);
    }),

    findOneList: errorCatcher(async (req,res) => {
        const listId = req.params.listId;

        const findList = await List.findByPk(listId);

        if(!findList){
            return res.status(404).json("Cette liste n'existe pas (encore)...");
        }

        res.status(200).json(findList);
    }),

    createOnelist: errorCatcher(async (req,res) => {
        const {name} = req.body;
        
        const newList = await List.create({name});

        if(!newList){
            return res.status(500).json("Une erreur s'est produite");
        }

        res.status(201).json(newList);
    })
}

module.exports = listController;