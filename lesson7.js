// function Person(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }
//
// const vasya = new Person('Vasya', 'male');
// console.log(vasya)
//
// Person.prototype.greeting = function () {
//     console.log('jkgkjghjkg')
// }
// vasya.greeting();
// class Cube {
//     constructor(volume) {
//         this.volume = volume;
//
//     }
//
//     get volume() {
//     }
//
//     set volume(val) {
//     }
//
// }
//
// const cube = new Cube(10);
// console.log(cube.volume);//get
// cube.volume = 9;//set
const formEl = document.getElementById('form');
const inputEl = document.getElementById('taskName');
const listEl = document.getElementById('list');

class Task {
    constructor(name) {
        this.name = name;
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
              ${task.name}
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
    const task = new Task(taskName);
    store.add(task)
    console.log(store.list)

})