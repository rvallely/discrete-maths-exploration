const toDecimal = (val, fromBase) => {
    const valReversed = val.split('').reverse();
    const result = valReversed.reduce((total, element, index) => {
        if (element.charCodeAt(0) > 64 && element.charCodeAt(0) <= 90) {
            element = 10 + (element.charCodeAt(0) - 65);
        } else if (element.charCodeAt(0) > 96 && element.charCodeAt(0) <= 122) {
            element = 36 + (element.charCodeAt(0) - 97);
        }
        const newTotal = total + Number(element) * (fromBase ** index);
        return newTotal;
    }, 0);
    return result;
};

const fromDecimal = (val, toBase) => {
    const result = [];
    const calcs = [];
    while (val !== 0) {
        const innerCalc = {
            val,
            toBase,
            newVal: Math.floor(val / toBase),
            remainder: val % toBase,
        };
        calcs.push(innerCalc);
        let remainder = val % toBase;
        if (remainder > 9 && remainder < 36) {
            remainder = String.fromCharCode(65 + (remainder - 10));
        } else if (remainder > 35 && remainder < 62) {
            remainder = String.fromCharCode(97 + (remainder - 36));
        }
        result.unshift(remainder);
        val = Math.floor(val / toBase);
    }
    return [result.join(''), calcs];
};

exports.calculateBaseConversion = (val, fromBase, toBase) => {
    const decimal = toDecimal(val, fromBase);
    const finalConversion = fromDecimal(decimal, toBase);
    return finalConversion;
};
