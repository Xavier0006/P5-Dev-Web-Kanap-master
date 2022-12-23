// Création de variables dont je vais me servir

const itemImg = document.getElementsByClassName("item__img")[0];
const productTitle = document.getElementById("title");
const displayPrice = document.getElementById('price');
const productDescription = document.getElementById("description");
const choseQuantity = document.getElementById("quantity");
const choseColors = document.getElementById("colors");

let imageUrl = "";
let altTxt = "";

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

const selection = { 
    id: id,
    colors: choseColors.value,
    quantity: choseQuantity.value,   
};

/* const cart = localStorage.getItem("cart"); */
const addCartToLocalStorage = JSON.parse(localStorage.getItem("cart"));

const pushProduct = () => {
    addCartToLocalStorage.push(selection);
    localStorage.setItem("cart", JSON.stringify(addCartToLocalStorage));
    console.log(pushProduct);
};

// Faire en sorte de voir que le produit est bien dans le localstorage, aucune info actuellement


// créer une alerte pour confirmer un ajout au panier 

// Vérifier qu'il n'y a pas de doublon 

/* for each addCartToLocalStorage f */








