const li = document.querySelectorAll('li');
console.log(li);
li.forEach(item => {
    item.addEventListener('pointerover', function() {
        this.classList.add('rotate');
    })
    item.addEventListener('pointerout', function() {
        this.classList.remove('rotate');
    })
})
console.log(li);