const CLASSE_X = 'x';
const CLASSE_O = 'o';
var turno = CLASSE_X;

const tabuleiro = {
    linha1: ['', '', ''],
    linha2: ['', '', ''],
    linha3: ['', '', '']
};

const CelulasElement = document.querySelectorAll('[data-celula]');

CelulasElement.forEach(celula => {
    celula.addEventListener('click', ClickMouse, {once: true});
});

function ClickMouse(e){
    const celula = e.target; 
    const classeAtual = turno;
    const elemento = e.srcElement.id;
    
    imprime(celula, classeAtual);
    
    Computa(elemento);

    turnos(classeAtual);
}

function imprime(celula, classeAtual){
    celula.classList.add(classeAtual)
}

function turnos(classeAtual){
    if(classeAtual == CLASSE_O)
        turno = CLASSE_X;
    else
        turno = CLASSE_O;
}

function Computa(elemento){
    const id = elemento
    
    if (id >= 1 && id <= 3){
        for(let i = 0; i <= 2; i++){
            if(id == i + 1){
                tabuleiro.linha1[i] = turno;
            }
        }
    } else
        if (id >= 4 && id <= 6){
            for(let i = 0; i <= 2; i++){
                if(id == i + 4){
                    tabuleiro.linha2[i] = turno;
                }
            }
        } else
            if (id >= 7 && id <= 9){
                for(let i = 0; i <= 2; i++){
                    if(id == i + 7){
                        tabuleiro.linha3[i] = turno;
                    }
                }
            }
      

    console.log(tabuleiro.linha1, tabuleiro.linha2, tabuleiro.linha3);
}