let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseValidator = require("mongoose-unique-validator");

let DoctorSchema = new Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 45,
        required: true,
    },
    surname: {
        type: String,
        minlength: 4,
        maxlength: 45,
        required: true,
    },
    email: {
        type: String,
        minlength: 10,
        maxlength: 65,
        unique: true,
        required: true
    },
    description: {
        type: Schema.Types.String,
        minlength: 8,
        required: true
    },
    experience: {
        type: Schema.Types.Number,
        min: [1, 'Doctors with such experience are not allowed to work in this Clinic'],
        max: [35, 'Sorry, doctor can\'t have so much experience, or work at this age.'],
        required: true
    },
    floor: {
        type: Schema.Types.Number,
        min: 1,
        max: [5, 'There are only 5 floors in this clinic'],
        required: true
    },
    cabinet: {
        type: Schema.Types.Number,
        min: 1,
        max: [300, 'There are only 300 floors in this clinic'],
        required: true
    },
    workingDays: {
        type: [String],
        required: true
    },
    roles: {
        type : String
    }
});

DoctorSchema.plugin(mongooseValidator);

module.exports = mongoose.model('Doctors', DoctorSchema);


