const answer = document.querySelector('.answer-block');
let firstTime = true;
let value1 = 0;
let undisplayedAnswer = 0;

function writeValue(event) {
    const btn = event.target;
    if (firstTime) {
        answer.textContent = btn.dataset.value;
        firstTime = false;
        return;
    }
    answer.textContent += btn.dataset.value;

}

function add(event) {
    values = answer.textContent.split('+');
    undisplayedAnswer = values.map(val => parseInt(val)).reduce((cur, nex) => cur += nex)
    answer.textContent = undisplayedAnswer;
    answer.textContent += '+';
}

function subtract(event) {
    values = answer.textContent.split('-');
    undisplayedAnswer = values.map(val => parseInt(val)).reduce((cur, nex) => cur -= nex)
    answer.textContent = undisplayedAnswer;
    answer.textContent += '-';
}

function multiply(event) {
    values = answer.textContent.split('x');
    undisplayedAnswer = values.map(val => parseInt(val)).reduce((cur, nex) => cur *= nex)
    answer.textContent = undisplayedAnswer;
    answer.textContent += 'x';
}

function divide(event) {
    values = answer.textContent.split('/');
    undisplayedAnswer = values.map(val => parseInt(val)).reduce((cur, nex) => cur /= nex)
    answer.textContent = undisplayedAnswer;
    answer.textContent += '/';
}

document.querySelector('[data-value="clear"]').addEventListener('click', function(event) {
    answer.textContent = 0;
    firstTime = true;
})
document.querySelector('[data-value="delete"]').addEventListener('click', function(event) {
    answer.textContent = answer.textContent.slice(0, answer.textContent.length - 1)
    if (answer.textContent.length === 0) {
        answer.textContent = 0;
        firstTime = true;
    }
})

document.querySelectorAll('button.number').forEach(btn => {
    btn.addEventListener('click', writeValue);
})

document.querySelector('[data-value="add"]').addEventListener('click', add);
document.querySelector('[data-value="subtract"]').addEventListener('click', subtract);
document.querySelector('[data-value="multiply"]').addEventListener('click', multiply);
document.querySelector('[data-value="divide"]').addEventListener('click', divide);
document.querySelector('[data-value="answer"]').addEventListener('click', function(event) {

    if (answer.textContent.includes('+')) {
        undisplayedAnswer = answer.textContent.split('+').map(val => parseInt(val)).reduce((cur, nex) => cur += nex)
    } else if (answer.textContent.includes('-')) {
        undisplayedAnswer = answer.textContent.split('-').map(val => parseInt(val)).reduce((cur, nex) => cur -= nex)
    } else if (answer.textContent.includes('x')) {
        undisplayedAnswer = answer.textContent.split('x').map(val => parseInt(val)).reduce((cur, nex) => cur *= nex)
    } else if (answer.textContent.includes('/')) {
        undisplayedAnswer = answer.textContent.split('/').map(val => parseInt(val)).reduce((cur, nex) => cur /= nex)
    } else {
        undisplayedAnswer = 0;
    }
    answer.textContent = undisplayedAnswer;
    firstTime = true;
})