const {Tag} = require("./../../models");
const {errorCatcher} = require("./../middlewares/errorHandlers");

const tagController = {
    findAllTags: errorCatcher(async (req,res,next) => {
        const allTags = await Tag.findAll();

        if(!allTags){
            return res.status(404).json("Aucune catégorie n'a été trouvée");
        }

        res.status(200).json(allTags);
    }),

    findOneTag: errorCatcher(async (req,res) => {
        const tagId = req.params.tagId;

        const findTag = await Tag.findByPk(tagId);

        if(!findTag){
            return res.status(404).json("Cette carte n'existe pas (encore)...");
        }

        res.status(200).json(findTag);
    }),

    createOneTag: errorCatcher(async (req,res) => {
        const {name, color} = req.body;
        
        if(!name){
            return res.status(400).json("Le nom est nécessaire pour créer une catégorie.");
        }

        const findTag = await Tag.findOne({
            where:{
                name,
            }
        })

        if(findTag){
            return res.status(400).json("Nom de catégorie existant, veuillez saisir un autre nom.");
        }

        if(!color){
            color = "#FFF";
        }

        const newTag = await Tag.create({name, color});

        if(!newTag){
            return res.status(500).json("Une erreur s'est produite...");
        }

        res.status(201).json(newTag);
    }),

    updateOneTag: errorCatcher(async (req,res) => {
        const tagId = req.params.tagId;
        let {name, color} = req.body;

        const findTag = await Tag.findByPk(tagId);

        if(!findTag){
            return res.status(404).json("Cette catégorie n'existe pas (encore)...");
        }

        if(!name){
            name = findTag.name;
        }

        if(!color){
            color = findTag.color;
        }

        const updatedTag = await findTag.update({name, color});

        res.status(200).json(updatedTag);
    }),

    deleteOneTag: errorCatcher(async(req,res) => {
        const tagId = req.params.tagId;

        if(!tagId){
            return res.status(400).json("Veuillez sélectionner une catégorie à supprimer.");
        }

        const findTag = await Tag.findByPk(tagId);

        if(!findTag){
            return res.status(404).json("Cette catégorie n'existe pas (ou plus)...");
        }

        await findTag.destroy();

        res.status(200).json("Catégorie supprimée !");
    }),

}

module.exports = tagController;