const express = require('express');
//console.log('express', express);

//creat our app, app is object with functions in it
const app = express();

//listen for network requests, takes in port(port is a number that can listen for)
//  app.listen(number, callback function ) ; can plug in param with variables

//INCANTATION:
//Share anyfiles inside public folder
// command comma shows settings in vs code
// public is client side
app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//set up incantation

app.listen(5000, function () {
  console.log('I listen', 5000);
});
// use either 3 or 5 thousand
// if you see a EADDRINUSE error
//run:
// killall -9 node
// ...and try again
//modules help keep things seperated and organized
