exports.checkArgsValid = (val, fromBase, toBase) => {
    const args = [val, fromBase, toBase];
    if ([val, fromBase, toBase].includes(undefined) || [val, fromBase, toBase].includes(null)) {
        return 'Please provide three arguments.';
    }
    for (let i = 0; i < args.length; i += 1) {
        if (typeof args[i] !== 'string') {
            return 'Invalid input.';
        }
    }
    if (/^[0-9a-zA-Z]+$/.test(val) === false || val.includes('.')) {
        return 'Start value must only contain A-Z, a-z, 0-9.';
    }
    if (/[0-9]/.test(fromBase) === false
             || fromBase.includes('.')
             || /[0-9]/.test(toBase) === false
             || toBase.includes('.')) {
        return 'Bases to convert from must be a number between 2-62 (inclusive).';
    }
    if ((Number(fromBase) < 2 || Number(fromBase) > 62)
        || (Number(toBase) < 2 || Number(toBase) > 62)) {
        return 'Bases to convert from must be a number between 2-62 (inclusive).';
    }
    if (Number(fromBase) <= 10) {
        const maxCharCode = 47 + Number(fromBase);
        for (let i = 0; i < val.length; i += 1) {
            if (val.charCodeAt(i) < 48 || val.charCodeAt(i) > maxCharCode) {
                // eslint-disable-next-line max-len
                return 'Invalid input: value to convert contains characters not present in the base system converting from.';
            }
        }
    } else if (Number(fromBase) > 10 && Number(fromBase) <= 36) {
        const maxCharCode = 64 + (fromBase - 10);
        for (let i = 0; i < val.length; i += 1) {
            if (
                (val.charCodeAt(i) < 48 || (val.charCodeAt(i) > 57 && val.charCodeAt(i) < 65)
                || val.charCodeAt(i) > maxCharCode)) {
                // eslint-disable-next-line max-len
                return 'Invalid input: value to convert contains characters not present in the base system converting from.';
            }
        }
    } else if (Number(fromBase) > 36 && Number(fromBase) <= 62) {
        const maxCharCode = 96 + (fromBase - 36);
        for (let i = 0; i < val.length; i += 1) {
            if (val.charCodeAt(i) < 48
                || (val.charCodeAt(i) > 57 && val.charCodeAt(i) < 65)
                || (val.charCodeAt(i) > 90 && val.charCodeAt(i) < 97)
                || val.charCodeAt(i) > maxCharCode) {
                // eslint-disable-next-line max-len
                return 'Invalid input: value to convert contains characters not present in the base system converting from.';
            }
        }
    }
    return true;
};
