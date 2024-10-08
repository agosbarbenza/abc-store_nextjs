import {transformString} from '../utils';

describe('transformString', () => {
    test('Should return a string with the first letter of each word capitalized and replace - with blank space', () => {
        const input = 'chanel-coco-mademoiselle';
        const output = 'Chanel Coco Mademoiselle';
        expect(transformString(input)).toBe(output);
    });
});