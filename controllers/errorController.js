const httpStatus = require('http-status-codes');

exports.pageNotFoundError = (req, res) => {
    res.status(httpStatus.StatusCodes.NOT_FOUND);
    res.render('error404', { url: req.url });  // Assuming you have a 404.ejs view set up
};

exports.internalServerError = (error, req, res, next) => {
    console.error(error.stack);  // Log the stack to the console for debugging
    res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR);
    res.render('error500');  // Assuming you have a 500.ejs view set up
};
