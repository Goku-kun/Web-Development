const textarea = document.querySelector('textarea');
const p = document.querySelector('p');


window.addEventListener('load', function(event) {
    textarea.focus();
});

textarea.addEventListener('keyup', function(event) {
    const value = this.value;
    p.textContent = `The number of characters is ${value.length}`;
})