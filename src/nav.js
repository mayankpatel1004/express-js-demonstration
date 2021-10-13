const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.write("Welcome to my home page2....");
    res.write("Welcome to my home page....");
    res.send();

});

app.get("/about", (req, res) => {
    res.status(200).send("Welcome to my about page....");
});

app.get("/contact", (req, res) => {
    res.status(200).send("Welcome to my contact page....");
});

app.get("/temp", (req, res) => {
    res.status(200).send({
        id: 1,
        name: "Mayank"
    });
});

app.get("/temp2", (req, res) => {
    res.status(200).send([
        {
            id: 1,
            name: "Mayank"
        },
        {
            id: 2,
            name: "Patel"
        },
    ]);
});

app.get("/temp3", (req, res) => {
    res.status(200).json([
        {
            id: 1,
            name: "Mayank JSON"
        },
        {
            id: 2,
            name: "Patel JSON"
        },
    ]);
});

// The method are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined , which is not valid json.

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});