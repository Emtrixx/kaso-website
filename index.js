const express = require("express");
const app = express();
const path = require("path");
const ExpressError = require('./utils/ExpressError');

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/impressum', (req,res) => {
    res.render('impressum');
})

app.all('*', (req,res,next) => {
    // res.status(404).render("notFound");
    next(new ExpressError('Not Found', 404));
})

app.use((err,req,res,next) => {
    const { message = 'Something went wrong', statusCode = 500, stack} = err;
    res.status(statusCode).render('error', {message, stack});
})

const port = 4000
app.listen(port, () => {
    console.log("Server gestartet " + port);
})