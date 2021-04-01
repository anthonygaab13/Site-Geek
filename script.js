
/*----- Autores: Anthony, Luís Felipe e Matheus -----*/

// Slide

var intervalo = 3000;

function slide1() {
    document.getElementById("banner").src = "img/Dark-souls-3.png";
    setTimeout("slide2()",intervalo);
}

function slide2() {
    document.getElementById("banner").src = "img/civilization.png";
    setTimeout("slide3()",intervalo);
}

function slide3() {
    document.getElementById("banner").src = "img/rocket.jpg";
    setTimeout("slide1()",intervalo);
}


// Calculadora Flex

var etanol, gasolina;

function calcular() {
    etanol = flex.txtEtanol.value.replace(",", ".");
    gasolina = flex.txtGasolina.value.replace(",", ".");

    if (etanol < 0.7 * gasolina) {
        document.getElementById("resultado-flex").innerHTML = "Vantagem é do alcool";
    } else {
        document.getElementById("resultado-flex").innerHTML = "Vantagem é gasolina";
    }
}

function resetar() {
    document.getElementById("status").src = "aula04/img/neutro.png";
}

// IMC

function calcularImc() {
    var formulario = window.document.getElementById("formulario");
    var quilos = +formulario.quilos.value;
    var metros = +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;
    var altura = (metros * 100 + centimetros) / 100;

    //calculo IMC

    var imc = quilos / (altura * altura);
    formulario.imc.value = imc;

}

// Tabuada

function tabuada() {
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada = '';

    for (var count = 1; count <= 10; count++)
        tabuada += num + " x " + count + " = " +
            num * count + "<br />";

    resposta.innerHTML = tabuada;
}

// Jogo Dado

function dado() {
    
    var sorteio = Math.floor(Math.random() * 6 + 1);

    switch (sorteio) {
        case 1:
            document.getElementById("face").src = "img/face1.png";
            break;
    
        case 2:
            document.getElementById("face").src = "img/face2.png";
            break;
    
        case 3:
            document.getElementById("face").src = "img/face3.png";
            break;
    
        case 4:
            document.getElementById("face").src = "img/face4.png";
            break;
    
        case 5:
            document.getElementById("face").src = "img/face5.png";
            break;
    
        case 6:
            document.getElementById("face").src = "img/face6.png";
            break;
    }
    
}

// Pedra, Papel ou Tesoura

function jogar() {    
    if (document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false) {
        alert("Selecione uma opção");
    } else {
        //logica principal
        var sorteio = Math.floor(Math.random() * 3);


        switch (sorteio) {
            case 0:
                document.getElementById("pc").src = "img/pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "img/pcpapel.png";
                break;
            case 2:
                document.getElementById("pc").src = "img/pctesoura.png";
                break;

        }

        if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true & sorteio == 2)) {
            document.getElementById("placar").innerHTML = "Empate";

        } else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura").checked == true & sorteio == 1)) {


            document.getElementById("placar").innerHTML = "Jogador Venceu";
        } else {

            document.getElementById("placar").innerHTML = "Computador Venceu";
        }
    }
}

function resetar() {
    document.getElementById("pc").src = "img/pc.png";
    document.getElementById("placar").innerHTML = "";
}

