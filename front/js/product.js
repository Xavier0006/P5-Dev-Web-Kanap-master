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

// alert(url)

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

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element == 123 && element);
// console.log("tableau", found);



const pushProduct = (selection) => {
    // rechercher dans le tableau si la selection à le meme id et meme couleur )
    console.log("id", selection.id, "color", selection.colors)
    let findTab = addCartToLocalsorage.find(element => element.id === selection.id)
    if (findTab) {
        findTab.quantity = findTab.quantity + selection.quantity;
    } else {
        addCartToLocalsorage.push(selection);
    }
    localStorage.setItem("cart", json.stringify(addCartToLocalStorage));
};


let addCartToLocalsorage = JSON.parse(localStorage.getItem("cart"));
if (addCartToLocalsorage == null) { addCartToLocalsorage = [] };

addToCartBtn.addEventListener("click", function () {
    const selection = {
        id: id,
        colors: choseColors.value,
        quantity: choseQuantity.value,
    };
   // pushProduct(selection);
});


const addCartToLocalStorage = JSON.parse(localStorage.getItem("cart"));






let addConf = () => {
    alert("Le produit est dans le panier")
}

let update = false;

// Vérifier qu'il n'y a pas de doublon 

/* if (addCartToLocalStorage) {
  addCartToLocalStorage.forEach(function  (productFinal, key){
    if (productFinal.id == id && productFinal.colors == choseColors.value) {
        addCartToLocalStorage[key].quantity = parseInt(productFinal.quantity) + parseInt(choseQuantity.value);
        localStorage.setItem("cart", json.stringify(addCartToLocalStorage));
        update = true;
    }
  });
}; */















