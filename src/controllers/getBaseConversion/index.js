const { checkArgsValid } = require('../../helpers/baseConverterValid');
const { calculateBaseConversion } = require('../../services/baseConverter/calculateBaseConversion');

exports.getBaseConversion = (req, res, next) => {
    const argsValid = checkArgsValid(req.body.val, req.body.fromBase, req.body.toBase);
    if (argsValid !== true) {
        return Promise.reject(Error({ status: 400, msg: argsValid }))
            .catch((err) => {
                next(err);
            });
    }
    const convertedValue = calculateBaseConversion(req.body.val, req.body.fromBase, req.body.toBase);
    res.status(200).send({ convertedValue: convertedValue[0], calcs: convertedValue[1] });
};