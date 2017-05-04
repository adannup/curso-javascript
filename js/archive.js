var arreglo = [20,15,10];

console.log(arreglo[0]);
console.log("Tamaño", arreglo.length);

arreglo.push(7); //Agregar al final
arreglo.unshift(14); //Agregar al principio
console.log(arreglo);

arreglo.pop(); //Elimina el final
arreglo.shift(); //Elimina el principio
console.log(arreglo);

for(var i=0; i < arreglo.length; i++){
	console.log(arreglo[i]);
}