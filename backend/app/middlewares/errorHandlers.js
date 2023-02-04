exports.errorCatcher = (fn) => { return (req,res,next) => {
    return fn(req,res,next).catch(next);
}}

exports.errorCollector = (err,req,res,next) => {
    console.log(err);
    const status = err.status || 500;
    res.format({
        "text/html": res.status(status).json(err.message)
    })
    next();
}

exports.notFound = (req,res,next) => {
    const err = new Error("404 Not found");
    err.status = 404;
    next(err);
}