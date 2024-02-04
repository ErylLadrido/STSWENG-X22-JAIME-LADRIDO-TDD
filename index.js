const express = require('express');
const mongoose = require('./models/connection');

// Routes imports
const postsRouter = require('./routes/postRoutes');

// Creates the express application
const app = express();
const port = 9090;

// Listening to the port provided
app.listen(port, () => {
    console.log('App listening at port ' + port)
});

app.use(express.json());

app.use('/posts', postsRouter); // Posts routes
