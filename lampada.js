//variáveis
// pega o doc dentro da var , que tem o id "turnON"
const turnON = document.getElementById("turnON");

// pega o doc dentro da variável, que tem o id "turnOFF"
const turnOFF = document.getElementById("turnOFF");

// pega o doc dentro da variável, que tem o id "lamp" que é a imagem da lâmpada.
const lamp = document.getElementById("lamp");

//Função, está quebrada, vai verificar o nome das imagens 
function isLampBroken() {

    //vai procurar pela palavra "quebrada", se encontra retona 1.
    return lamp.src.indexOf("quebrada") > -1
}

//Função, para mudar a imagem pra "ligada"
function lampON() {

    //se, (não está quebrada) . "quebrada na texto"
    if (!isLampBroken()) {

        // dentro da variável "lamp" coloca a imagem selecionada.
        lamp.src = "ligada.jpg";
    }
}

//Função, que vai desligar
function lampOFF() {

    //se , não estiver a palavra "quebrada"
    if (!isLampBroken()) {

        //dentro da variável "lamp" coloca a imagem selecionada.
        lamp.src = "desligada.jpg";
    }
}

//Função, colocar imagem quebrada
function lampBroken() {

    //coloca a imagem "quebrada" dentro da var com id "lamp"
    lamp.src = 'quebrada.jpg';
}

//ao clicar, vai acionar essa função
turnON.addEventListener("click", lampON);

turnOFF.addEventListener("click", lampOFF);

//efeito de passar o mouse, sobre a imagem
lamp.addEventListener("mouseover", lampON);

lamp.addEventListener("mouseleave", lampOFF);

lamp.addEventListener("dblclick", lampBroken);
