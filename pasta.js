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


