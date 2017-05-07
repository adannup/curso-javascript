(function(){
	document.getElementById('btn').addEventListener("click", function(){
		console.log("Hizo click");
	});

	setTimeout(function(){
		console.log("Hola Mundo");
	}, 5000);
})();