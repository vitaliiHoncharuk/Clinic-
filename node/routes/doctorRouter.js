const doctorRouter = require("express").Router();

const addNewDoctor = require("../controllers/doctor/addNewDoctor");
const getDoctorByName = require("../controllers/doctor/getDoctorByName");
const getAll = require("../controllers/doctor/getAll");
const getDoctorById = require("../controllers/doctor/getDoctorById");
doctorRouter.get('/', getDoctorByName);
doctorRouter.get('/all', getAll);
doctorRouter.get('/:id', getDoctorById);
doctorRouter.post('/', addNewDoctor);


module.exports = doctorRouter;
