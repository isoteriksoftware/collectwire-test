/**
 * Checks if the provided matrix is valid (a 2D array with consistent row lengths).
 * @param {any} matrix - The matrix to be validated.
 * @returns {boolean} true if the matrix is valid, false otherwise.
 */
export const isValidMatrix = (matrix: any): boolean => {
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
};

/**
 * Checks if the provided value is a number.
 * @param {any} value - The value to be checked.
 * @returns {boolean} true if the value is a number, false otherwise.
 */
export const isNumeric = (value: any): boolean => {
  return typeof value === "number" && !isNaN(value);
};
