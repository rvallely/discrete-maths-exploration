const { checkSumArgsValid } = require('../utils/summationValid');
const { calculateSummation } = require('../models/summation-calculator');

exports.getSummation = (req, res, next) => {
    const checkArgsValid = checkSumArgsValid(req.body);
    if (checkArgsValid.status === false) {
        return Promise.reject(Error({ status: 400, msg: checkArgsValid.msg }))
            .catch((err) => {
                next(err);
            });
    }
    if (checkArgsValid.status === true) {
        const sum = calculateSummation(checkArgsValid.n, checkArgsValid.i, checkArgsValid.operation);
        res.status(200).send({ msg: 'Valid operation.', sum });
    }
};
