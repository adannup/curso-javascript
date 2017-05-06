var numeros = [1,5,6,8];

//numero.map(callback);

/*
var cuadrados = [];

for(var i = numeros.length - 1; i >= 0; i--){
	var numero = numeros[i];
	cuadrados.push(Math.pow(numero,2));
}

console.log(cuadrados);
*/

var cuadrados = numeros.map(function(numero){
	return numero * numero;
});

console.log(cuadrados);