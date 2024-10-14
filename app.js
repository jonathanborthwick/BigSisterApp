const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
//Has the guts of Big Sister App
const dailyMessages = require('./routes/dailyMessages');
//JSON middleware
app.use(express.json());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'clients/web')));

// Default route for root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'clients/web/index.html'));
});

/*
 old Default route for root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Big Sister App API! For now, you can visit /api/daily-messages to get a message.');
});
*/

// Use the dailyMessages route for requests to /api/daily-messages
app.use('/api/daily-messages', dailyMessages);

app.listen(port, () => {
    console.log(`Big Sister App is listening at http://localhost:${port}`);
});