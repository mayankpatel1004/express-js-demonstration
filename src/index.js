const express = require('express');
const path = require('path');
const app = express();
const hbs = require("hbs");
const requests = require("requests");
const port = 9000;

//built in middleware
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// to set view engine
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// This is top to bottom flow. First below statement will execute thats why below to below not executed...
app.get("", (req, res) => {
    res.render("index",{
        channelName : 'Cloudswift'
    });
});

app.get("/", (req, res) => {
    res.send("Hello From Express 222....");
});

app.get("/about", (req, res) => {
    console.log("===>",req.query.id);
    //alert(req.query.id);
    requests(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`)
    .on("data",(chunk) => {
        const objdata = JSON.parse(chunk);
        //console.log("Object Data ===>",objdata);
        const arrData = [objdata];
        const bodyData = arrData[0].body;
        res.render("about",{
            channelName : 'Cloudswift',
            body : bodyData
        });
    });
});

app.get("/about/*", (req, res) => {
    res.render("404",{
        errorComment: "404 about page not found.............."
    });
});

app.get("*", (req, res) => {
    res.render("404",{
        errorComment: "404 page not found.............."
    });
});

app.listen(port, () => {
    console.log(`Listening port ......${port}`);
});