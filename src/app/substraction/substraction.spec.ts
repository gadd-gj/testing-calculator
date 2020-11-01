import { substraction } from "./substraction";

describe('substraction unit tests', () => {

    it('should substraction 1 - 1 = 0', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = substraction(1,1);

        // Assert
        expect(result).toBe(0);
    })

    it('should substraction 3 - 1.5 = 1.5', () => {
        // Arrange
        let result = 0;
        // Act
        result = substraction(3,1.5);
        // Assert
        expect(result).toBe(1.5);
    })

    it('should substraction 100 - 15 = 85', () => {
        // Arrange
        let result = 0;
        // Act
        result = substraction(100,15);
        // Assert
        expect(result).toBe(85);
    })

    it('should substraction 200 - 100 = 100', () => {
        // Arrange
        let result = 0;
        // Act
        result = substraction(200,100);
        // Assert
        expect(result).toBe(100);
    })

})
