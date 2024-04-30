const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config(); 

const app = express();


app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://virtualhelp62:Virtual123@cluster0.xgumyjg.mongodb.net/Blackcoffer?retryWrites=true&w=majority").then(()=>{

console.log("database connected")
}).catch(()=>{
  console.log("db not connected")
});

// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
