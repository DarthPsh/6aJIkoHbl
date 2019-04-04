'use strict';

require('es6-promise').polyfill();
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {

  new WOW().init();

  let calc = require('./parts/calc'),
    modal = require('./parts/modal'),
    tabs = require('./parts/tabs'),
    lightbox = require('./parts/lightbox'),
    form = require('./parts/form'),
    timer = require('./parts/timer'),
    input = require('./parts/input');

  let windowSettings = calc();
  form(windowSettings);
  modal();
  tabs();
  input();
  lightbox();
  timer();

});


if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

