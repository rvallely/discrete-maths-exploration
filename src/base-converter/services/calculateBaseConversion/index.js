const { generateSuperscript } = require('../../helpers/generateSuperscript');

exports.toDecimal = (val, fromBase) => {
    const valReversed = val.split('').reverse();

    const decimalResult = valReversed.reduce((total, element, index) => {
        let elementCopy = element;
        // if element is in uppercase alphabet
        if (element.charCodeAt(0) > 64 && element.charCodeAt(0) <= 90) {
            // decimal value is 10 + element's character code - 65
            elementCopy = 10 + (element.charCodeAt(0) - 65);
        // eslint-disable-next-line brace-style
        }
        // if element is in lowercase alphabet
        else if (element.charCodeAt(0) > 96 && element.charCodeAt(0) <= 122) {
            // decimal value is 36 + element's character code - 97
            elementCopy = 36 + (element.charCodeAt(0) - 97);
        }
        const decimalValue = total + elementCopy * (fromBase ** index);
        return decimalValue;
    }, 0);

    const decimalCalculations = valReversed.reduce((acc, digit, index) => {
        let digitCopy = digit;
        // if digit is in uppercase alphabet
        if (digit.charCodeAt(0) > 64 && digit.charCodeAt(0) <= 90) {
            // decimal value is 10 + digit's unicode character code - 65
            digitCopy = 10 + (digit.charCodeAt(0) - 65);
            // eslint-disable-next-line brace-style
        }
        // if digit is in lowercase alphabet
        else if (digit.charCodeAt(0) > 96 && digit.charCodeAt(0) <= 122) {
            // decimal value is 36 + digit's unicode character code - 97
            digitCopy = 36 + (digit.charCodeAt(0) - 97);
        }

        if (index === 0) {
            acc.firstLine += `= (${digitCopy} * ${fromBase}${generateSuperscript(String(index))})`;
            acc.secondLine += `= (${digitCopy} * ${fromBase ** index})`;
            acc.thirdLine += `= ${digitCopy * fromBase ** index}`;
        } else {
            acc.firstLine += ` + (${digitCopy} * ${fromBase}${generateSuperscript(String(index))})`;
            acc.secondLine += ` + (${digitCopy} * ${fromBase ** index})`;
            acc.thirdLine += ` + ${digitCopy * fromBase ** index}`;
        }
        return { ...acc };
    }, {
        firstLine: '',
        secondLine: '',
        thirdLine: '',
    });

    decimalCalculations.fourthLine = `= ${decimalResult}`;
    return { decimalResult, decimalCalculations };
};

exports.fromDecimal = (val, toBase) => {
    const result = [];
    const calculations = [];
    while (val !== 0) {
        const innerCalc = {
            val,
            toBase,
            newVal: Math.floor(val / toBase),
            remainder: val % toBase,
        };
        calculations.push(innerCalc);
        let remainder = val % toBase;
        if (remainder > 9 && remainder < 36) {
            remainder = String.fromCharCode(65 + (remainder - 10));
        } else if (remainder > 35 && remainder < 62) {
            remainder = String.fromCharCode(97 + (remainder - 36));
        }
        result.unshift(remainder);
        val = Math.floor(val / toBase);
    }
    return { finalResult: result.join(''), finalCalculations: calculations };
};

exports.calculateBaseConversion = (val, fromBase, toBase) => {
    const { decimalResult, decimalCalculations } = this.toDecimal(val, fromBase);
    const { finalResult, finalCalculations } = this.fromDecimal(decimalResult, toBase);
    return {
        finalResult,
        calculations: {
            decimalResult,
            decimalCalculations,
            finalResult,
            finalCalculations,
        },
    };
};
