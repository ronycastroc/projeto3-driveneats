let pra;  
let beb;
let pud;
let nompra;
let nombeb;
let nompud;
let valpra;
let valbeb;
let valpud;

function clicou(pratoselec) {
    let click = document.querySelector('.borda')
    let checkup = document.querySelector('.ap')
    
    pra = pratoselec
    nompra = pra.querySelector('.nomeprato').innerText
    valpra = pra.querySelector('.valorprato').innerHTML
    

    if (click !== null && checkup !== null) {
        click.classList.remove('borda')
        checkup.classList.remove('ap')
    }
    pratoselec.classList.add('borda')
    pratoselec.querySelector('.check').classList.add('ap')
    
    liberar()
}

function clicou2(bebidaselec) {
    let click = document.querySelector('.bebidaclick .borda')
    beb = bebidaselec
    nombeb = beb.querySelector('.nomebeb').innerText
    valbeb = beb.querySelector('.valorbeb').innerHTML
    
    if (click !== null) {
        click.classList.remove('borda')
    }
    bebidaselec.classList.add('borda')

    liberar()
}

function clicou3(pudimselec) {
    let click = document.querySelector('.pudimclick .borda')
    pud = pudimselec
    nompud = pud.querySelector('.nomepud').innerText
    valpud = pud.querySelector('.valorpud').innerHTML
    
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
        botao.classList.add('selecionado')

        let praval = Number(valpra.substr(3))
        let bebval = Number(valbeb.substr(3))
        let pudval = Number(valpud.substr(3))
        let total = praval + bebval + pudval

        let texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${nompra}
        - Bebida: ${nombeb}
        - Sobremesa: ${nompud}
        Total: R$ ${total.toFixed(2)}`)
        

        p.innerHTML = `<a href="https://wa.me/5521968249442?text=${texto}">Fechar Pedido</a>`
        
    }
}
