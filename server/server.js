const express = require('express');
//console.log('express', express);
const quotes = require('./modules/quotes'); //grabbing quotes from modules

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

//get all the quotes
//return array with all quotes in it

app.get('/allTheQuotes', function (req, res) {
  console.log('get all the quotes');
  //send back the entire list of quotes
  res.send(quotes.quoteList);
});

app.get('/quotes', function (req, res) {
  // quotes is a route or resource , address of what we're looking for
  // if user asks for quotes do the following
  console.log('get request for quotes');
  res.send(quotes.getNextQuote());
});
//user grab from server

//must end with send or end for res.
// body parser is middle ware, midware = takes input applies business logic, return stuff you can use
// takes url encoded and gives your product
//post grabs from client
app.post('/quotes', (req, res) => {
  // request, response
  let quote = req.body.quote_to_add;
  console.log(quote.author);
  console.log(quote.quote);
  quotes.addQuote(quote);
  res.sendStatus(200); // reply, says hey that worked ex. 404 page not found, 500 check server
  //status code is between () above
  // TODO: Add to quotesData.
}); // post = share with server  from user
// the body = the actual content being sent to server
/// post is the verb/ method
// url=path= '/quotes' in this situation
//endpoints/route = method and url/path
