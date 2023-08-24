exports.checkSumArgsValid = (args) => {
    const formattedOperation = [];
    if (Object.keys(args).length !== 3 || Object.values(args).includes(null)) {
        return { status: false, msg: 'Please provide values for n, i and the operation.' };
    }
    const { n } = args;
    const { i } = args;
    const operation = args.operation.replaceAll(' ', '');

    if ((!/^[0-9]+$/.test(n) && !/^-[0-9]+$/.test(n))
        || (!/^[0-9]+$/.test(i) && !/^-[0-9]+$/.test(i))) {
        return { status: false, msg: 'n and i must be values between -100 and 100.' };
    }
    if ((Number(n) < -100 || Number(n) > 100)
       || (Number(i) < -100 || Number(n) > 100)) {
        return { status: false, msg: 'n and i must be values between -100 and 100.' };
    }
    if (Number(i) > Number(n)) {
        return { status: false, msg: 'i must be less than or equal to n.' };
    }
    if (/^-{0,1} *[0-9]+$/.test(operation)) {
        return {
            status: true, n, i, operation: [operation],
        };
    }

    for (let index = 0; index < operation.length; index += 1) {
        if (/[0-9]/.test(operation[index]) === false && operation[index] !== 'i' && /[+*/^-]/.test(operation[index]) === false) {
            return { status: false, msg: 'Operation argument is invalid.' };
        }
        if (/[0-9]/.test(operation[index]) === true) {
            if (formattedOperation.length === 0) {
                formattedOperation.push(operation[index]);
            } else if (formattedOperation.length > 0) {
                if (/[0-9]/.test(formattedOperation[formattedOperation.length - 1]) === true) {
                    formattedOperation[formattedOperation.length - 1] += operation[index];
                } else if (/[+*/^]/.test(formattedOperation[formattedOperation.length - 1]) === true) {
                    formattedOperation.push(operation[index]);
                } else if (formattedOperation[formattedOperation.length - 1] === '-') {
                    if (/[[0-9]/.test(formattedOperation[formattedOperation.length - 2])) {
                        formattedOperation.push(operation[index]);
                    } else if (/[[+*/^-]/.test(formattedOperation[formattedOperation.length - 2])) {
                        formattedOperation[formattedOperation.length - 1] += operation[index];
                    } else if (formattedOperation.length === 1) {
                        formattedOperation[formattedOperation.length - 1] += operation[index];
                    }
                }
            }
        } else if (/[+*/^-]/.test(operation[i]) === true) {
            if (formattedOperation.length === 0 && operation[i] !== '-') {
                return { status: false, msg: 'Operation argument is invalid.' };
            }
            if (formattedOperation.length === 0 && operation[i] === '-') {
                formattedOperation.push(operation[i]);
            } else if (formattedOperation.length > 0) {
                if (operation[i] === '/' && operation[i + 1] === '0') {
                    return { status: false, msg: 'You cannot divide by zero.' };
                }
                if (operation[i] === '/' && ((operation[i + 1] === 'i' || operation.slice(i + 1, i + 3) === '-i') && (args.i <= 0 && args.n >= 1))) {
                    return { status: false, msg: 'You cannot divide by zero.' };
                }
                if (/[0-9]/.test(formattedOperation[formattedOperation.length - 1]) || formattedOperation[formattedOperation.length - 1] === 'i' || formattedOperation[formattedOperation.length - 1] === '-i') {
                    formattedOperation.push(operation[i]);
                } else if (/[+*/^-]/.test(formattedOperation[formattedOperation.length - 1]) && operation[i] !== '-') {
                    return { status: false, msg: 'Operation argument is invalid.' };
                } else if (/[+*/^-]/.test(formattedOperation[formattedOperation.length - 1]) && operation[i] === '-') {
                    formattedOperation.push(operation[i]);
                }
            }
        } else if (operation[i] === 'i') {
            if (formattedOperation.length === 0) {
                formattedOperation.push('i');
            } else if (formattedOperation.length === 1 && formattedOperation[formattedOperation.length - 1] === '-') {
                formattedOperation[0] += 'i';
            } else if (formattedOperation.length > 0) {
                if (/-{0,1}[0-9]/.test(formattedOperation[formattedOperation.length - 1])) {
                    formattedOperation.push('*');
                    formattedOperation.push('i');
                } else if (/[+*/^]/.test(formattedOperation[formattedOperation.length - 1])) {
                    formattedOperation.push('i');
                } else if (formattedOperation[formattedOperation.length - 1] === '-'
                                 && /-{0,1}[0-9]/.test(formattedOperation[formattedOperation.length - 2])
                ) {
                    formattedOperation.push('i');
                } else if (formattedOperation[formattedOperation.length - 1] === '-'
                                 && /[+*/^-]/.test(formattedOperation[formattedOperation.length - 2])
                ) {
                    formattedOperation[formattedOperation.length - 1] += 'i';
                }
            }
        }
    }
    for (let i = 0; i < formattedOperation.length; i++) {
        if (i === 0 && (/-{0,1}[0-9]/.test(formattedOperation[i]) === false && formattedOperation[i] !== 'i' && formattedOperation[i] !== '-i')) {
            return { status: false, msg: 'Operation argument is invalid.' };
        }
        if (i === formattedOperation.length - 1 && (/-{0,1}[0-9]/.test(formattedOperation[i]) === false && formattedOperation[i] !== 'i' && formattedOperation[i] !== '-i')) {
            return { status: false, msg: 'Operation argument is invalid.' };
        }
        if (i % 2 === 0) {
            if (/-{0,1}[0-9]/.test(formattedOperation) === false && formattedOperation[i] !== 'i' && formattedOperation[i] !== '-i') {
                return { status: false, msg: 'Operation argument is invalid.' };
            }
        } else if (i % 2 !== 0) {
            if (/[+*/^-]/.test(formattedOperation) === false) {
                return { status: false, msg: 'Operation argument is invalid.' };
            }
        }
    }

    return {
        status: true, n, i, operation: formattedOperation,
    };
};
