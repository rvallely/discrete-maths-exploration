const { checkArgsValid } = require('../utils/checkArgsValid.js');
const { calculateBaseConversion } = require('../models/base-converter.models');

exports.getBaseConversion = (req, res, next) => {
    const argsValid = checkArgsValid(req.body.val, req.body.fromBase, req.body.toBase);
    if (argsValid !== true) {
        return Promise.reject({ status: 400, msg: argsValid })
        .catch((err) => {
            next(err);
        });
    } 
    const convertedValue = calculateBaseConversion(req.body.val, req.body.fromBase, req.body.toBase)
    res.status(200).send({ convertedValue });

} 