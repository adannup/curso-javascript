var letras = ["H","o","l","a"];

var palabra = letras.reduce(function(valor_anterior, valor_actual, index, arreglo){
	return valor_anterior + valor_actual;
});

//H
//Ho
//Hol
//Hola

console.log(palabra);