var numeros = [10,2,3,5,9,20,22];

/*
var pares = [];

for(var i = numeros.length; i>=0; i--){
	var numero = numeros[i];
	if(numero % 2 == 0){
		pares.push(numero);
	}
}

console.log(pares);
*/

var pares = numeros.filter(function(numero){
	return numero % 2 === 0;
});
console.log(pares);