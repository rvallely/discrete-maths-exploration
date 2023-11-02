/* eslint-disable quote-props */
exports.generateSuperscript = (number) => {
    const digitToSuperscriptMapper = {
        '0': '⁰',
        '1': '¹',
        '2': '²',
        '3': '³',
        '4': '⁴',
        '5': '⁵',
        '6': '⁶',
        '7': '⁷',
        '8': '⁸',
        '9': '⁹',
    };
    return number.split('').map((char) => digitToSuperscriptMapper[char]).join('');
};
