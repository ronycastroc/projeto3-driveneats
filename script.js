let pra;
let beb;
let pud;

function clicou(pratoselec) {
    let click = document.querySelector('.borda')
    if (click !== null) {
        click.classList.remove('borda')
    }
    pratoselec.classList.add('borda')
}

function clicou2(bebidaselec) {
    let click = document.querySelector('.bebidaclick .borda')
    if (click !== null) {
        click.classList.remove('borda')
    }
    bebidaselec.classList.add('borda')
}

function clicou3(pudimselec) {
    let click = document.querySelector('.pudimclick .borda')
    if (click !== null) {
        click.classList.remove('borda')
    }

    pudimselec.classList.add('borda')
}

    if (pra && beb && pud) {
        let botao = document.querySelector('.botaobarra')
        botao.classList.add('selecionado')
}