// js/dashboard_main.js
import $ from 'jquery';
import debounce from 'lodash/debounce';

function updateCounter() {
  const countParagraph = $('#count');
  let count = parseInt(countParagraph.text()) || 0;
  count += 1;
  countParagraph.text(`${count} clicks on the button`);
}

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="clickBtn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  const clickButton = $('#clickBtn');
  clickButton.on('click', debounce(updateCounter, 1000));
});
