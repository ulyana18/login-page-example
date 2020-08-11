var express = require('express');
var testAPIRouter = require('./routes/testApiRouter');
var indexRouter = require('./routes/indexRouter')
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");

var app = express();

app.set("views", path.join(__dirname, "views"));

app.use(cors());

app.use("/", indexRouter);
app.use("/testAPI", testAPIRouter);

// var server = app.listen(3000, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })

app.listen(3000, async () => {
  console.log('Server ready!')
  
  console.log('Listening on port 3000')
});

module.exports = app;