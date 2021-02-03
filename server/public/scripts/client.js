//const { quoteList } = require('../../modules/quotes');

$(document).ready(onReady);
console.log('in client.js');

function onReady() {
  console.log('ready');
  fetchQuotes();

  $(document).on('submit', '#newQuoteForm', onSubmit);

  //grab data from server
  // get all the quotes
}

console.log('so much to do');
function onSubmit(evt) {
  evt.preventDefault();

  console.log('it is true');

  let newQuote = {
    quote: $('#quoteInput').val(),
    author: $('#authorInput').val(), //assignment
  };
  console.log(newQuote, 'quote');
  $.ajax({
    data: console.log('eheck yes'),
  });
}

//.then is new shit

// ajax need an object
// Asynchronous Javascript and XML = ajax
//tool for making network requests
// http network requests
//FROM  client-side js code
//ajax is function that comes w/ jq
//take array of quotes
// loop and append to DOM boi

function fetchQuotes() {
  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };

  $.ajax(ajaxOptions)
    //promise to call me back later
    .then(function (quoteList) {
      console.log('response', quoteList);

      for (let quote of quoteList) {
        console.log(quote);
        $('#quoteList').append(`
        <li>
         <blockquote>
          ${quote.quote}
         -${quote.author}
         </blockquote>
        </li>
        `);
      }
    })

    .catch(function () {
      alert('whoops');
    });
}
