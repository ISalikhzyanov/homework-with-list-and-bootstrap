const priceEl = document.getElementById('price')
const formEl = document.getElementById('form');
const inputEl = document.getElementById('shopName');
const listEl = document.getElementById('list');
const numberEl = document.getElementById('number');
const sumEl = document.getElementById('sum');
const maxEl = document.getElementById('max')
const tovEl = document.getElementById('tov')

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
        this.meaning()
    }

    meaning() {
        for (const buy of this.list)
            numberEl.textContent = 'Количество покупок: ' + this.list.length;
        let sum = 0;
        for (const buy of this.list)
            sum = buy.price + sum;
        sumEl.textContent = 'Сумма покупок: ' + sum;
        let max = 0;
        let tov = '';
        for (const buy of this.list)
            if (max < buy.price) {
                max = buy.price;
                tov = buy.name;
            }

        maxEl.textContent = 'Максимальная стоимость товара: ' + max;
        tovEl.textContent = 'Товар максимальной стоимости: ' + tov;

    }

    render() {
        listEl.innerHTML = '';
        for (const buy of this.list) {
            const el = document.createElement('li')

            //
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
})


