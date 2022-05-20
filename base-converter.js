const checkArgsValid = (num, fromBase, toBase) => {
    const numCheck = [num, fromBase, toBase].filter((arg) => (/[0-9]/.test(arg) === true || /[a-z]/.test(arg) === true || /[A-Z]/.test(arg) === true) && typeof arg === 'string');
    if ([num, fromBase, toBase].includes(undefined)) {
        return 'Please provide three arguments.';
    }
    // console.log(/[0-9]/.test('10'))
    if (numCheck.length !== 3 ) {
        console.log(numCheck, '<<< numCheck')
        return 'Invalid input.';
    }
    // if (num.split('').find(element => element >= fromBase) !== undefined) {
    //     return 'Invalid input: number to convert contains characters not present in the base system converting from.';
    // }
    console.log(numCheck, '<<< numCheck')
    console.log('num >>>', typeof num)
    console.log('num split >>', num.split(''))
    console.log('fromBase >>', fromBase)
    // fromBase and from this get the allowed char code range(s)
    if (Number(fromBase) <= 10) {
        // char codes between 48-57
        let maxCharCode = 48 + Number(fromBase);
        for (let i = 0; i < num.length; i++) {
            console.log(num[i]);
            console.log('digit >> ', num[i], 'char code >>', num.charCodeAt(i))
            if (num.charCodeAt(i) < 48 || num.charCodeAt(i) > maxCharCode) {
                return 'Invalid input: number to convert contains characters not present in the base system converting from.';
            }
        }
    //return 'Invalid input: number to convert contains characters not present in the base system converting from.';
    }
    else if (Number(fromBase) < 10 && Number(fromBase) <= 36) {
        // char codes between 48-57 and/or 65 - 90
        let maxCharCode = 64 + (fromBase - 10);
        if (num.charCodeAt(i) < 48 || num.charCodeAt(i) > 57 || num.charCodeAt(i) < 65 || maxCharCode) {
            return 'Invalid input: number to convert contains characters not present in the base system converting from.';
        }
    }
    else if (Number(fromBase) < 36 && Number(fromBase) <= 62) {
        // char codes between 48-57 and/or 65 - 90 and / or 97 - 122
        let maxCharCode = 96 + (fromBase - 36);
        if (num.charCodeAt(i) < 48 || num.charCodeAt(i) > 57 || num.charCodeAt(i) < 65 || maxCharCode) {
            return 'Invalid input: number to convert contains characters not present in the base system converting from.';
        }
    }
    return true;
}

const toDecimal = (num, fromBase) => {
    const numReversed = String(num).split('').reverse();
    const result = numReversed.reduce((total, element, index) => {
        total += Number(element) * (fromBase ** index);
        return total;
    }, 0);
    return result;
}

const fromDecimal = (num, toBase) => {
    let result = [];
    while (num !== 0) {
        let remainder = num % toBase;
        if (remainder > 9 && remainder < 36) {
            remainder = String.fromCharCode(65 + (remainder - 10));
        }
        result.unshift(remainder);
        num = Math.floor(num / toBase);
    }
    return result.join('');
}

const baseConverter = (num, fromBase, toBase) => {
    const validCheck = checkArgsValid(num, fromBase, toBase);
    if (validCheck !== true) {
        return validCheck;
    }
    const decimal = toDecimal(num, fromBase);
    const finalConversion = fromDecimal(decimal, toBase);
    return finalConversion;
}

module.exports = { baseConverter };