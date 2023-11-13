'use strict';
// prendo dal dom l'elemento <ul>
const lista = document.querySelector('.list');
console.log(lista);
// creo una lista già definita per la spesa 
const spesa = ['pasta', 'pane', 'latte', 'uova', 'pesce', 'banane', 'peperoni'];
let i = 0; 
// creo un ciclo while per scorrere la lista fino a che la variabile i non è === alla lunghezza dell'array
while(i < spesa.length){
    // stampo in maiuscolo gli elementi della spesa
    console.log(spesa[i].toUpperCase());
    // creo elementi lista <li>
    const prodotto = document.createElement('li');
    // stampo elementi spesa
    prodotto.textContent = spesa[i];
    // aggiungo la classe prodotto a lista 
    lista.append(prodotto);
    // aggiungo ad i 1
    i++;
}
