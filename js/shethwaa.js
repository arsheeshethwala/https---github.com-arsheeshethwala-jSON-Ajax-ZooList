// shethwaa.js for Page 1
$(document).ready(function(){

//variable for personal information
var firstName;
var lastName;
var userName;
var studentNumber;
var program;
var homeCountry;

var zooList = new Array(); 

//class for zoo
class Zoo{
  constructor(zooName, zooCity, zipCode, description, photoURL, zooID){
    this.zooName = zooName;
    this.zooCity = zooCity;
    this.zipCode = zipCode;
    this.description = description;
    this.photoUrl = photoURL;
    this.zooID = zooID;
  }
   
}

$.ajax({
  type: "GET", url: "dataFiles/A2-Zoo.json",
  dataType: "json",
  success: loadJSON,
  error: function (e) {alert(`${e.status} - ${e.statusText}`);}
});  // end of the ajax call

function loadJSON(data)
{
  console.log(data)
  firstName = data.myInfo.FirstName;
  lastName = data.myInfo.LastName;
  studentNumber = data.myInfo.StudentNumber
  userName = data.myInfo.UserName;
  program = data.myInfo.SheridanProgram;
  homeCountry = data.myInfo.HomeCountry;

  localStorage.setItem("FirstName" , firstName );
  localStorage.setItem("LastName" , lastName);
  localStorage.setItem("StudentNumber" , studentNumber);
  localStorage.setItem("UserName" , userName);
  localStorage.setItem("Program" , program);
  localStorage.setItem("HomeCountry" , homeCountry);

  for(let zoo of data.zooData)
  {
    zooList.push(new Zoo(zoo.zooName, zoo.zooCity, zoo.zipCode, zoo.description, zoo.photoUrl, zoo.zooID));
  }

  localStorage.setItem("zooList", JSON.stringify(zooList));
  
  //Printing the header information
  let header = `Assignment 2 For Winter 2021 <br>${firstName} ${lastName}/${studentNumber}/${userName} <br> <hr>`;
  $("#header").html(header);
  
  //Printing the footer information
  let footer = `<hr> <br>My Sheridan Program: ${program}<br> My Home Country: ${homeCountry}<hr>`;
  $("#footer").html(footer) 
  
  //Function that loads the zoo information content
  zooInfo(data)
}

function zooInfo(data)
{
  let zHeading = `Select a zoo to see more information`;
  $("#menuheader").html(zHeading);

  $("#list1").html("");
  for (let i = 0; i<zooList.length/2; i++)
  {
    let list1 = `<li id="${zooList[i].zooID}"> <a href="pages/jquerySA2.html"> ${zooList[i].zooName} / ${zooList[i].zooCity}</a></li><br>`;
    $("#list1").append(list1);
  }

  $("#list2").html("");
  for (let i= zooList.length/2; i<zooList.length; i++)
  {
    let list1 = `<li id="${zooList[i].zooID}"> <a href="pages/jquerySA2.html"> ${zooList[i].zooName} / ${zooList[i].zooCity}</a></li><br>`;
    $("#list2").append(list1);
  }

  $(document).on("click", "#list1 >li", function() {
		localStorage.setItem(
			"zooID", 
			$(this).closest("li").attr("id")
			);
		
		localStorage.setItem("zooList", JSON.stringify(zooList));
	});

	$(document).on("click", "#list2 >li", function() {
		localStorage.setItem(
			"zooID", 
			$(this).closest("li").attr("id")
			);
		
		localStorage.setItem("zooList", JSON.stringify(zooList));
	});

}



});




