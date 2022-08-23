import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema({
  schoolNeedsId: {   
    type: String,
    default: uuidv4
  },
  school_recordid: Number,
  schoolid: Number,
  emiscode: Number,
  emiscode_alternative: String,
  schoolname: String,
  censusyear_recordid: Number,
  year_numeric: Number,
  districtname: String,
  chiefdomname: String,
  schoollevel_recordid: Number,
  schoollevel: String,
  schoolowner_recordid: Number,
  schoolowner: String,
  latitude: Number,
  longitude: Number,
  total_students: Number,
  total_classrooms: Number,
  total_classrooms_needrepair: Number,
  PCR: Number,
  total_latrines: Number,
});  

export default mongoose.model("SchoolNeeds", schema);
