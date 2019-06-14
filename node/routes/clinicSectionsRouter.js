const clinicSectionsRouter = require("express").Router();

const addNewDoctorToSection = require("../controllers/clinicSections/addDoctorToSection");
const addNewSection = require("../controllers/clinicSections/addNewSection");
const getDoctorsInSection = require("../controllers/clinicSections/getDoctorsInSection");

clinicSectionsRouter.put('/', addNewDoctorToSection);
clinicSectionsRouter.post('/', addNewSection);
clinicSectionsRouter.get('/:sectionName' ,getDoctorsInSection);

module.exports = clinicSectionsRouter;

