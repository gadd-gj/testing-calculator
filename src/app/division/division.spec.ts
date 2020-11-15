import { division } from "./division";

describe('division unit tests', () => {

    it('should division 1 / 1 = 1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = division(1,1);

        // Assert
        expect(result).toBe(1);
    })

    it('should division 0 / 100 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(0,100);
        // Assert
        expect(result).toBe(0);
    })

    it('should division  1 / 2 = 0.5', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(1,2);
        // Assert
        expect(result).toBe(0.5);
    })

    it('should division 100 / 50 = 2', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(100,50);
        // Assert
        expect(result).toBe(2);
    })

})