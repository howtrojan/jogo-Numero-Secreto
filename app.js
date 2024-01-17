let listaDeNumerosSorteados = [];
let numeroMaximo = 7;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  let mensagemTentativas = tentativas > 1 ? "tentativas" : "tentativa";

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    exibirTextoNaTela(
      "p",
      "Você acertou o número secreto com " +
        tentativas +
        " " +
        mensagemTentativas
    );
    limparCampo();
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
  }
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e " + numeroMaximo);
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();  
  tentativas = 1;
  limparCampo();
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);  
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = Math.floor(Math.random() * numeroMaximo + 1);
  let quantidadeElementosLista = listaDeNumerosSorteados.length;
  
  if (quantidadeElementosLista === numeroMaximo){
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}
