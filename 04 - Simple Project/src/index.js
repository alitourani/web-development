let css = require('./index.styl');
Selectize = require('./Selectize');
let books = require('./books');

var logger = function (newInputValue, e) {
  console.log('Input:', newInputValue);
}

Selectize = new Selectize(document.body, css.mainContainer, "Search books ...", books, logger);