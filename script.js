let pra;  
let beb;
let pud;

function clicou(pratoselec) {
    let click = document.querySelector('.borda')
    pra = pratoselec.innerHTML

    if (click !== null) {
        click.classList.remove('borda')
    }
    pratoselec.classList.add('borda')
    
    liberar()
}

function clicou2(bebidaselec) {
    let click = document.querySelector('.bebidaclick .borda')
    beb = bebidaselec.innerHTML
    if (click !== null) {
        click.classList.remove('borda')
    }
    bebidaselec.classList.add('borda')

    liberar()
}

function clicou3(pudimselec) {
    let click = document.querySelector('.pudimclick .borda')
    pud = pudimselec.innerHTML
    if (click !== null) {
        click.classList.remove('borda')
    }
    pudimselec.classList.add('borda') 

    liberar()
}

function liberar() {
    if (pra && beb && pud) {
        let p = document.querySelector('.botaobarra p')
        let botao = document.querySelector('.botaobarra')
        p.innerHTML = 'Finalizar'
        botao.classList.add('selecionado')
    }
}


function finalizar() {
    
    if (pra && beb && pud) {
          alert('compra ai')
}
}
    