const express = require('express');
const app = express();
require('dotenv').config();

//getting routes
const contactRoute = require('./routes/contactRoute');
//adding middleware
app.use(express.json());
app.use('/api/v1', contactRoute);
const port = 5000 || process.env.PORT;
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log('Error in starting the port :', error);
  }
};
start();
