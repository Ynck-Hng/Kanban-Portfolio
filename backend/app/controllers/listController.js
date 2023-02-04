const {List} = require("./../../models");
const {errorCatcher} = require("./../middlewares/errorHandlers");

const listController = {
    findAllLists: errorCatcher(async (req,res,next) => {
        const allLists = await List.findAll({
            include: {
                association: "cards",
                include: "tags",
            }
        });

        if(!allLists){
            return res.status(404).json("Aucune liste n'a été trouvée");
        }

        res.status(200).json(allLists);
    }),

    findOneList: errorCatcher(async (req,res) => {
        const listId = req.params.listId;

        const findList = await List.findByPk(listId, {
            include: {
                association: "cards",
                include: "tags",
            }
        });

        if(!findList){
            return res.status(404).json("Cette liste n'existe pas (encore)...");
        }

        res.status(200).json(findList);
    }),

    createOnelist: errorCatcher(async (req,res) => {
        const {name} = req.body;
        
        if(!name){
            return res.status(400).json("Le nom est nécessaire pour créer une liste");
        }

        const newList = await List.create({name});

        if(!newList){
            return res.status(500).json("Une erreur s'est produite...");
        }

        res.status(201).json(newList);
    }),

    updateOneList: errorCatcher(async (req,res) => {
        const listId = req.params.listId;
        const {name} = req.body;

        const findList = await List.findByPk(listId);

        if(!findList){
            return res.status(404).json("Cette liste n'existe pas (encore)...");
        }

        if(!name){
            name = findList.name;
        }

        const updatedList = await findList.update({name});

        res.status(200).json(updatedList);
    }),

    deleteOneList: errorCatcher(async(req,res) => {
        const listId = req.params.listId;

        const findList = await List.findByPk(listId);

        if(!findList){
            return res.status(404).json("Cette liste n'existe pas (ou plus)...");
        }

        await findList.destroy();

        res.status(200).json("Liste supprimée !");
    })
}

module.exports = listController;