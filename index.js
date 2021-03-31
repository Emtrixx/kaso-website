const express = require("express");
const app = express();
const path = require("path");
const ExpressError = require('./utils/ExpressError');

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
})


app.all('*', (req,res,next) => {
    // res.status(404).render("notFound");
    next(new ExpressError('Not Found', 404));
})

app.use((err,req,res,next) => {
    const { message = 'Something went wrong', statusCode = 500, stack} = err;
    res.status(statusCode).render('error', {message, stack});
})

app.listen("4000", () => {
    console.log("Server gestartet");
})