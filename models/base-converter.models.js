const { toDecimal, fromDecimal } = require('../utils/decimalConversions.js');

exports.calculateBaseConversion = (val, fromBase, toBase) => {
    const decimal = toDecimal(val, fromBase);
    const finalConversion = fromDecimal(decimal, toBase);
    return finalConversion;
}
