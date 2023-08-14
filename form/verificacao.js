let senha = document.getElementById("senha");
let senhaConfirmacao = document.getElementById("senha-confirmacao");
let mensagemErro = document.getElementById("mensagem-erro");

function verificaSenha(){
    if(senha.value != senhaConfirmacao.value){
        mensagemErro.innerHTML = "As senhas precisam ser iguais.";
    }else mensagemErro.innerHTML = "";
}

senha.addEventListener("input", () => verificaSenha());
senhaConfirmacao.addEventListener("input", () => verificaSenha());