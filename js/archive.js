var arreglo = ["hola", "mundo"];

for(var i=0; i < arreglo.length; i++){
	console.log(arreglo[i]);
}


for(var i=0; i < 10; i++){
	if (i>=1){ break; }	
	console.log(i);
}


for(var i=0; i < 10; i++){
	if (i%2 !==0){ continue; }	
	console.log(i);
}