import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema({
  schoolDisabilityTotalsId: {   
    type: String,
    default: uuidv4
  },
  school_recordid: Number,
  year_numeric: Number,
  disability: String,
  total_male_disability: Number,
  total_female_disability: Number,
  total_disability: Number,
});  

export default mongoose.model("SchoolDisabilityTotals", schema);
