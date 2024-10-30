// Packages
const { express, session, path, dotenv } = require('./packages');
const app = express();

// Variables
const port = process.env.PORT

// App
app.listen(port, () => {
    console.log(`[Server] Server is now running at http://localhost:${port}`);
});