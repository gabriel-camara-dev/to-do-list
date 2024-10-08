const express = require("express");
const cors = require("cors");

const { router } = require("./src/routes/index.js");

const app = express();

const port = 3000;

app.use(cors({
     origin: 'http://localhost:5173',
     methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
     allowedHeaders: ['Content-Type'] 
 }))

app.use(express.json());

app.use(router);

app.listen(port, () => {
     console.log('Server is running! ======================================')
})