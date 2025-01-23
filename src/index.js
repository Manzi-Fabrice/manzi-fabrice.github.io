import $ from 'jquery';
import './style.scss';

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

$('#main').html(`You Have been to this page for ${seconds} seconds.`);

const updateDisplay = () => {
  $('#main').html(
    `You Have been to this page for: ${days} days: ${hours} hours: ${minutes} minutes:${seconds} seconds.`,
  );
};

updateDisplay();

setInterval(() => {
  seconds += 1;

  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours += 1;
  }

  if (hours >= 24) {
    hours = 0;
    days += 1;
  }

  updateDisplay();
}, 1000);
