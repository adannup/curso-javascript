function ordenacion(a,b){
	return a -b;
}

var arreglo = [2,5,10,20];

arreglo.sort(ordenacion);

console.log(arreglo);

arreglo.reverse();
console.log(arreglo);

//Pasar cadena en un arreglo
var arreglo2 = "a,b,c,2".split(","); 
console.log(arreglo2); // ["a","b","c","2"]

//Pasar arreglo a una cadena
arreglo3 = ["a","b","c","2"];
arreglo3 = arreglo3.join(",");

console.log(arreglo3);