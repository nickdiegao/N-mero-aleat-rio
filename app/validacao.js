function verificaSeChuteValido() {
    let numero = +chute

    if (validacaoNumero(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>O valor precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h1>Parabéns você acertou</h1>
        <h3>O número era</h3>
        <span class="box">${numero}</span> 

        <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroAleatorio) {
        elementoChute.innerHTML += `<div>0 número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else if (numero < numeroAleatorio) {
        elementoChute.innerHTML += `<div>0 número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function validacaoNumero(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor 
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})