const { checkArgsValid } = require('../../helpers/baseConverterValid');
const { calculateBaseConversion } = require('../../services/baseConverter/calculateBaseConversion');

exports.getBaseConversion = (req, res, next) => {
    const argsValid = checkArgsValid(req.body.val, req.body.fromBase, req.body.toBase);
    if (argsValid !== true) {
        return Promise.reject({ status: 400, msg: argsValid })
            .catch((err) => {
                next(err);
            });
    }
    const [convertedValue, calcs] = calculateBaseConversion(req.body.val, req.body.fromBase, req.body.toBase);
    return res.status(200).send({ convertedValue, calcs });
};
