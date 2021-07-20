document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let input = document.querySelector('#input').value;

    if (input !== '') {
        let array = input.split('');

        playComposition(array);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let audioKey = document.querySelector(`div[data-key="${sound}"]`);


    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (audioKey) {
        audioKey.classList.add('active');

        setTimeout(() => {
            audioKey.classList.remove('active');
        }, 300);
    }
}

function playComposition(array) {
    wait = 0;

    for (let i of array) { //of itera o valor do array e não o seu index
        setTimeout(()=> {
            playSound(`key${i}`)
        }, wait)
        
        wait = wait + 250;
    }
}