const express = require("express");
const mongoose = require('mongoose');
const ApiRouter = require("./routes/Api");
const cors = require('cors');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

let app = express();
app.use(cors());

const mongoPath = 'mongodb://localhost:27017/Honcharuk_2000';

mongoose.connect(mongoPath,{useNewUrlParser:true});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', ApiRouter);

app.listen(3000, ()=>{
    console.log("Listening...");
});



// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
//     res.header("Access-Control-Allow-Headers", "*");
//     next();
// });
