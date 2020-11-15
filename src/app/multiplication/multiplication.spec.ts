import { multiplication } from "./multiplication";

describe('multiplication unit tests', () => {

    it('should multiplication 15 * 15 = 225', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = multiplication(15,15);

        // Assert
        expect(result).toBe(225);
    })

    it('should multiplication 20 * 20 = 400', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplication(20,20);
        // Assert
        expect(result).toBe(400);
    })

    it('should multiplication 0 * 100 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplication(0,100);
        // Assert
        expect(result).toBe(0);
    })

    it('should multiplication 100 * 5 = 500', () => {
        // Arrange
        let result = 0;
        // Act
        result = multiplication(100,5);
        // Assert
        expect(result).toBe(500);
    })

})

