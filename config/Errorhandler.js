const handleError = (res, message, error, statusCode) => {
    return res.status(statusCode).json({
        status: "error",
        data: null,
        message: message,
        error: error
    });
};

module.exports = {
    handleError: handleError
};