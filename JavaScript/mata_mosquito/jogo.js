var height;
var width;
var vidas = 1;
var tempo = 20;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "facil") {
	//1500
	criaMosquitoTempo = 1500;
} else if (nivel === "normal") {
	//1000
	criaMosquitoTempo = 1000;
} else if (nivel === "dificil") {
	//750
	criaMosquitoTempo = 750;
}

function setSize() {
	height = window.innerHeight;
	width = window.innerWidth;

	console.log("w = " + width + " h = " + height);
}

setSize();

var cronometro = setInterval(function () {
	tempo--;
	if (tempo < 0) {
		clearInterval(cronometro);
		clearInterval(criaMosquito);
		window.location.href = "win.html";
	}
	document.getElementById("cronometro").innerHTML = tempo;
}, 1000);

function randomPosition() {
	//remover mosquito anterior(caso exista)
	if (document.getElementById("mosquito")) {
		document.getElementById("mosquito").remove();

		if (vidas > 3) {
			window.location.href = "game_over.html";
		}
		document.getElementById("v" + vidas).src = "images/coracao_vazio.png";
		vidas++;
	}

	var posX = Math.floor(Math.random() * width) - 90;
	var posY = Math.floor(Math.random() * height) - 90;

	posX = posX < 0 ? 0 : posX;
	posY = posY < 0 ? 0 : posY;

	console.log(posX, posY);

	//criar o elemento html
	var mosquito = document.createElement("img");
	mosquito.src = "images/mosquito.png";
	mosquito.className = randomSize() + " " + randomSide();
	mosquito.style.left = posX + "px";
	mosquito.style.top = posY + "px";
	mosquito.style.position = "absolute";
	mosquito.id = "mosquito";
	mosquito.onclick = function () {
		this.remove();
	};

	document.body.appendChild(mosquito);
}

function randomSize() {
	var classe = Math.floor(Math.random() * 3);

	switch (classe) {
		case 0:
			return "mosquito1";
		case 1:
			return "mosquito2";
		case 2:
			return "mosquito3";
	}
}

function randomSide() {
	var classe = Math.floor(Math.random() * 2);

	switch (classe) {
		case 0:
			return "sideA";
		case 1:
			return "sideB";
	}
}
