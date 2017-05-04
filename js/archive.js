function clic(){
	alert("Esto fue disparado por el boton");
}

document.getElementById("mi_btn").addEventListener("click", clic, false);

//booglin
document.getElementById("mi_div").addEventListener("click", another_clic, false);

function another_clic(){
	alert("Esto fue disparado por el div");
}
