let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseValidator = require("mongoose-unique-validator");

let StarsSchema = new Schema({
    stars: {
        type: Schema.Types.Number,
        min: [1, 'The minimal rating for doctor can not be less than 1!'],
        max: [5, '5 stars are maximal mark!'],
        required: true
    },
    doctorId:{
        type: Schema.ObjectId,
        ref: 'Doctors',
        required: true
    },
    userId:{
        type: Schema.ObjectId,
        ref:'Users',
        required: true
    }

});

StarsSchema.plugin(mongooseValidator);

module.exports = mongoose.model('Stars', StarsSchema);
