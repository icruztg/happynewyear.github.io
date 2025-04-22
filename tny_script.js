"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Ismael Tapia
   Date: 04/21/2025

*/
/*Execute Function to run and display thecountdown clock*/
runClock();
setInterval("runClock()", 1000);
/*Funtion to create and run the countdown clock*/
function runClock() {
/*store the current date and time*/
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/*Display the current date and time*/
document.getElementById("dateNow").innerHTML= dateStr + "<br />" + timeStr;

/*Calculate the days until January lst*/
var newYear = new Date("January 1, 2021");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysleft = (newYear - currentDay)/(1000*60*60*24);

/*calculate the hours left in the current day*/
var hrsleft = (daysleft - Math.floor(daysleft))*24;
/*calculate the minutes and seconds left in the current hour */
var minsleft = (hrsleft - Math.floor(hrsleft))*60;
var secsleft = (hrsleft - Math.floor(minsleft))*60;

/*Display the time left until New Year's Eve*/
document.getElementById("days").textContent= Math.floor(daysleft);
document.getElementById("hrs").textContent=Math.floor(hrsleft);
document.getElementById("mins").textContent= Math.floor(minsleft);
document.getElementById("secs").textContent= Math.floor(secsleft);

}