const { addNumbers } = require('../modules/equations.js');

describe('addNumbers function', () => {

    it('Should add two positive numbers together', () => {
        // Create your Sample inputs
        const [mockNum1, mockNum2, mockNum3, mockNum4, mockNum5, mockNum6] = [3, 5, 9, 20, 12, 23];
    ;

        // assertion to determine pass/fail
        expect.assertions(3);
        expect(addNumbers(mockNum1, mockNum2)).toBe(8);
        expect(addNumbers(mockNum3, mockNum4)).toBe(29);
        expect(addNumbers(mockNum5, mockNum6)).toBe(35);
    });
    
    it('Should sum positive and negative numbers', () => {
        expect(addNumbers(1, -2)).toBe(-1);
    });
    it('Should sum positive and negative decimal numbers', () => {
        expect(addNumbers(1.5, -3)).toBe(-1.5);
    });  
});