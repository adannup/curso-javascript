var number = 0;
var cadena = "Hola"
var objeto = {};

console.log(typeof number); //number
console.log(typeof cadena); //String
console.log(typeof objeto); //Objet
console.log(typeof hola); //undefined  (variable no declarada);

if(typeof hola == "undefined"){ //Si la v
	console.log("Esta variable no esta declarada");
}

if(null == undefined){
	console.log("Entro al bloque"); //Retorna; Ambos devuelven falso
}

if(null === undefined){
	console.log("Entro al bloque1"); //No retorna
}