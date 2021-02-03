$(document).ready(onReady);
console.log('in client.js');

function onReady() {
  console.log('ready');

  //grab data from server
  // get all the quotes
  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };
  $.ajax(ajaxOptions)
    //promise to call me back later
    .then(function (response) {
      console.log('response', response);
    });

  console.log('so much to do');

  //.then is new shit

  // ajax need an object
  // Asynchronous Javascript and XML = ajax
  //tool for making network requests
  // http network requests
  //FROM  client-side js code
  //ajax is function that comes w/ jq
  //take array of quotes
  // loop and append to DOM boi
}
