// Packages
const { express, session, path, bodyParser, randomstring } = require('./packages');
const app = require('./appConfig'); 

// Variables
const { site, pages, static } = require('./config');
const port = process.env.PORT

// App
app.get('/', function(req, res) {
    res.send(`Change what this shows in server.js`);
});

app.get('/example', function(req, res) {
    res.render(`example`); // Example usage
});

app.get('/rng', function(req, res) {
    const rngvalue = {
        rng: randomstring.generate()
    }
    res.render(`example`, rngvalue); // Example usage
});

// Console
app.listen(port, () => {
    console.log(`[Server] Server is now running at ${site}:${port}`);
});