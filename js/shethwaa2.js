$(document).ready(function(){

var firstName = localStorage.getItem("FirstName");
var lastName = localStorage.getItem("LastName");
var userName = localStorage.getItem("UserName");
var studentNumber = localStorage.getItem("StudentNumber");
var program = localStorage.getItem("Program");
var homeCountry = localStorage.getItem("HomeCountry");
var zooList = JSON.parse(localStorage.getItem("zooList"));
var zooID = localStorage.getItem("zooID");

let header = `Assignment 2 For Winter 2021 <br>${firstName} ${lastName}/${studentNumber}/${userName} <br> <hr>`;
  $("#header").html(header);

let backlink = `<a href="../index.html">Back to Index</a>`;
$("button").html(backlink).css("a");

let footer = `<hr> <br>My Sheridan Program: ${program}<br> My Home Country: ${homeCountry}<hr>`;
  $("#footer").html(footer);

let zooName = `<label>Zoo Name: </label>${zooList[zooID].zooName}`;
$("#zooName").html(zooName);

let zooCity = `<label>Zoo City: </label>${zooList[zooID].zooCity}`;
$("#zooCity").html(zooCity);

let zooCode = `<label>Zoo Code: </label>${zooList[zooID].zipCode}`;
$("#zooCode").html(zooCode);

let printimage = `<img src="${zooList[zooID].photoUrl}" width="200" height="150"/>`;
$("#img").html(printimage);

let description = `<label>Description: </label>${zooList[zooID].description}`;
$("#desc").html(description);

  
});
