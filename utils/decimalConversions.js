exports.toDecimal = (val, fromBase) => {
    const valReversed = val.split('').reverse();
    const result = valReversed.reduce((total, element, index) => {
        if (element.charCodeAt(0) > 64 && element.charCodeAt(0) <= 90) {
            element = 10 + (element.charCodeAt(0) - 65);
        }
        else if (element.charCodeAt(0) > 96 && element.charCodeAt(0) <= 122) {
            element = 36 + (element.charCodeAt(0) - 97);
        }
        total += Number(element) * (fromBase ** index);
        return total;
    }, 0);
    return result;
}

exports.fromDecimal = (val, toBase) => {
    let result = [];
    let calcs = [];
    while (val !== 0) {
        let innerCalc = {val: val, toBase: toBase, newVal: Math.floor(val / toBase), remainder: val % toBase}
        //console.log(val, '/', toBase, '=', Math.floor(val / toBase), '|', 'remainder ', val % toBase)
        calcs.push(innerCalc);
        let remainder = val % toBase;
        if (remainder > 9 && remainder < 36) {
            remainder = String.fromCharCode(65 + (remainder - 10));
        }
        else if (remainder > 35 && remainder < 62) {
            remainder = String.fromCharCode(97 + (remainder - 36));
        }
        result.unshift(remainder);
        val = Math.floor(val / toBase);
    }
    // [{val: w, fromBase: x, newVal: y, remainder: z}]
    console.log([result.join(''), calcs])
    return [result.join(''), calcs];
}