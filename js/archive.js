var curso = {
	titulo: "Curso javaScript",
	videos: 19,
	tutor: "Uriel",
	introduccion: function(){
		console.log("Bienvenido al curso: " +this.titulo + " que tiene "+ this.videos + " videos");
	}
};

console.log(curso.tutor);
console.log(curso["titulo"]);
console.log(curso.introduccion());