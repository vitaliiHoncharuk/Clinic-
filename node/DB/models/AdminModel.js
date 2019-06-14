let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseValidator = require("mongoose-unique-validator");



let AdminSchema = new Schema({
    login: {
        type: String,
        minlength: 4,
        maxlength: 45,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.Mixed,
        minlength: 8,
        maxlength: 65,
        required: true
    },
    roles: {
        type : String
    }
});

AdminSchema.plugin(mongooseValidator);

module.exports = mongoose.model('Admins', AdminSchema);


