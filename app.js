var checkbox = document.getElementById('verificacao');

checkbox.addEventListener('change', (event) => {
    if(event.currentTarget.checked) {
        document.getElementById("btnAgendar").disabled = false;
    } else {
        console.log("nao selecionado");
    }
});

function iniciaModal(modalID) {
    var modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (event) => {
        if(event.target.id == modalID || event.target.className == "fechar-modal" || event.target.className == "btnConfirmar"){
            modal.classList.remove('mostrar');
        }
    });
}

var botaoAgendar = document.getElementById("btnAgendar");

function btnAgendar() {
    var pegarNome = document.getElementById("nome").value;
    var pegarEmail = document.getElementById("email").value;
    var pegarLocal = document.getElementById("local").value;
    var pegarData = document.getElementById("data").value;
    var pegarNumero = document.getElementById("numero-estacao").value;

    var nomeImprimir = document.getElementById("nome-modal");
    var emailImprimir = document.getElementById("email-modal");
    var localImprimir = document.getElementById("local-modal");
    var dataImprimir = document.getElementById("data-modal");
    var numeroImprimir = document.getElementById("numero-estacao-modal");

    iniciaModal('modal-dados');
    //seguir os códigos para pegar os valores colocados pelo usuário
    //tentar imprimir os valores com uma confirmação dos dados digitados e escolhidos
    nomeImprimir.innerHTML = "Nome - " + pegarNome;
    emailImprimir.innerHTML = "Email - " + pegarEmail;
    localImprimir.innerHTML = "Local - " + pegarLocal;
    dataImprimir.innerHTML = "Data - " + pegarData;
    numeroImprimir.innerHTML = "Número da estação - " + pegarNumero;
}

function btnConfirmar() {
    var pegarNome = document.getElementById("nome").value;
    var resultado = document.getElementById("resultado");
    var imprimirResultado = "<p class='resultado-final'> Olá, " + pegarNome + " seu agendamento foi realizado com sucesso, bom retorno e siga as regras!</p>"
    
    resultado.innerHTML = imprimirResultado;
    document.getElementById("btnAgendar").disabled = true;
}