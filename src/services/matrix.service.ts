import { isNumeric } from "../utils";

/**
 * Matrix service containing logic for matrix-related operations.
 */
export class MatrixService {
  /**
   * Checks if the provided matrix is valid (a 2D array with consistent row lengths).
   * @param {any} matrix - The matrix to be validated.
   * @returns {boolean} True if the matrix is valid, false otherwise.
   */
  static isValidMatrix(matrix: any): boolean {
    if (!Array.isArray(matrix) || matrix.length === 0) {
      return false;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 1; i < rows; i++) {
      if (!Array.isArray(matrix[i]) || matrix[i].length !== cols) {
        return false;
      }
    }

    return true;
  }

  /**
   * Inverts the provided matrix.
   * @param {number[][]} matrix - The matrix to be inverted.
   * @returns {number[][]} The inverted matrix.
   */
  static invert(matrix: number[][]): number[][] {
    return matrix[0].map((col, i) => matrix.map((row) => row[i]));
  }

  /**
   * Flattens the provided matrix into a 1-line string.
   * @param {number[][]} matrix - The matrix to be flattened.
   * @returns {string} The flattened matrix as a 1-line string.
   */
  static flatten(matrix: number[][]): string {
    return matrix.flat().join(",");
  }

  /**
   * Calculates the sum of all elements in the provided matrix.
   * @param {number[][]} matrix - The matrix for which to calculate the sum.
   * @returns {number} The sum of all elements in the matrix.
   */
  static sum(matrix: number[][]): number {
    return matrix.reduce(
      (acc: number, row: number[]) =>
        acc + row.reduce((rowSum, el) => rowSum + el, 0),
      0
    );
  }

  /**
   * Returns the product of all integers in the provided matrix.
   * @param {number[][]} matrix - The matrix for which to calculate the product.
   * @returns {number} The product of all integers in the matrix.
   */
  static multiply(matrix: number[][]): number {
    return matrix
      .flat()
      .reduce(
        (product, value) => (isNumeric(value) ? product * value : product),
        1
      );
  }

  /**
   * Converts the provided matrix to a string in CSV-like format.
   * @param {number[][]} matrix - The matrix to be converted.
   * @returns {string} The matrix as a string in CSV-like format.
   */
  static matrixToString(matrix: number[][]): string {
    return matrix.map((row) => row.join(",")).join("\n");
  }
}
