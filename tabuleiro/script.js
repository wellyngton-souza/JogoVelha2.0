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
    if(c[0] !== 0 && c[1] !== 0 && c[2] !== 0 && c[3] !== 0 && c[4] !== 0 && c[5] !== 0 && c[6] !== 0 && c[7] !== 0 && c[8] !== 0){
        Tabuleiro.innerHTML = `Jogo Empatado<br><button onclick="reiniciarJogo()">Reiniciar Jogo</button>`;
        Tabuleiro.style.flexDirection = "column";
    }

    if(c !==0){
        c[0] === resVez && c[1] === resVez && c[2] === resVez ? mostrarVencedor(resVez) : console.log();
        c[3] === resVez && c[4] === resVez && c[5] === resVez ? mostrarVencedor(resVez) : console.log();
        c[6] === resVez && c[7] === resVez && c[8] === resVez ? mostrarVencedor(resVez) : console.log();
        c[0] === resVez && c[3] === resVez && c[6] === resVez ? mostrarVencedor(resVez) : console.log();
        c[1] === resVez && c[4] === resVez && c[7] === resVez ? mostrarVencedor(resVez) : console.log();
        c[2] === resVez && c[5] === resVez && c[8] === resVez ? mostrarVencedor(resVez) : console.log();
        c[0] === resVez && c[4] === resVez && c[8] === resVez ? mostrarVencedor(resVez) : console.log();
        c[2] === resVez && c[4] === resVez && c[6] === resVez ? mostrarVencedor(resVez) : console.log();
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