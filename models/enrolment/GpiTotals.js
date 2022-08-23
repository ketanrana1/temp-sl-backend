import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema ({
  gpiTotalsId: {   
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
  gradename:String,
  total_male_enrolled: Number,
  total_female_enrolled: Number,
  total_enrolled: Number,
  GPI: Number,
});  

export default mongoose.model("GpiTotals", schema);
