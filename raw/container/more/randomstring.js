// This script sample will show you how to use randomstring to generate a random hex code and show it in randomhex.ejs

// put this in server.js
app.get('/rng', function(req, res) {
    const rngvalue = {
        rng: randomstring.generate({
            length: 6,
            charset: ['hex']
          })
    }
    res.render(`randomhex`, rngvalue); // Example usage of randomstring
});

// put this in randomhex.ejs
<h1><%= rng %></h1> // This will use the value of the variable rng which is found in const rngvalue 