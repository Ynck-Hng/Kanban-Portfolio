require("dotenv").config({extended:true});
const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = multer();
const cors = require("cors");
const PORT = process.env.PORT;
const {errorCollector, notFound} = require("./app/middlewares/errorHandlers");
const {bodySanitizer} = require("./app/middlewares/bodySanitizer");
const router = require("./app/router/router");

app.use(cors({
    origin: "http://localhost:3000/"    
}));
app.use(bodyParser.none());
app.use(express.urlencoded({extended: true}));
app.use(bodySanitizer);
app.use(router);
app.use(notFound);
app.use(errorCollector);

app.listen(PORT, () => {
    console.log(`API server started on ${PORT}`);
})
