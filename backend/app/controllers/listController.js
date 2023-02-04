const List = require("./../../models/List");
const {errorCatcher} = require("./../middlewares/errorHandlers");

const listController = {
    findAllList: async (req,res,next) => {
        const allList = await List.findAll();

        if(!allList){
            return res.status(404).json("Aucune liste n'a été trouvée");
        }

        res.status(200).json(allList);
    }
}

module.exports = listController;