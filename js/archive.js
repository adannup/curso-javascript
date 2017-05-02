var nombre = "Ramon Adan"
var cadena = 'Hola ' + nombre;

var resultado = cadena.indexOf("Adan"); //Retorna -1 cuando no existe ninguna coincidencia

console.log(cadena);
console.log('Longitud', cadena.length);
console.log('IndexOf', resultado);

if(nombre.indexOf("Adan") != -1){
	console.log("Exelente, encontrado");
}else{
	console.log("Wrong!, No encontrado");
}

console.log("Accediendo mediante indice 0:", nombre[0]);
console.log("Usando funcion charAt:",nombre.charAt(0));

/*
	comentario
*/
//Comentario

nombre = nombre.replace("R", "J"); //Remplazar R por J
console.log("Remplazando caracteres:",nombre);

console.log("Cortar la cadena:",nombre.slice(0,2)); 
console.log("Mayuscula:",nombre.toUpperCase()); 
console.log("Minuscula:",nombre.toLowerCase()); 
