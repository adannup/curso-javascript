/* Antes de ES5
var curso = {
	titulo: "Curso JavaScript",
	videos: 19,
	tutor: "Uriel",
	getTutor: function(){
		return this.tutor;
	},
	setTutor: function(tutor){
		if(tutor === "" || typeof tutor === "undefined"){ return }
		this.tutor = tutor;
	}
};

curso.setTutor();
console.log(curso.getTutor());

*/


var curso = {
	titulo: "Curso JavaScript",
	videos: 19,
	tutor_value: "Uriel",
	get tutor(){
		return this.tutor_value.toUpperCase();
	},
	set tutor(tutor){
		if(tutor === "" || typeof tutor === "undefined"){ return }
		this.tutor_value = tutor;
	}
};

curso.tutor = "";
console.log(curso.tutor);