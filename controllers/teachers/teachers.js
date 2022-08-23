import csvtojson from 'csvtojson'
import TeacherTotals from "../../models/teachers/TeacherTotals.js"
import TeacherSpecialists from "../../models/teachers/TeacherSpecialists.js"
import TeacherPtr from "../../models/teachers/TeacherPtr.js"

const teacherTotalsFileName = "csvs/teachers/teacher_totals.csv"
const teacherSpecialistsFileName = "csvs/teachers/teacher_specialists.csv"
const teacherPtrFileName = "csvs/teachers/teacher_ptr.csv"

const teachers = {

    async addTeacherTotalsData(req, res, next) {
        try {
            var allTeacherTotalsData = [];
            csvtojson().fromFile(teacherTotalsFileName).then(source => {
                for (var i = 0; i < source.length; i++) {
                    var oneRow = {
                        year_numeric: source[i]["year_numeric"],
                        school_recordid: source[i]["school_recordid"],
                        schoollevel_recordid: source[i]["schoolname"],
                        schoollevel: source[i]["schoollevel_recordid"],
                        school_owner: source[i]["schoollevel"],
                        districtname: source[i]["districtname"],
                        chiefdomname: source[i]["chiefdomname"],
                        sex: source[i]["grade"],
                        salary_source: source[i]["gradename"],
                        qualification: source[i]["total_male_enrolled"],
                        total_teachers: source[i]["total_female_enrolled"],
                    };
                    allTeacherTotalsData.push(oneRow);
                }
                const insertTeacherPtrData = TeacherTotals.insertMany(allTeacherTotalsData, (err, result) => {
                    let response       
                    if(result){
                    response = {
                        success: true,
                        message: "Teacher totals data is added into the database successfully"
                    }
                    }
                    if(err){   
                        console.log(err);
                        response = {
                            success: false,
                            message: "Teacher totals data could not be added. Please try after some time."
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

    async addTeacherSpecialistsData(req, res, next) {
        try {
            var allTeacherSpecialistsData = [];
            csvtojson().fromFile(teacherSpecialistsFileName).then(source => {
                for (var i = 0; i < source.length; i++) {
                    var oneRow = {
                        school_recordid: source[i]["school_recordid"],
                        schoolid: source[i]["schoolid"],
                        emiscode: source[i]["emiscode"],
                        emiscode_alternative: source[i]["emiscode_alternative"],
                        schoolname: source[i]["schoolname"],
                        censusyear_recordid: source[i]["censusyear_recordid"],
                        year_numeric: source[i]["year_numeric"],
                        districtname: source[i]["districtname"],
                        chiefdomname: source[i]["chiefdomname"],
                        schoollevel: source[i]["schoollevel"],
                        total_students: source[i]["total_students"],
                        specialists_needed: source[i]["specialists_needed"],
                        total_languages_specialists: source[i]["total_languages_specialists"],
                        total_languages_specialists_needed: source[i]["total_languages_specialists_needed"],
                        total_maths_specialists: source[i]["total_maths_specialists"],
                        total_maths_specialists_needed: source[i]["total_maths_specialists_needed"],
                        total_sciences_specialists: source[i]["total_sciences_specialists"],
                        total_sciences_specialists_needed: source[i]["total_sciences_specialists_needed"],
                        total_socsciences_specialists: source[i]["total_socsciences_specialists"],
                        total_socsciences_specialists_needed: source[i]["total_socsciences_specialists_needed"],
                        total_arts_specialists: source[i]["total_arts_specialists"],
                        total_arts_specialists_needed: source[i]["total_arts_specialists_needed"],
                        total_other_specialists: source[i]["total_other_specialists"],
                        total_other_specialists_needed: source[i]["total_other_specialists_needed"],
                    };
                    allTeacherSpecialistsData.push(oneRow);
                }
                const insertTeacherSpecialistsData = TeacherSpecialists.insertMany(allTeacherSpecialistsData, (err, result) => {
                    let response       
                    if(result){
                    response = {
                        success: true,
                        message: "Teacher specialists data is added into the database successfully"
                    }
                    }
                    if(err){   
                        console.log(err);
                        response = {
                            success: false,
                            message: "Teacher specialists data could not be added. Please try after some time."
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

    async addTeacherPtrData(req, res, next) {
        try {
            var allTeacherPtrData = [];
            csvtojson().fromFile(teacherPtrFileName).then(source => {
                for (var i = 0; i < source.length; i++) {
                    var oneRow = {
                        school_recordid: source[i]["school_recordid"],
                        schoolid: source[i]["schoolid"],
                        emiscode: source[i]["emiscode"],
                        emiscode_alternative: source[i]["emiscode_alternative"],
                        schoolname: source[i]["schoolname"],
                        censusyear_recordid: source[i]["censusyear_recordid"],
                        year_numeric: source[i]["year_numeric"],
                        districtname: source[i]["districtname"],
                        chiefdomname: source[i]["chiefdomname"],
                        schoollevel_recordid: source[i]["schoollevel_recordid"],
                        schoollevel: source[i]["schoollevel"],
                        schoolname: source[i][" schoolname"],
                        total_students: source[i]["total_students"],
                        total_teachers: source[i]["total_teachers"],
                        PTR: source[i]["PTR"],
                    };
                    allTeacherPtrData.push(oneRow);
                }
                const insertTeacherSpecialistsData = TeacherPtr.insertMany(allTeacherPtrData, (err, result) => {
                    let response       
                    if(result){
                    response = {
                        success: true,
                        message: "Teacher PTR data is added into the database successfully"
                    }
                    }
                    if(err){   
                        console.log(err);
                        response = {
                            success: false,
                            message: "Teacher PTR data could not be added. Please try after some time."
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
export default teachers