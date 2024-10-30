// Packages
const { express, session, path, bodyParser } = require('./packages');
const app = require('./appConfig'); 

// Variables
const { site, pages, static } = require('./config');
const port = process.env.PORT

// App
app.get('/', function(req, res) {
    res.send(`Change what this shows in server.js`);
});

app.get('/show-ip', (req, res) => {
    res.send(`Your IP is: ${req.UserIP}`);
});

// Console
app.listen(port, () => {
    console.log(`[Server] Server is now running at ${site}:${port}`);
});