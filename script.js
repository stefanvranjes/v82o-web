/*
    Automatically instantiates modules based on data-attributes
    specifying module file-names.
*/
import Navigation from "./modules/navigation.js";
import Modal from "./modules/modal.js";

var moduleDictionary = {
    navigation: Navigation,
    modal: Modal
};
var moduleElements = document.querySelectorAll('[data-module]');

for (var i = 0; i < moduleElements.length; i++) {
    var el = moduleElements[i];
    var name = el.getAttribute('data-module');

    var Module = moduleDictionary[name];

    new Module(el);
}

/*
  Usage:
  ======

  html
  ----
  <button data-module="disappear">disappear!</button>

  js
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = 'none'
    }
  }
*/