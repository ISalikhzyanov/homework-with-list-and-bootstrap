const priceEl = document.getElementById('price')
const formEl = document.getElementById('form');
const inputEl = document.getElementById('shopName');
const listEl = document.getElementById('list');
const numberEl = document.getElementById('number');
const sumEl = document.getElementById('sum');
let max = 0;
let tov = '';
let sum = 0;

class Task {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }


}

class TaskList {
    constructor() {
        this.list = []
    }

    add(task) {
        this.list.push(task);
        this.render()
    }

    render() {
        listEl.innerHTML = '';
        for (const task of this.list) {
            const el = document.createElement('li')
            el.innerHTML = `
            <div class="alert alert-success" role="alert">
              ${task.name}${'&nbsp'}${task.price}
            </div>
            `
            listEl.appendChild(el)
        }


    }
}

const store = new TaskList()

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskName = inputEl.value;
    const price = Number(priceEl.value);
    const task = new Task(taskName, Number(price));
    store.add(task)
    console.log(store.list)
    for (const task of store.list)
        if (task.price > max) {
            (max = task.price) && (tov = task.name)
        }
    console.log(max, tov)
    const number = store.list.length
    console.log(number)
    for (const task of store.list)
        sum = task.price + sum
  console.log(sum)
})
