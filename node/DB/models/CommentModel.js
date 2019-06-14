let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseValidator = require("mongoose-unique-validator");

let CommentSchema = new Schema({
    comment : {
        type: Schema.Types.String,
        minlength:[10,"Your comment should have at least 10 symbols"],
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
    },
    date:{
        createdAt: {type: Date, default: Date.now}
    }
});


CommentSchema.plugin(mongooseValidator);
module.exports = mongoose.model('Comments', CommentSchema);
