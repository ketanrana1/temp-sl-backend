import express from 'express';
const router = express.Router();
import teachers from '../../controllers/teachers/teachers.js'

router.post("/add-teacher-totals-data", teachers.addTeacherTotalsData);
router.post("/add-teacher-specialists-data", teachers.addTeacherSpecialistsData);
router.post("/add-teacher-ptr-data", teachers.addTeacherPtrData);




export default router