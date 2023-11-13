'use strict';

const lista = document.querySelector('.list');
console.log(lista);

const spesa = ['pasta', 'pane', 'latte', 'uova', 'pesce', 'banane', 'peperoni'];
let i = 0; 

while(i < spesa.length){
    console.log(spesa[i].toUpperCase());
    const prodotto = document.createElement('li');
    prodotto.classList.add('prodotto');
    prodotto.textContent = spesa[i];
    lista.append(prodotto);
    i++;
}
