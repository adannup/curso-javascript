var contador = 0;

while(contador < 11){
	contador++;

	if(contador % 2 == 0){
		console.log(contador);
	}
}

// Otra manera
while(contador < 11){
	contador++;

	if(contador % 2 !== 0){
		continue;	//Lo que hace es terminar hasta aqui el ciclo y se salta al siguiente ciclo
	}
	console.log(contador);
}

//Rompiendo el ciclo
while(true){
	console.log(contador);
	contador++;
	if(contador >= 10){
		break;
	}
}

//Do-While

do{
	console.log(contador);
	contador++;
	if(contador >= 10){
		break;
	}
}while(false);