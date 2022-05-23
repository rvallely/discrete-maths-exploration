const { baseConverter } = require('./base-converter.js');

describe('baseConverter', () => {
    test('Returns \'Please provide three arguments.\' when passed less than three arguments.', () =>{
        expect(baseConverter('3')).toBe('Please provide three arguments.');
        expect(baseConverter('3', '5')).toBe('Please provide three arguments.');
    });
    test('Returns \'Invalid input.\' when passed anything other than a string of digits 0-9 as the first argument.', () => {
        expect(baseConverter(true, '3', '5')).toBe('Invalid input.');
        expect(baseConverter({}, '3', '5')).toBe('Invalid input.');
        expect(baseConverter(20, '3', '5')).toBe('Invalid input.');
        expect(baseConverter('20', '3', '5')).not.toBe('Invalid input.');
    });
    test('Returns \'Invalid input: number to convert contains characters not present in the base system converting from.\' when passed a number as the first argument that contains digits not present in base system.', () => {
        expect(baseConverter('1234', '3', '5')).toBe('Invalid input: number to convert contains characters not present in the base system converting from.');
        expect(baseConverter('136', '5', '3')).toBe('Invalid input: number to convert contains characters not present in the base system converting from.');
        expect(baseConverter('23789', '6', '5')).toBe('Invalid input: number to convert contains characters not present in the base system converting from.');
        expect(baseConverter('237A', '10', '5')).toBe('Invalid input: number to convert contains characters not present in the base system converting from.');
        expect(baseConverter('23Q7A', '26', '5')).toBe('Invalid input: number to convert contains characters not present in the base system converting from.');
        expect(baseConverter('136b', '37', '3')).toBe('Invalid input: number to convert contains characters not present in the base system converting from.');
        expect(baseConverter('234p', '51', '5')).toBe('Invalid input: number to convert contains characters not present in the base system converting from.');
    });
    test('Returns \'Invalid input.\' when passed anything other than a string of digits 0-9 between 2 and 62 (inclusive), for arguments two and three.', () =>{
        expect(baseConverter('10', '0', '3')).toBe('Invalid input.');
        expect(baseConverter('10', '1', '3')).toBe('Invalid input.');
        expect(baseConverter('10', '63', '3')).toBe('Invalid input.');
        expect(baseConverter('10', '62', '3')).not.toBe('Invalid input.');
        expect(baseConverter('10', '3', '2')).not.toBe('Invalid input.');
        expect(baseConverter('10', '3', 23)).toBe('Invalid input.');
        expect(baseConverter('10',' 5', {})).toBe('Invalid input.');
    });
    test('Returns correct base convertion when fromBase and toBase arguments are between 2 and 10 (inclusove).', () => {
        expect(baseConverter('10', '2', '5')).toBe('2');
        expect(baseConverter('2211021', '3', '5')).toBe('31214');
        expect(baseConverter('6521', '7', '4')).toBe('210032');
        expect(baseConverter('1547', '9', '10')).toBe('1177');
        expect(baseConverter('1001111', '2', '6')).toBe('211');
        expect(baseConverter('12322112', '4', '9')).toBe('42745');
        expect(baseConverter('1167542', '8', '3')).toBe('121102122202');
        expect(baseConverter('3398221', '10', '7')).toBe('40612231');
    });
    test('Returns correct base convertion when fromBase and toBase arguments are between 11 and 62 inclusive.', () => {
        expect(baseConverter('56', '32', '29')).toBe('5L');
        expect(baseConverter('56A', '32', '9')).toBe('7263');
        expect(baseConverter('2213GHI', '24', '3')).toBe('1000202212121120010');
        expect(baseConverter('781AZ3', '36', '14')).toBe('42013691');
        expect(baseConverter('29Bab', '40', '4')).toBe('111303102011');
        expect(baseConverter('IABCDzy', '62', '17')).toBe('8BF5D57150');
        expect(baseConverter('GHJK523', '28', '60')).toBe('AIQCuh');
    });
});