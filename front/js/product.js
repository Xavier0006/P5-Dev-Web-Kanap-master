// Création de variables dont je vais me servir

const itemImg = document.getElementsByClassName("item__img")[0];
const productTitle = document.getElementById("title");
const displayPrice = document.getElementById('price');
const productDescription = document.getElementById("description");
const choseQuantity = document.getElementById("quantity");
const choseColors = document.getElementById("colors");



// Faire appel à l'API + création d'un nouvel ID afin de récuperer les données

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const url = `http://localhost:3000/api/products/${id}`;

alert(url)

// Modifier les variables avec une promesse 

fetch(url)
    .then(response => response.json())
    .then(data => {
        itemImg.innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`
        productTitle.innerHTML = `<h1>${data.name}</h1>`;
        displayPrice.innerText = `${data.price}`;
        productDescription.innerText = `${data.description}`;
        console.log(data);

        // couleurs à configurer 

        for (number in data.colors) {
            colors.options[colors.options.length] = new Option(
                data.colors[number],
                data.colors[number]
            );
            console.log(number);
        }
    });

// configurer un eventlistener quand l'U clique sur ajouter au panier 

const addToCartBtn = document.getElementById("addToCart");

addToCartBtn.addEventListener("click", event => {
    addToCartBtn.innerHTML = `Panier ${event.detail}`
});



  //  onclick = (event) => { };








