import { Router } from "express";
import { handleCsvUpload, parseCsv } from "../middlewares";

const paths: string[] = ["/echo", "/invert", "/flatten", "/sum", "/multiply"];
const router: Router = Router();

router.use(paths, handleCsvUpload, parseCsv);

export default router;
