import express from 'express';
const router = express.Router();
import enrolment from '../../controllers/enrolment/enrolment.js'

router.post("/add-enrolment-totals-data", enrolment.addEnrolmentTotalsData);
router.post("/add-school-disability-totals-data", enrolment.addSchoolDisabilityTotalsData);
router.post("/add-repetition-totals-data", enrolment.addRepetitionTotalsData);
router.post("/add-gpi-totals-data", enrolment.addGpiTotalsData);

export default router 