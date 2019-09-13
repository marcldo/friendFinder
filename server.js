const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
require(path.join(__dirname, './app/routing/apiRoutes'))(app);


app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});

