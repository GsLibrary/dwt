// Packages
const { express, session, path, dotenv } = require('./packages');
const app = express();

// Variables
const { site, pages, static } = require('./config');

// App Configuration
app.set('view engine', 'ejs'); // Use .ejs files for the website
app.set('views', path.join(__dirname, `/${pages}`)); // Use folder as a root path for .ejs files

app.use(express.static(path.join(__dirname, `${static}`))); // Use folder as a root path for static files

module.exports = app; // Export the configured app