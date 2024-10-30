// Packages
const { express, session, path, dotenv } = require('./packages');
const app = require('./appConfig'); 

// Variables
const { site, pages, static } = require('./config');
const port = process.env.PORT

// Console
app.listen(port, () => {
    console.log(`[Server] Server is now running at ${site}:${port}`);
});