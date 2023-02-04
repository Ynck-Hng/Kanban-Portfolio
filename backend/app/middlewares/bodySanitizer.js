const sanitizer = require("sanitizer");

exports.bodySanitizer = (req,res,next) => {
    if(req.body){
        for(let element in req.body){
            req.body[element] = sanitizer.escape(req.body[element]);
        }
    }
    next();
};