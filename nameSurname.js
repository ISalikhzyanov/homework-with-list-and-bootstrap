const nameEl = document.getElementById("name");
const surnameEl = document.getElementById("surname");
const patEl = document.getElementById("patronymic");
const resultEl = document.getElementById('result')
const calculateEl = document.getElementById("calculate");


calculateEl.addEventListener('click', () => {
    const name = nameEl.value.split('');
    const surname = surnameEl.value.split('');
    const patr = patEl.value.split('');
    resultEl.textContent = cut(name, surname, patr)

})

function cut(name, surname, patr) {
    const a = name[0];
    const s = surname[0];
    const p = patr[0];
    return a + '.' + s + '.' + p + '.'
}