import { Request, Response } from "express";
import { MatrixService } from "../services";

/**
 * Matrix controller containing logic for various matrix operations.
 */
export class MatrixController {
  /**
   * Echo the provided matrix.
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   */
  static echo(req: Request, res: Response): void {
    const matrix = req.body.matrix;
    res.json({ matrix });
  }

  /**
   * Invert the provided matrix.
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   */
  static invert(req: Request, res: Response): void {
    const matrix = req.body.matrix;
    const invertedMatrix = MatrixService.invert(matrix);
    res.json({ invertedMatrix });
  }

  /**
   * Flatten the provided matrix into a 1-line string.
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   */
  static flatten(req: Request, res: Response): void {
    const matrix = req.body.matrix;
    const flattenedMatrix = MatrixService.flatten(matrix);
    res.json({ flattenedMatrix });
  }

  /**
   * Calculate the sum of all elements in the provided matrix.
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   */
  static sum(req: Request, res: Response): void {
    const matrix = req.body.matrix;
    const sum = MatrixService.sum(matrix);
    res.json({ sum });
  }

  /**
   * Returns the product of all integers in the provided matrix.
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   */
  static multiply(req: Request, res: Response): void {
    const matrix = req.body.matrix;
    const product = MatrixService.multiply(matrix);
    res.json({ product });
  }
}
