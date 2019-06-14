let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseValidator = require("mongoose-unique-validator");



let UserSchema = new Schema({
    login: {
        type: String,
        minlength: 4,
        maxlength: 45,
        required: true,
        unique: true
    },
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
        unique:true,
        required: true
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

UserSchema.plugin(mongooseValidator);

module.exports = mongoose.model('Users', UserSchema);


