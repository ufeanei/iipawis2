const express = require('express');
       var path = require('path');

       var app = express();
       app.set("view engine", "ejs");
     app.use(express.static('public'));

app.get("/", function(req, res){
	res.render("home", {title: "Welcome to IIPAWIS" })
});

app.get("/diploma", function(req, res){
	res.render("diploma", {title: "Diploma in Android and Web systems"}) 
});

app.get("/bscweb", function(req, res){
	res.render("bscweb", {title: "Bsc in Web and Mobile systems" })
});

app.get("/bscce", function(req, res){
	res.render("bscce", {title: "Bsc in Computer Engineering" })
});
app.get("/bscgmm", function(req, res){
	res.render("bscgmm", {title: "Bsc in Graphics and Multimedia" })
});
app.get("/bscmobile", function(req, res){
	res.render("bscmobile", {title: "Bsc in Mobile Computing"}) 
});

app.get("/bscsoftware", function(req, res){
	res.render("bscsoftware", {title: "Bsc in Software Engineering" })
});

app.get("/bsccsna", function(req, res){
	res.render("bsccsna", {title: "Bsc in Computer Systems and Network Administration"}) 

});

app.get("/hnd", function(req, res){
	res.render("hnd", {title: "HND Software Engineering and computing"}) 
});

app.get("/android", function(req, res){
	res.render("android", {title: "Android App certificate"}) 
});

app.get("/laravel", function(req, res){
	res.render("laravel", {title: "Laravel with PHP certificate" })
});

app.get("/rails", function(req, res){
	res.render("rail", {title: "Ruby on Rails certificate" })
});

app.get("/webdesign", function(req, res){
	res.render("webdesign", {title: "Mobile First Web Design certificate"})
});

app.get("/nodecourse", function(req, res){
	res.render("nodecourse", {title: "Web Development with Node certificate"}) 
});

app.listen(3000);

