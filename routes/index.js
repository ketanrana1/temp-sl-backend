import enrolment from "./enrolment/index.js"
import needs from "./needs/index.js"
import teachers from "./teachers/index.js"

export const route = (app) => { 
  app.use("/api", enrolment),
  app.use("/api", needs),
  app.use("/api", teachers);
};
