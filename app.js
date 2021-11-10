require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const userRouter = require("./api/users/user.router");
const patientRouter = require("./api/patients/patient.router");
const logsRouter = require("./api/logs/logs.router");
const medicineRouter = require("./api/medicine/medicine.router");
const birthRouter = require("./api/birthrecords/birth.router");
const deathRouter = require("./api/deathrecords/death.router");
const labRouter = require("./api/lab/labtest.router");
const bloodbankRouter = require("./api/bloodbank/bloodbank.router");
const adminRouter = require("./api/admin/admin.router");
const dashboardsRouter = require("./api/dashboards/dashboard.router");
const patientsReportsRouter = require("./api/reports/reports.router");


app.use("/api/users", userRouter);
app.use("/api/patients", patientRouter);
app.use("/api/logs", logsRouter);
app.use("/api/medicine", medicineRouter);
app.use("/api/birth", birthRouter);
app.use("/api/death", deathRouter);
app.use("/api/lab", labRouter);
app.use("/api/bloodbank", bloodbankRouter);
app.use("/api/admin", adminRouter);
app.use("/api/dashboard", dashboardsRouter);
app.use("/api/reports", patientsReportsRouter);


app.listen(process.env.PORT, () => {
  console.log("server has started at port " + process.env.PORT);
});
