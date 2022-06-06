exports.convertToNums = (operation) => {
    return operation.map((element) => {
        if (/-{0,1}[0-9]/.test(element)) {
            element = Number(element);
        }
        return element;
    });
}

exports.expDivMult = (convertedOperation, i) => {
    convertedOperation = convertedOperation.map((element) => {
        if (element === 'i') {
            element = i;
        }
        else if (element === '-i') {
            element = -i;
        }
        return element;
    });
    while (convertedOperation.includes('^')) {
        let result = undefined;
        if (String(convertedOperation[convertedOperation.indexOf('^') - 1])[0] === '-') {
            result = -(Number(String(convertedOperation[convertedOperation.indexOf('^') - 1])[1]) ** convertedOperation[convertedOperation.indexOf('^') + 1]);
        } else {
            result = convertedOperation[convertedOperation.indexOf('^') - 1] ** convertedOperation[convertedOperation.indexOf('^') + 1];
        }
        convertedOperation.splice(convertedOperation.indexOf('^')-1, 3, result);
    }
    while (convertedOperation.includes('*')) {
        let result = convertedOperation[convertedOperation.indexOf('*') - 1] * convertedOperation[convertedOperation.indexOf('*') + 1];
        convertedOperation.splice(convertedOperation.indexOf('*')-1, 3, result);
    }
    while (convertedOperation.includes('/')) {
        let result = convertedOperation[convertedOperation.indexOf('/') - 1] / convertedOperation[convertedOperation.indexOf('/') + 1];
        convertedOperation.splice(convertedOperation.indexOf('/')-1, 3, result);
    }
    return convertedOperation;
}