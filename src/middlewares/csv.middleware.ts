import { Request, Response, NextFunction } from "express";
import multer from "multer";

// Configure multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/**
 * Middleware to handle CSV file uploads and convert the content into a matrix.
 * "file" is the name of the file field in the request body (as specified in the assessment requirements).
 */
export const handleCsvUpload = upload.single("file");

/**
 * Middleware to parse CSV content from the uploaded file and convert it into a matrix.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const parseCsv = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    if (!req.file || !req.file.buffer) {
      throw new Error("No file or file content found");
    }

    const rawData = req.file.buffer.toString();
    const matrix: number[][] = [];

    const rows = rawData.split("\n");
    rows.forEach((row) => {
      const cols = row.split(",").map((col) => parseFloat(col));
      if (cols.length > 0 && cols.every((col) => !isNaN(col))) {
        matrix.push(cols);
      }
    });

    req.body.matrix = matrix;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid CSV file or content format" });
  }
};
