let pra;  
let beb;
let pud;
let nompra;
let nombeb;
let nompud;
let valpra;
let valbeb;
let valpud;
let nome;
let end;

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
    checkup.classList.add('ap')
    
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
        p.innerHTML = 'Fechar Pedido'
        
}
}

function liberarclick() {
    let confirmar = document.querySelector('.confirmarcaixa') 
    confirmar.classList.remove('escondido')
    let praval = Number(valpra.substr(3)).toFixed(2)
    let bebval = Number(valbeb.substr(3)).toFixed(2)
    let pudval = Number(valpud.substr(3)).toFixed(2)
    let total = Number(praval) + Number(bebval) + Number(pudval)

    let spancomida = document.querySelector('.food > span:nth-child(1)')
    let spanbebida = document.querySelector('.drink > span:nth-child(1)')
    let spansobremesa = document.querySelector('.candy > span:nth-child(1)')
    let spanvalcom = document.querySelector('.food > span:nth-child(2)')
    let spanvalbeb = document.querySelector('.drink > span:nth-child(2)')
    let spanvalsob = document.querySelector('.candy > span:nth-child(2)')
    let spantotal = document.querySelector('.all > span:nth-child(2)')
    let spanPedido = document.querySelector('.tudocerto > span')
    

    nome = prompt('Informe o seu nome.')
    end = prompt('Informe seu endereço.')

    let texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${nompra}
        - Bebida: ${nombeb}
        - Sobremesa: ${nompud}
        Total: R$ ${total.toFixed(2)}
        
        - Nome: ${nome}
        - Endereço: ${end}`)
    

    spancomida.innerHTML = `${nompra}`
    spanbebida.innerHTML = `${nombeb}`
    spansobremesa.innerHTML = `${nompud}` 
    spanvalcom.innerHTML = `R$${praval}`
    spanvalbeb.innerHTML = `R$${bebval}`
    spanvalsob.innerHTML = `R$${pudval}`
    spantotal.innerHTML = `R$${total.toFixed(2)}`

    spanPedido.innerHTML = `<a href="https://wa.me/5521968249442?text=${texto}">Tudo certo, pode pedir!</a>`
}


function cancelar() {
    let cancelar = document.querySelector('.confirmarcaixa') 
    cancelar.classList.add('escondido')
}