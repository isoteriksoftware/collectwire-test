import { MatrixService } from "../../src/services";

describe("MatrixService", () => {
  describe("isValidMatrix", () => {
    test("should return true for a valid matrix", () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      expect(MatrixService.isValidMatrix(matrix)).toBe(true);
    });

    test("should return false for an invalid matrix with inconsistent row lengths", () => {
      const matrix = [
        [1, 2, 3],
        [4, 5],
      ];
      expect(MatrixService.isValidMatrix(matrix)).toBe(false);
    });

    test("should return false for a non-array matrix", () => {
      const matrix = "not an array";
      expect(MatrixService.isValidMatrix(matrix)).toBe(false);
    });

    test("should return false for an empty matrix", () => {
      const matrix: number[][] = [];
      expect(MatrixService.isValidMatrix(matrix)).toBe(false);
    });
  });

  describe("invert", () => {
    test("should invert the matrix", () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      const invertedMatrix = MatrixService.invert(matrix);
      const expectedMatrix = [
        [1, 4],
        [2, 5],
        [3, 6],
      ];
      expect(invertedMatrix).toEqual(expectedMatrix);
    });
  });

  describe("flatten", () => {
    test("should flatten the matrix into a 1-line string", () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      const flattenedString = MatrixService.flatten(matrix);
      const expectedString = "1,2,3,4,5,6";
      expect(flattenedString).toEqual(expectedString);
    });
  });

  describe("sum", () => {
    test("should calculate the sum of all elements in the matrix", () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      const sum = MatrixService.sum(matrix);
      const expectedSum = 21;
      expect(sum).toEqual(expectedSum);
    });
  });

  describe("multiply", () => {
    test("should calculate the product of all integers in the matrix", () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      const product = MatrixService.multiply(matrix);
      const expectedProduct = 720;
      expect(product).toEqual(expectedProduct);
    });

    test("should handle non-numeric values and skip them", () => {
      const matrix = [
        [1, "not a number", 3],
        [4, 5, 6],
      ];
      const product = MatrixService.multiply(matrix as number[][]);
      const expectedProduct = 360;
      expect(product).toEqual(expectedProduct);
    });
  });

  describe("matrixToString", () => {
    test("should convert matrix to CSV-like string", () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      const expectedString = "1,2,3\n4,5,6";
      const result = MatrixService.matrixToString(matrix);
      expect(result).toEqual(expectedString);
    });
  });
});
