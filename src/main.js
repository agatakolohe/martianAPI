import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Donki from './martian.js';


function getElements(response) {
  if (response) {
    $('.donki-show').text(`The daily DONKI news in ${response[0].messageBody}`);
  } else {
    $('.showErrors').text(`there was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await Donki.getSpaceWeather();
  getElements(response);
}

//User Logic goes here

$(document).ready(function() {
  makeApiCall();
});
