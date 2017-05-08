function Tutor(nombre, apellido){
	this.nombre = nombre;
	this.saludar = function(){
		console.log("Hola a todos soy "+this.nombre);
	}

	if(typeof apellido !== "undefined"){
		this.nombre_completo = nombre + " " + apellido;
	}
}

var ramon = new Tutor("Ramon", "Adan");
ramon.saludar();
console.log(ramon.nombre_completo);
var adan = new Tutor("Adan");
adan.saludar();