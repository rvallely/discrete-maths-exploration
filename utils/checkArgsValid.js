exports.checkArgsValid = (val, fromBase, toBase) => {
    const valCheck = [val, fromBase, toBase].filter((arg) => (/[0-9]/.test(arg) === true || /[a-z]/.test(arg) === true || /[A-Z]/.test(arg) === true) && typeof arg === 'string' && arg.includes('.') === false);
    if ([val, fromBase, toBase].includes(undefined) || [val, fromBase, toBase].includes(null)) {
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
