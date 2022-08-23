import express from 'express';
const router = express.Router();
import needs from '../../controllers/needs/needs.js'

router.post("/add-school-needs-data", needs.addSchoolNeedsData);

export default router