import csvtojson from 'csvtojson'
import SchoolNeeds from "../../models/needs/SchoolNeeds.js"

const schoolNeedsFileName = "csvs/needs/school_needs.csv"


const needs = {

    async addSchoolNeedsData(req, res, next) {
        try {
            var allSchoolNeedsData = [];
            csvtojson().fromFile(schoolNeedsFileName).then(source => {
                for (var i = 0; i < source.length; i++) {
                    var oneRow = {
                        year_numeric: source[i]["year_numeric"],
                        school_recordid: source[i]["school_recordid"],
                        schoolname: source[i]["schoolname"],
                        schoollevel_recordid: source[i]["schoollevel_recordid"],
                        schoollevel: source[i]["schoollevel"],
                        districtname: source[i]["districtname"],
                        chiefdomname: source[i]["chiefdomname"],
                        grade: source[i]["grade"],
                        gradename: source[i]["gradename"],
                        total_male_enrolled: source[i]["total_male_enrolled"],
                        total_female_enrolled: source[i]["total_female_enrolled"],
                        total_enrolled: source[i]["total_enrolled"],
                        GPI: source[i]["GPI"],
                    };
                    allSchoolNeedsData.push(oneRow);
                }
                const insertSchoolNeedsData = SchoolNeeds.insertMany(allSchoolNeedsData, (err, result) => {
                    let response       
                    if(result){
                    response = {
                        success: true,
                        message: "School Needs data is added into the database successfully"
                    }
                    }
                    if(err){   
                        console.log(err);
                        response = {
                            success: false,
                            message: "School Needs data could not be added. Please try after some time."
                        }
                    }
                    res.send(response);  
                });
            });
          } catch (err) {
            console.log("ERRROR", err)
            next(err)
          }    
    },

}
export default needs