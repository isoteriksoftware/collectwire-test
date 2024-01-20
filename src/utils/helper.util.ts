/**
 * Checks if the provided value is a number.
 * @param {any} value - The value to be checked.
 * @returns {boolean} true if the value is a number, false otherwise.
 */
export const isNumeric = (value: any): boolean => {
  return typeof value === "number" && !isNaN(value);
};
