import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema({
  teacherPtrId: {   
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
  schoollevel_recordid: Number,
  schoollevel: String,
  schoolname: String,
  total_students: Number,
  total_teachers: Number,
  PTR: Number,
});  

export default mongoose.model("TeacherPtr", schema);
