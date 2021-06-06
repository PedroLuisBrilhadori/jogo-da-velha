const CLASSE_X = 'x';
const CLASSE_O = 'o';
var turno = CLASSE_X;
var tempo = 0;

const ganhou = document.getElementById("ganhou");
const mostra = document.getElementById("mostrai");

const tabu = document.getElementById("tabuleiro");

tabu.classList.add(turno);

const tabuleiro = {
    linha1: ['1', '2', '3'],
    linha2: ['4', '5', '6'],
    linha3: ['7', '8', '9']
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

    verificaGanhador(classeAtual);

    turnos(classeAtual, celula);
}

function imprime(celula, classeAtual){
    celula.classList.add(classeAtual)
}

function turnos(classeAtual){
    tabu.classList.remove(turno);
    if(classeAtual == CLASSE_O){
        turno = CLASSE_X;
    }else{
        turno = CLASSE_O;
    }
    tabu.classList.add(turno);
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
}

function verificaGanhador(classeAtual){

    // linhas
    if (tabuleiro.linha1[0] == tabuleiro.linha1[1] && tabuleiro.linha1[1] == tabuleiro.linha1[2]) {
        var ganhador = classeAtual;
        ganhou.innerText = `${ganhador.toUpperCase()}'s Venceu!`;
        return mostra.classList.add('mostrar');
    } else
        if (tabuleiro.linha2[0] == tabuleiro.linha2[1] && tabuleiro.linha2[1] == tabuleiro.linha2[2]) {
            var ganhador = classeAtual;
            ganhou.innerText = `${ganhador.toUpperCase()} Venceu!`;
            return mostra.classList.add('mostrar');
        } else
            if (tabuleiro.linha3[0] == tabuleiro.linha3[1] && tabuleiro.linha3[1] == tabuleiro.linha3[2]) {
                var ganhador = classeAtual;
                ganhou.innerText = `${ganhador.toUpperCase()} Venceu!`;
                return mostra.classList.add('mostrar');
            } else {
                if (tabuleiro.linha1[0] == tabuleiro.linha2[1] && tabuleiro.linha2[1] == tabuleiro.linha3[2]) {
                    var ganhador = classeAtual;
                    ganhou.innerText = `${ganhador.toUpperCase()} Venceu!`;
                    return mostra.classList.add('mostrar');
                } else
                    if (tabuleiro.linha1[2] == tabuleiro.linha2[1] && tabuleiro.linha2[1] == tabuleiro.linha3[0]) {
                        var ganhador = classeAtual;
                        ganhou.innerText = `${ganhador.toUpperCase()} Venceu!`;
                        return mostra.classList.add('mostrar');
                    } else {
                        // colunas
                        for (let i = 0; i <= 2; i++) {
                            if (tabuleiro.linha1[i] == tabuleiro.linha2[i] && tabuleiro.linha2[i] == tabuleiro.linha3[i]) {
                                var ganhador = classeAtual;
                                ganhou.innerText = `${ganhador.toUpperCase()} Venceu!`;
                                return mostra.classList.add('mostrar');
                            }    
                        }
                    }
            }

            tempo++;
            console.log(tempo)
            if(tempo == 9){
                ganhou.innerText = "Deu Velha!";
                return mostra.classList.add('mostrar');
            }
}

function recarregar(){
    window.location.reload();
}