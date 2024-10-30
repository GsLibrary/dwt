// Packages
const { express, session, path, bodyParser, dotenv } = require('./packages');
const app = express();

// Variables
const { site, pages, static } = require('./config');

// App Configuration
app.set('view engine', 'ejs'); // Use .ejs files for the website
app.set('views', path.join(__dirname, `/${pages}`)); // Use folder as a root path for .ejs files

app.use(express.static(path.join(__dirname, `${static}`))); // Use folder as a root path for static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SECRET_SESSION, // Set this in .env
  resave: false,
  saveUninitialized: true
}));

// Showcasing, I Recommend Removing This When Building Your Own Server
app.use((req, res, next) => {
    req.UserIP = req.ip; // req.ip automatically provides the user's IP
    next();
});
  

module.exports = app; // Export the configured app