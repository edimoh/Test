document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " W3Schools. All rights reserved.</p>";

document.getElementById("mymenu").innerHTML =
"<ul id='menu'>" +
	"<li><a href='Index.html'>Home</a></li>" +
	"<li><a href='Customers.html'>Data</a></li>" +
	"<li><a href='About.html'>About</a></li>" +
"</ul>"; 

/*
READ A LOCAL FILE
*/
var customerData = "file:///C:/Temp/Demoweb/Customers_Map.txt";
readTextFile(customerData)

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState == 4) {
            if (rawFile.status == 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                createCustomerTable(allText);
            }
        }
    }
    rawFile.send(null);
}
//CRAEATE THE CUSTOMER TABLE
function createCustomerTable(text) {
    var arr = JSON.parse(text);	 
    var i;
    var out = "<table><tr><th>Name</th><th>mCity</th><th>Country</th></tr>";
    //for (i = 0; i < arr.length; i++) {
	for (i in arr) {	
        out += "<tr><td>" + arr[i].Name + "</td><td>" + arr[i].City + "</td><td>" + arr[i].Country + "</td></tr>";
    }
    out += "</table>"
    document.getElementById("customerTable").innerHTML = out;
}