import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema({
  teacherSpecialistsId: {
    type: String,
    default: uuidv4
  },
  school_recordid: Number,
  schoolid: Number,
  emiscode: String,
  emiscode_alternative: String,
  schoolname: String,
  censusyear_recordid: Number,
  year_numeric: Number,
  districtname: String,
  chiefdomname: String,
  schoollevel: String,
  total_students: Number,
  specialists_needed: Number,
  total_languages_specialists: Number,
  total_languages_specialists_needed: Number,
  total_maths_specialists: Number,
  total_maths_specialists_needed: Number,
  total_sciences_specialists: Number,
  total_sciences_specialists_needed: Number,
  total_socsciences_specialists: Number,
  total_socsciences_specialists_needed: Number,
  total_arts_specialists: Number,
  total_arts_specialists_needed: Number,
  total_other_specialists: Number,
  total_other_specialists_needed: Number,
});  

export default mongoose.model("TeacherSpecialists", schema);
