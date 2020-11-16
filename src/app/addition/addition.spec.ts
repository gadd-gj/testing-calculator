import { addition } from "./addition"

describe('addition unit tests', () => {

    

    it('should add 2 + 2 = 4', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = addition(2,2);

        // Assert
        expect(result).toBe(4);
    })

    it('should add 100 + 100 = 200', () => {
        // Arrange
        let result = 0;
        // Act
        result = addition(100,100);
        // Assert
        expect(result).toBe(200);
    })

    it('should add 1.5 + 1.5 = 3', () => {
        // Arrange
        let result = 0;
        // Act
        result = addition(1.5,1.5);
        // Assert
        expect(result).toBe(3);
    })

    it('should add - 10 + 20 = 10', () => {
        // Arrange
        let result = 0;
        // Act
        result = addition(-10,20);
        // Assert
        expect(result).toBe(10);
    })

})

//Addition resolve