const express = require('express');
//console.log('express', express);

//creat our app, app is object with functions in it
const app = express();

//listen for network requests, takes in port(port is a number that can listen for)
//  app.listen(number, callback function ) ; can plug in param with variables

app.listen(5000, function () {
  console.log('I listen', 5000);
});
// use either 3 or 5 thousand
// if you see a EADDRINUSE error
//run:
// killall -9 node
// ...and try again
