const express = require("express");

const PORT = process.env.port || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./client/routing/apis.js")(app);
require("./client/routing/htmls.js")(app);

app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
})