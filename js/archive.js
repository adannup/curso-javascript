var max = 100;
var min = 1;
var numero_secreto = Math.random() * (max-min) + min;
numero_secreto = parseInt(numero_secreto); //Pasa el float a un numero entero

console.log(numero_secreto);

var mensaje = "Ingresa un numero";

while(true){
	var numero_usuario = prompt(mensaje, "0"); //prompt retorna un string

	numero_usuario = parseInt(numero_usuario); //Pasar el string a un entero

	if(numero_usuario === numero_secreto){
		alert("Ganaste!! Adivinaste el numero secreto");
		break;
	}else if(numero_usuario === 0){
		break;
	}else if(numero_usuario > numero_secreto){
		mensaje = "Lo sentimos, el numero que ingresaste es mayor al numero magico";
	}else if(numero_usuario < numero_secreto){
		mensaje = "Lo sentimos, el numero que ingresaste es menor al numero magico";
	}
}