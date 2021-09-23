function printData() {

  //  _____________SCRIPT INPUT NAME, BIRTHDATE, ADDRESS, SUMMARY _____________

var fname = document.getElementById("name").value;
var fbirthdate = document.getElementById("birthdate").value;
var faddress = document.getElementById("address").value;
var fsummary = document.getElementById("summary").value;

document.getElementById("printName").innerHTML = fname;
document.getElementById("printBirthDate").innerHTML = fbirthdate;
document.getElementById("printAddress").innerHTML = faddress;
document.getElementById("printSummary").innerHTML = fsummary;


//  _____________SCRIPT RADIO GENDER _____________

var gender1 = document.getElementById("male");
var gender2 = document.getElementById("female");

if(gender1.checked==true)
document.getElementById("printGender").innerHTML = gender1.value;
else if(gender2.checked==true)
document.getElementById("printGender").innerHTML = gender2.value;

//  _____________SCRIPT RADIO RELIGION _____________

var religion1 = document.getElementById('islam');
var religion2 = document.getElementById('kristen');
var religion3 = document.getElementById('hindu');
var religion4 = document.getElementById('budha');

if(religion1.checked==true)
document.getElementById("printReligion").innerHTML = religion1.value;
else if(religion2.checked==true)
document.getElementById("printReligion").innerHTML = religion2.value;
else if(religion3.checked==true)
document.getElementById("printReligion").innerHTML = religion3.value;
else if(religion4.checked==true)
document.getElementById("printReligion").innerHTML = religion4.value;
}
