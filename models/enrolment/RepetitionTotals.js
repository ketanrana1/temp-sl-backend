import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema ({
  repetitionTotalsId: {   
    type: String,
    default: uuidv4
  },
  year_numeric: Number,
  school_recordid: Number,
  schoolname: String,
  schoollevel_recordid: Number,
  schoollevel: String,
  districtname: String,
  chiefdomname: String,
  grade: Number,
  gradename: String,
  sex: String,
  total_students: Number,
});  

export default mongoose.model("RepetitionTotals", schema);
