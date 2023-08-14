let darkMode = false;

let inputSabores = document.getElementById("sabor-sorvete");
let mensagem = document.getElementById("mensagem");
let body = document.querySelector("body");
let botaoModo = document.getElementById("botaoModo");

function verificaSabor() {
    if(inputSabores.value.length > 3){
        if(inputSabores.value == "chocolate") mensagem.innerHTML = "Eu amo sorvete de chocolate!"
	else if(inputSabores.value == "flocos") mensagem.innerHTML = "Ahh, eu prefiro o de chocolate!"
	else mensagem.innerHTML = "JOGA O COPÃO PRO ALTO VAMOS BEBER"
    }
}
function mudaModo(){
	console.log("funciona por favor");
	darkMode = !darkMode;
	if(darkMode){
		body.style.backgroundColor = "black";
		body.style.color = "white";
	}
	else{
		body.style.backgroundColor = "white";
		body.style.color = "black";
	}
}

inputSabores.addEventListener("input", () => verificaSabor());
botaoModo.addEventListener("click", () => mudaModo());
