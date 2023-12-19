let elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    imprimeChute(chute)
    verificaSeChuteValido(chute)
}

function imprimeChute(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div> 
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

