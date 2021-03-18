window.onload = function () {
  document.getElementById("title").style.fontSize ="smaller";
};

title.onclick = function () {
  document.getElementById("title").style.color = "red";
};

ingredients.onclick = function () {
  document.getElementById("list1").style.display = "inline";
};

equipment.onclick = function () {
  document.getElementById("list2").style.display = "inline";
};

directions.onclick = function () {
  document.getElementById("list3").style.display = "inline";
};

var para= document.createElement("P");
para.innerText = "Enjoy Your Meal!";
document.getElementById("source").appendChild(para);

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}

window.onload = function() {
	
	loadFileInto("ingredients.html", "ingredients");
	
	loadFileInto("equipment.html", "equipment");
	
	loadFileInto("directions.html", "directions");
	
};

