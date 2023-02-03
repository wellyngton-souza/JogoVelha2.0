var Tabuleiro = document.querySelector(".Tabuleiro");
var c = [0,0,0,0,0,0,0,0,0];
var vez = 1;

const fimJogo = (resVez) =>{
    c[0] === resVez && c[1] === resVez && c[2] === resVez ? Tabuleiro.innerHTML = `Vencedor Player ${resVez}` : console.log();
    c[3] === resVez && c[4] === resVez && c[5] === resVez ? Tabuleiro.innerHTML = `Vencedor Player ${resVez}` : console.log();
    c[6] === resVez && c[7] === resVez && c[8] === resVez ? Tabuleiro.innerHTML = `Vencedor Player ${resVez}` : console.log();
    c[0] === resVez && c[3] === resVez && c[6] === resVez ? Tabuleiro.innerHTML = `Vencedor Player ${resVez}` : console.log();
    c[1] === resVez && c[4] === resVez && c[7] === resVez ? Tabuleiro.innerHTML = `Vencedor Player ${resVez}` : console.log();
    c[2] === resVez && c[5] === resVez && c[8] === resVez ? Tabuleiro.innerHTML = `Vencedor Player ${resVez}` : console.log();
    c[0] === resVez && c[4] === resVez && c[8] === resVez ? Tabuleiro.innerHTML = `Vencedor Player ${resVez}` : console.log();
    c[2] === resVez && c[4] === resVez && c[6] === resVez ? Tabuleiro.innerHTML = `Vencedor Player ${resVez}` : console.log();
}

const preencherCasa = (casaselect) =>{
    let i = casaselect.id[4];

    if(c[i] === 0){
        if(vez === 1){
            c[i] = 1;
            casaselect.innerHTML = "X";
            vez = 2;
            fimJogo(1);
        } else{
            c[i] = 2;
            casaselect.innerHTML = "O";
            vez = 1;
            fimJogo(2);
        }
    }
}

Tabuleiro.addEventListener("click",(e)=>{
    if(e.target !== Tabuleiro){
        preencherCasa(e.target);
    }
});