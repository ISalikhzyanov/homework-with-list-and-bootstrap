const priceEl = document.getElementById('price')
const formEl = document.getElementById('form');
const inputEl = document.getElementById('shopName');
const listEl = document.getElementById('list');
const numberEl = document.getElementById('number');
const sumEl = document.getElementById('sum');
let max = 0;
let tov = '';
let sum = 0;

class Buy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }


}

class BuyList {
    constructor() {
        this.list = []
    }

    add(buy) {
        this.list.push(buy);
        this.render()
    }

    render() {
        listEl.innerHTML = '';
        for (const buy of this.list) {
            const el = document.createElement('li')
            el.innerHTML = `
            <div class="alert alert-success" role="alert">
              ${buy.name}${'&nbsp'}${buy.price}
            </div>
            `
            listEl.appendChild(el)
        }


    }
}

const store = new BuyList()

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const buyName = inputEl.value;
    const price = Number(priceEl.value);
    const buy = new Buy(buyName, Number(price));
    store.add(buy)
    console.log(store.list)
    for (const buy of store.list)
        if (buy.price > max) {
            (max = buy.price) && (tov = buy.name)
        }
    console.log(max, tov)
    const number = store.list.length
    console.log(number)
    for (const buy of store.list)
        sum = buy.price + sum
  console.log(sum)
})
