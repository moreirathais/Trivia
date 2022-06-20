const displayNameElement = document.getElementById("display-name");
const playerNameElement = document.querySelector('[name="player-name"]');

const sectionOneElement = document.getElementById("section-1");
const sectionTwoElement = document.getElementById("section-2");

const btnPlay = document.getElementById("btn-play")
const primeira =document.getElementById("primeira")
const segunda =document.getElementById("segunda")
const terceira =document.getElementById("terceira")
const btnAgain =document.getElementById("jogar-novamente")

primeira.addEventListener("click", function(e){
	e.preventDefault();
	alert("Ada Lovelace");
})

segunda.addEventListener("click", function(e){
	e.preventDefault();
	alert("30%");
})

terceira.addEventListener("click", function(e){
	e.preventDefault();
	alert("Desenvolvedor(a)");
})

btnPlay.addEventListener("click", function() {
	if (playerNameElement.value) {
		sectionOneElement.classList.add("hidden");
		sectionTwoElement.classList.remove("hidden");

		displayNameElement.innerHTML = "Olá, " + playerNameElement.value;
	} else {
		window.alert("O nome da pessoa jogadora é obrigatório");
	}
})

btnAgain.addEventListener("click", function(){
	sectionOneElement.classList.remove("hidden");
	sectionTwoElement.classList.add("hidden");
	playerNameElement.value = null;
})
