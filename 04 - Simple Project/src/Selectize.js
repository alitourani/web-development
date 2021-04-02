let Fuse = require('fuse.js');
let css = require('./Selectize.styl');

let fuseConfig = {
  caseSensitive: false,
  includeScore: false,
  shouldSort: true,
  tokenize: false,
  threshold: 0.5,
  location: 0,
  distance: 500,
  maxPatternLength: 500,
  keys: ["title", "author.firstName"]
};

module.exports = class Selector {
  constructor(body, className, label, books, onInput) {
    this.body = body;
    this.className = className;
    this.label = label;
    this.books = books;
    this.filteredBooks = books;
    this.userOnInput = onInput;
    let elem = this._InitElements();
    body.appendChild(elem);
  }
  
  _InitElements() {
    let container = document.createElement('div');
    container.className = this.className + " " + css.container;
    let input = document.createElement('input');
    this.inputElem = input;
    let pointer = this;
    input.addEventListener("keyup", function(e){ pointer.onInput(e); } );
    input.placeholder = this.label;
    input.className = css.input;
    let list = document.createElement('ul');
    list.className = css.list;
    this.currentList = list;
    this._updateListItems();
    container.appendChild(input);
    container.appendChild(list);
    return container;
  }
  
  _updateListItems() {
    let list = this.currentList;
    for (let index in this.filteredBooks) {
      let newItem = document.createElement('li');
      let fetchedItem = this.filteredBooks[index];
      newItem.innerHTML = fetchedItem.title + ` (by ${fetchedItem.author.firstName} ${fetchedItem.author.lastName})`;
      newItem.className = css.option;
      list.appendChild(newItem);
    };
  }
  
  _filterOptions() {
    if (this.inputValue === ""){
      return this.books;
    }
    let fuse = new Fuse(this.books, fuseConfig);
    return fuse.search(this.inputValue);
  }
  
  _clearList() {
    while (this.currentList.firstChild) {
      this.currentList.removeChild(this.currentList.firstChild);
    }
  }
  
  onInput(e) {
    this.userOnInput(e.target.value, e);
    this.inputValue = e.target.value;
    this.filteredBooks = this._filterOptions();
    this._clearList();
    this._updateListItems();
  }
}