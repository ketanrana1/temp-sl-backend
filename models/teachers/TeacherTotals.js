import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema({
  teacherTotalsId: {   
    type: String,
    default: uuidv4
  },
  year_numeric: Number,
  school_recordid: Number,
  schoollevel_recordid: Number,
  schoollevel: String,
  school_owner: String,
  districtname: String,
  chiefdomname: String,
  sex: String,
  salary_source: String,
  qualification: String,
  total_teachers: Number,
});  

export default mongoose.model("TeacherTotals", schema);
