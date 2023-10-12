const { checkSumArgsValid } = require('../../helpers/summationValid');
const { calculateSummation } = require('../../services/summation-calculator');

exports.getSummation = (req, res, next) => {
    const checkArgsValid = checkSumArgsValid(req.body);
    if (checkArgsValid.status === false) {
        return Promise.reject(Error({ status: 400, msg: checkArgsValid.msg }))
            .catch((err) => {
                next(err);
            });
    }
    const sum = calculateSummation(checkArgsValid.n, checkArgsValid.i, checkArgsValid.operation);
    return res.status(200).send({ msg: 'Valid operation.', sum });
};
