//https://intense-mesa-98816.herokuapp.com

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// Load the full build.
var lodash = require('lodash');
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Update the destination directory
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Include the original file extension
  }
});

var upload = multer({ storage: storage });



mongoose.connect('mongodb+srv://0412233739St:0412233739St@cluster0.stkwziv.mongodb.net/blogDB?retryWrites=true&w=majority')
  .then(()=>{
    console.log("Mongodb has connected!")
  })
  .catch((err)=>{
    console.log(err);
  });
  


//Create listSchema
const listSchema = new mongoose.Schema({
  title : String,
  context : String,
  image : {
    data: Buffer,
    contentType: String
  }
});   

const List = mongoose.model("List",listSchema);

//Home route
app.get("/",function(req,res){

  const data = List.find()
    .then((data)=>{
        res.render("home",{contentArray : data});
    });
});


app.get("/about",function(req,res){
  res.render("about",{aboutContent : aboutContent});
});


app.get("/contact",function(req,res){
  res.render("contact",{contactContent : contactContent});
});



app.get("/compose",function(req,res){
  res.render("compose");
});


//Express routing parameters
app.get("/posts/:subject",function(req,res){

  let userInput = req.params.subject;
  console.log(userInput);


  const selectedPostList = List.find({title : userInput})
    .then((selectedPostList)=>{
      selectedPostList.forEach(function(item){
        if(item.title === userInput){
          console.log("Match Found !");
          res.render("post",{post : item});
        }
        else{
          console.log("Match Not Found !");
          res.redirect("/");
        }
      });
    })
    .catch((err)=>{
        console.log(err);
    });
});


app.post("/compose", upload.single('image'), function(req, res) {
  const item = new List({
    title: req.body.title,
    context: req.body.data
  });

  if (req.file) {
    item.image.data = fs.readFileSync(req.file.path);
    item.image.contentType = req.file.mimetype;
  }

  item.save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});

