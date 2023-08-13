const { toDecimal, fromDecimal } = require('../utils/base-converter');

exports.calculateBaseConversion = (val, fromBase, toBase) => {
    const decimal = toDecimal(val, fromBase);
    const finalConversion = fromDecimal(decimal, toBase);
    return finalConversion;
};
