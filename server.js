require('dotenv').config()

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
// db.sequelize.sync({ force: false }).then(() => {
//     console.log('Drop and Resync Db');
// });

app.get("/", (req, res) => {
    res.json({ message: "Hello Cek" });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/post.routes')(app);

app.listen(8000, () => {
    console.log("Server is running on port 8000.");
});