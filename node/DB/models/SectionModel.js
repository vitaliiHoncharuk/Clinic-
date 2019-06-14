let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseValidator = require("mongoose-unique-validator");

let SectionSchema = new Schema({
    sectionName: {
        type: String,
        minlength: 4,
        maxlength: 45,
        required: true,
        unique: true
    },
    doctorId: [{
        type: Schema.ObjectId,
        ref:'Doctors',
    }],
});

SectionSchema.plugin(mongooseValidator);

module.exports = mongoose.model('ClinicSections', SectionSchema);


