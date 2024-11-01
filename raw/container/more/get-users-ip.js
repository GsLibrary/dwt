// This script sample will show you how to capture the users ip upon visiting

// This one works no matter what part of the server you access, you can put this in appConfig.js
app.use((req, res, next) => {
    req.UserIP = req.ip; // req.ip automatically provides the user's IP
    next();
});

// This will show the ip to the user when visiting /show-ip, you can put this in server.js
app.get('/show-ip', (req, res) => {
    res.send(`Your IP is: ${req.UserIP}`);
});