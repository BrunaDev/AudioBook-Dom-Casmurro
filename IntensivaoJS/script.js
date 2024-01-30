const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAnterior = document.getElementById('anterior');
const botaoAvancar = document.getElementById('proximo');
const nomeCapitulo = document.getElementById('capitulo');
const numCapitulo = document.getElementById('numCapitulo');

const numeroCapitulos = 30;
let taTocando = 0; //0 - não está tocando; 1 - está tocando
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Sessão ' + capituloAtual;

    //Verifica qual sessão está para definir os capítulos
    if(capituloAtual === 1)
        numCapitulo.innerText = 'Capítulos I a V';
    if(capituloAtual === 2)
        numCapitulo.innerText = 'Capítulos VI a X';
        if(capituloAtual === 3)
        numCapitulo.innerText = 'Capítulos XI a XV';
        if(capituloAtual === 4)
        numCapitulo.innerText = 'Capítulos XVI a XX';
        if(capituloAtual === 5)
        numCapitulo.innerText = 'Capítulos XXI a XXV';
        if(capituloAtual === 6)
        numCapitulo.innerText = 'Capítulos XXVI a XXX';
        if(capituloAtual === 7)
        numCapitulo.innerText = 'Capítulos XXXI a XXXV';
        if(capituloAtual === 8)
        numCapitulo.innerText = 'Capítulos XXXVI a XL';
        if(capituloAtual === 9)
        numCapitulo.innerText = 'Capítulos XLI a XLV';
        if(capituloAtual === 10)
        numCapitulo.innerText = 'Capítulos XLVI a L';

        if(capituloAtual === 11)
        numCapitulo.innerText = 'Capítulos LI a LV';
        if(capituloAtual === 12)
        numCapitulo.innerText = 'Capítulos LVI a LX';
        if(capituloAtual === 13)
        numCapitulo.innerText = 'Capítulos LXI a LXV';
        if(capituloAtual === 14)
        numCapitulo.innerText = 'Capítulos LXVI a LXX';
        if(capituloAtual === 15)
        numCapitulo.innerText = 'Capítulos LXXI a LXXV';
        if(capituloAtual === 16)
        numCapitulo.innerText = 'Capítulos LXXVI a LXXX';
        if(capituloAtual === 17)
        numCapitulo.innerText = 'Capítulos LXXXI a LXXXV';
        if(capituloAtual === 18)
        numCapitulo.innerText = 'Capítulos LXXXVI a XC';
        if(capituloAtual === 19)
        numCapitulo.innerText = 'Capítulos XCI a XCV';
        if(capituloAtual === 20)
        numCapitulo.innerText = 'Capítulos XCVI a C';

        if(capituloAtual === 21)
        numCapitulo.innerText = 'Capítulos CI a CV';
        if(capituloAtual === 22)
        numCapitulo.innerText = 'Capítulos CVI a CX';
        if(capituloAtual === 23)
        numCapitulo.innerText = 'Capítulos CXI a CXV';
        if(capituloAtual === 24)
        numCapitulo.innerText = 'Capítulos CXVI a CXX';
        if(capituloAtual === 25)
        numCapitulo.innerText = 'Capítulos CXXI a CXXV';
        if(capituloAtual === 26)
        numCapitulo.innerText = 'Capítulos CXXVI a CXXX';
        if(capituloAtual === 27)
        numCapitulo.innerText = 'Capítulos CXXXI a CXXXV';
        if(capituloAtual === 28)
        numCapitulo.innerText = 'Capítulos CXXXVI a CXL';
        if(capituloAtual === 29)
        numCapitulo.innerText = 'Capítulos CXLI a CXLV';
        if(capituloAtual === 30)
        numCapitulo.innerText = 'Capítulos CXLVI a CXLVIII';
}

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = './books/dom-casmurro/'+capituloAtual+'.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = './books/dom-casmurro/'+capituloAtual+'.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', voltarFaixa);