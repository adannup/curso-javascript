//Agregando clase a un div
/*
var div = document.getElementById("mi_div");
div.classList.add("mi_clase");
*/

//Agregando un id a una clase
var div = document.getElementsByClassName("mi_clase");
console.log(div);

var div2 = document.getElementsByTagName("div");
console.log(div2);


//En Jquery $([selector css])
//En Javascript

var mi_clase = document.querySelectorAll('div'); //Selecciona todos los divs
var mi_clase2 = document.querySelector('div');	//Selecciona el primer div que encuentre

function $(selector){
	return document.querySelector(selector);
}

var mi_clase3 = $(".mi_clase");
console.log(mi_clase3, "Clase 3");