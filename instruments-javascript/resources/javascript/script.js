function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function playSoundPointer(e) {
    const audio = document.querySelector(`audio[data-key="${e.path[1].dataset['key']}"]`)
    const key = document.querySelector(`.key[data-key="${e.path[1].dataset['key']}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', playSoundPointer));
keys.forEach(key => key.classList.add('noselect')); // not allowing the users to select the text while tapping on the divs multiple times