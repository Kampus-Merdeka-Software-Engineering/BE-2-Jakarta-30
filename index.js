require('dotenv').config()

const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./models");
// db.sequelize.sync({ force: false }).then(() => {
//     console.log('Drop and Resync Db');
// });

app.get("/", (req, res) => {
    res.json({ message: "Hello Cek" });
});

// main
app.get("/recapi", async (req, res) => {

    try {
        // Assume the server has an endpoint /data that you want to fetch
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=random&sortBy=relevancy&pageSize=10&apiKey=427339e8c6ed40aca20ea2daf2c8e10d', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Additional headers if needed
          },
        });
    
        if (!externalApiResponse.ok) {
          throw new Error('Failed to fetch data from external API');
        }
    
        const externalApiData = await externalApiResponse.json();
    
        // Process or send data to the client
        res.json({ success: true, data: externalApiData });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
}); 

//nature
app.get("/nature", async (req, res) => {

    try {
        // Assume the server has an endpoint /data that you want to fetch
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-11-11&sortBy=publishedAt&pageSize=10&apiKey=427339e8c6ed40aca20ea2daf2c8e10d', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Additional headers if needed
          },
        });
    
        if (!externalApiResponse.ok) {
          throw new Error('Failed to fetch data from external API');
        }
    
        const externalApiData = await externalApiResponse.json();
    
        // Process or send data to the client
        res.json({ success: true, data: externalApiData });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
});

//Photography
app.get("/photo", async (req, res) => {

    try {
        // Assume the server has an endpoint /data that you want to fetch
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=photography&sortBy=relevancy&pageSize=10&apiKey=7dc348e26d1d4126bf15285202bc4fcc', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Additional headers if needed
          },
        });
    
        if (!externalApiResponse.ok) {
          throw new Error('Failed to fetch data from external API');
        }
    
        const externalApiData = await externalApiResponse.json();
    
        // Process or send data to the client
        res.json({ success: true, data: externalApiData });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
});

//Tech
app.get("/tech", async (req, res) => {

    try {
        // Assume the server has an endpoint /data that you want to fetch
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=technology&sortBy=relevancy&pageSize=10&apiKey=7dc348e26d1d4126bf15285202bc4fcc', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Additional headers if needed
          },
        });
    
        if (!externalApiResponse.ok) {
          throw new Error('Failed to fetch data from external API');
        }
    
        const externalApiData = await externalApiResponse.json();
    
        // Process or send data to the client
        res.json({ success: true, data: externalApiData });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
});

require('./routes/auth.routes')(app);
require('./routes/post.routes')(app);

app.listen(8000, () => {
    console.log("Server is running on port 8000.");
});