import csvtojson from 'csvtojson'
import EnrolmentTotals from "../../models/enrolment/EnrolmentTotals.js"
import SchoolDisabilityTotals from "../../models/enrolment/SchoolDisabilityTotals.js"
import RepetitionTotals from "../../models/enrolment/RepetitionTotals.js"
import GpiTotals from "../../models/enrolment/GpiTotals.js"

const enrolmentTotalsFileName = "csvs/enrolment/enrollment_totals.csv"
const schoolDisabilityTotalsFileName = "csvs/enrolment/school_disability_totals.csv"
const repetitiionTotalsFileName = "csvs/enrolment/repetition_totals.csv"
const gpiTotalsFileName = "csvs/enrolment/gpi_totals.csv"

const enrolment = {

    async addEnrolmentTotalsData(req, res, next) {
        try {
            var allEnrolmentTotalsData = [];
            csvtojson().fromFile(enrolmentTotalsFileName).then(source => { 
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
                        sex: source[i]["sex"],
                        total_students: source[i]["total_students"]
                    };
                    allEnrolmentTotalsData.push(oneRow);
                }
                const insertEnrolmentData = EnrolmentTotals.insertMany(allEnrolmentTotalsData, (err, result) => {
                    let response       
                    if(result){
                        response = {
                            success: true,
                            message: "Enrolment data is added into the database successfully"
                        }
                    }
                    if(err){   
                        console.log(err);
                        response = {
                            success: false,
                            message: "Enrollment data could not be added. Please try after some time."
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
    async addSchoolDisabilityTotalsData(req, res, next) {
        try {
            var allSchoolDisabilityTotalsData = [];
            csvtojson().fromFile(schoolDisabilityTotalsFileName).then(source => {
                for (var i = 0; i < source.length; i++) {
                    var oneRow = {
                        school_recordid: source[i]["school_recordid"],
                        year_numeric: source[i]["year_numeric"],
                        disability: source[i]["disability"],
                        total_male_disability: source[i]["total_male_disability"],
                        total_female_disability: source[i]["total_female_disability"],
                        total_disability: source[i]["total_disability"],
                    };
                    allSchoolDisabilityTotalsData.push(oneRow);
                }
                const insertDisabilityTotalsData = SchoolDisabilityTotals.insertMany(allSchoolDisabilityTotalsData, (err, result) => {
                    let response       
                    if(result){
                    response = {
                        success: true,
                        message: "School disability data is added into the database successfully"
                    }
                    }
                    if(err){   
                        console.log(err);
                        response = {
                            success: false,
                            message: "School disability could not be added. Please try after some time."
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
    async addRepetitionTotalsData(req, res, next) {
        try {
            var allRepetitionTotalsData = [];
            csvtojson().fromFile(repetitiionTotalsFileName).then(source => { 
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
                        sex: source[i]["sex"],
                        total_students: source[i]["total_students"],

                    };
                    allRepetitionTotalsData.push(oneRow);
                }
                const insertEnrolmentData = RepetitionTotals.insertMany(allRepetitionTotalsData, (err, result) => {
                    let response       
                    if(result){
                    response = {
                        success: true,
                        message: "Repetition data is added into the database successfully"
                    }
                    }
                    if(err){   
                        console.log(err);
                        response = {
                            success: false,
                            message: "Repetition data could not be added. Please try after some time."
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
    async addGpiTotalsData(req, res, next) {
        try {
            var allGpiTotalsData = [];
            csvtojson().fromFile(gpiTotalsFileName).then(source => {
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
                    allGpiTotalsData.push(oneRow);
                }
                const insertGpiData = GpiTotals.insertMany(allGpiTotalsData, (err, result) => {
                    let response       
                    if(result){
                    response = {
                        success: true,
                        message: "Gpi data is added into the database successfully"
                    }
                    }
                    if(err){   
                        console.log(err);
                        response = {
                            success: false,
                            message: "Gpi data could not be added. Please try after some time."
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


export default enrolment