var Tabuleiro = document.querySelector(".Tabuleiro");
var jogoinicio = Tabuleiro.innerHTML;
var c = [0,0,0,0,0,0,0,0,0];
var vez = 1;

const mostrarVencedor = (venced) =>{
    Tabuleiro.innerHTML = `Vencedor Player ${venced}<br><button onclick="reiniciarJogo()">Reiniciar Jogo</button>`;
    Tabuleiro.style.flexDirection = "column";
    if(venced === 1){
        let score = document.querySelector("#p1").innerHTML;
        document.querySelector("#p1").innerHTML = parseInt(score) + 1;
    } else{
        let score = document.querySelector("#p2").innerHTML;
        document.querySelector("#p2").innerHTML = parseInt(score) + 1;
    }
}

const fimJogo = (resVez) =>{
    if(c.slice().every(num => num !== 0)){
        Tabuleiro.innerHTML = `Jogo Empatado<br><button onclick="reiniciarJogo()">Reiniciar Jogo</button>`;
        Tabuleiro.style.flexDirection = "column";
    }

    if (c !== 0) {
        let posicoes = [
            [c[0], c[1], c[2]],
            [c[3], c[4], c[5]],
            [c[6], c[7], c[8]],
            [c[0], c[3], c[6]],
            [c[1], c[4], c[7]],
            [c[2], c[5], c[8]],
            [c[0], c[4], c[8]],
            [c[2], c[4], c[6]]
        ];
      
        posicoes.find((condicao) => condicao.every((num) => num === resVez)) ? mostrarVencedor(resVez) : console.log();
    }
}

const reiniciarJogo = () =>{
    Tabuleiro.innerHTML = jogoinicio;
    Tabuleiro.style.flexDirection = "row";
    c = [0,0,0,0,0,0,0,0,0];
}

const jogarbot = () =>{
    let casaaleatoria = parseInt(Math.random() * 10);
    if(c[casaaleatoria] !== 0){
        jogarbot();
    } else{
        document.querySelector(`#casa${casaaleatoria}`).innerHTML = "O";
        c[casaaleatoria] = 2;
        vez = 1;
        fimJogo(2);
    }
}

const preencherCasa = (casaselect) =>{
    let i = casaselect.id[4];

    if(c[i] === 0){
        c[i] = 1;
        casaselect.innerHTML = "X";
        vez = 2;
        fimJogo(1);
        jogarbot();
    }
}

Tabuleiro.addEventListener("click",(e)=>{
    if(e.target !== Tabuleiro){
        preencherCasa(e.target);
    }
});