const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}


btnAvancar.addEventListener("click", function() {
       

    esconderCartaoSelecionado();

    cartaoAtual++;
    if(cartaoAtual >= cartoes.length ){ cartaoAtual = 0};
    mostrarCartao(cartaoAtual);




});

btnVoltar.addEventListener("click", function() {
    if(cartaoAtual < 1){ cartaoAtual = cartoes.length};

    esconderCartaoSelecionado();

    cartaoAtual--;

    mostrarCartao(cartaoAtual);

    
});