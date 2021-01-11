var fs = require("fs")
var express = require("express")
var multer = require("multer")
var compression = require('compression');
const app = express()
const port= 8080
app.use(compression());
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"video")
    },


    filename: function (req,file,cb){
        cb(null,file.fieldname);
    }
})


const upload = multer({storage:storage});

app.post("/upload", upload.single("data"), (req,res) =>{
    if(req.file){
        console.log("success")
    }else{
        console.log("failure")
    }
})



app.listen(port, () =>console.log("Listening"))