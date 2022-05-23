const checkArgsValid = (val, fromBase, toBase) => {
    const valCheck = [val, fromBase, toBase].filter((arg) => (/[0-9]/.test(arg) === true || /[a-z]/.test(arg) === true || /[A-Z]/.test(arg) === true) && typeof arg === 'string' && arg.includes('.') === false);
    if ([val, fromBase, toBase].includes(undefined)) {
        return 'Please provide three arguments.';
    }
    if (( Number(fromBase) < 2 || Number(fromBase) > 62) || 
        ( Number(toBase) < 2 && Number(toBase) > 62) || 
        valCheck.length !== 3) {
        return 'Invalid input.';
    }
    if (Number(fromBase) <= 10) {
        let maxCharCode = 47 + Number(fromBase);
        for (let i = 0; i < val.length; i++) {
            if (val.charCodeAt(i) < 48 || val.charCodeAt(i) > maxCharCode) {
                return 'Invalid input: value to convert contains characters not present in the base system converting from.';
            }
        }
    }
    else if (Number(fromBase) > 10 && Number(fromBase) <= 36) {
        let maxCharCode = 64 + (fromBase - 10);
        for (let i = 0; i < val.length; i++) {
            if ((val.charCodeAt(i) < 48 || ( val.charCodeAt(i) > 57 && val.charCodeAt(i) < 65) || val.charCodeAt(i) > maxCharCode)) {
                return 'Invalid input: value to convert contains characters not present in the base system converting from.';
            }
        }
    }
    else if (Number(fromBase) > 36 && Number(fromBase) <= 62) {
        let maxCharCode = 96 + (fromBase - 36);
        for (let i = 0; i < val.length; i++) {
            if ( val.charCodeAt(i) < 48 || 
                (val.charCodeAt(i) > 57 && val.charCodeAt(i) < 65) || 
                (val.charCodeAt(i) > 90 && val.charCodeAt(i) < 97) ||
                val.charCodeAt(i) > maxCharCode) {
                return 'Invalid input: value to convert contains characters not present in the base system converting from.';
            }
        }
    }
    return true;
}

const toDecimal = (val, fromBase) => {
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

const fromDecimal = (val, toBase) => {
    let result = [];
    while (val !== 0) {
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
    return result.join('');
}

const baseConverter = (val, fromBase, toBase) => {
    const validCheck = checkArgsValid(val, fromBase, toBase);
    if (validCheck !== true) {
        return validCheck;
    }
    const decimal = toDecimal(val, fromBase);
    const finalConversion = fromDecimal(decimal, toBase);
    return finalConversion;
}

module.exports = { baseConverter };