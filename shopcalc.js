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
            const el = document.createElement('li');
            const index = this.list.indexOf(buy);

if (index === 0){
            el.innerHTML = `
            <div class="alert alert-success" role="alert">
             ${buy.name}&nbsp${buy.price}
            
    <button id="down">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
         viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
    </svg>
</button>

        
            </div>
            `}
else  if (index === this.list.length-1){el.innerHTML = `
            <div class="alert alert-success" role="alert">
             ${buy.name}&nbsp${buy.price}
             <button id="up"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
         viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
    </svg></button> 
    

    
            </div>
            `}
else {el.innerHTML = `
            <div class="alert alert-success" role="alert">
             ${buy.name}&nbsp${buy.price}
             <button id="up"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
         viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
    </svg></button> 
    <button id="down">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
         viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
    </svg>
</button>

        
            </div>
            `}
            listEl.appendChild(el)


            const upEl = el.querySelector('#up');
if (index>0){
            upEl.addEventListener('click', () => {

                    [this.list[index], this.list[index - 1]] = [this.list[index - 1], this.list[index]]

                this.render()
            })}

if (index<this.list.length-1){
            const downEl = el.querySelector('#down');
            downEl.addEventListener('click', () => {

                    [this.list[index], this.list[index + 1]] = [this.list[index + 1], this.list[index]]

                this.render()
            })}
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


