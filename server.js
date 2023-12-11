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

app.get("/recapi", async (req, res) => {

    try {
        // Assume the server has an endpoint /data that you want to fetch
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=scenery&sortBy=relevancy&pageSize=15&apiKey=d3d925f2f29d43149491530eab2d51b4', {
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

app.get("/recapi", async (req, res) => {

    try {
        // Assume the server has an endpoint /data that you want to fetch
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=scenery&sortBy=relevancy&pageSize=15&apiKey=d3d925f2f29d43149491530eab2d51b4', {
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

// main
app.get("/recapi", async (req, res) => {

    try {
        // Assume the server has an endpoint /data that you want to fetch
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=random&sortBy=relevancy&pageSize=15&apiKey=d3d925f2f29d43149491530eab2d51b4', {
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
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=scenery&sortBy=relevancy&pageSize=15&apiKey=d3d925f2f29d43149491530eab2d51b4', {
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
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=photography&sortBy=relevancy&pageSize=15&apiKey=d3d925f2f29d43149491530eab2d51b4', {
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
        const externalApiResponse = await fetch('https://newsapi.org/v2/everything?q=technology&sortBy=relevancy&pageSize=15&apiKey=d3d925f2f29d43149491530eab2d51b4', {
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

require('./app/routes/auth.routes')(app);
require('./app/routes/post.routes')(app);

app.listen(8000, () => {
    console.log("Server is running on port 8000.");
});