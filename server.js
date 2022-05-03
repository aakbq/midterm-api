const express = require("express");
const bodyParser=require("body-parser")
const ejs=require("ejs")
const https = require("https");
const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.use(express.static('public'))

app.use("/user", require("./routes/User"))
app.use("/", require("./routes/index.js"))
app.use("/about", require("./routes/about.js"))
app.use("/products", require("./routes/products.js"))
app.use("/login", require("./routes/login.js"))
app.use("/signup", require("./routes/signup.js"))
app.use("/profile", require("./routes/profile.js"))


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);