import { Request, Response, NextFunction } from "express";
import { MatrixService } from "../services";

/**
 * Middleware to validate the format of the matrix.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export function validateMatrix(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const matrix = req.body.matrix;

  if (!MatrixService.isValidMatrix(matrix)) {
    return res.status(400).json({ error: "Invalid matrix format" });
  }

  next();
}
