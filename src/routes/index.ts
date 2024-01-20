import { Router } from "express";
import { handleCsvUpload, parseCsv, validateMatrix } from "../middlewares";
import { MatrixController } from "../controllers";

const paths: string[] = ["/echo", "/invert", "/flatten", "/sum", "/multiply"];
const router: Router = Router();

// Configure middlewares
router.use(paths, handleCsvUpload, parseCsv, validateMatrix);

// Endpoint to echo the matrix
router.post("/echo", MatrixController.echo);

// Endpoint to invert the matrix
router.post("/invert", MatrixController.invert);

// Endpoint to flatten the matrix
router.post("/flatten", MatrixController.flatten);

// Endpoint to calculate the sum of all elements in the matrix
router.post("/sum", MatrixController.sum);

// Endpoint to multiply the matrix elements
router.post("/multiply", MatrixController.multiply);

export default router;
