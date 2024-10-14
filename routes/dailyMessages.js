const express = require('express');
const router = express.Router();
// Array of daily greetings and affirmations. Will get AI to generate these or have them loook up from whatever list of affirmations are specifioed in the app. For now, hard coding these
const dailyMessages = [
    {
        greeting: "Good morning! Today is full of possibilities.",
        affirmation: "You are capable of achieving great things today."
    },
    {
        greeting: "Hello there! Wishing you a wonderful day ahead.",
        affirmation: "You have the power to make today amazing."
    },
    {
        greeting: "Hi! Remember, every day is a new beginning.",
        affirmation: "Believe in yourself, and great things will happen."
    }
];

//Make them randomly available
router.get('/', (req, res) => {
    const message = dailyMessages[Math.floor(Math.random() * dailyMessages.length)];
    res.json(message);//this is what the web client gets to see
});

//make this accessible in app.js
module.exports = router;