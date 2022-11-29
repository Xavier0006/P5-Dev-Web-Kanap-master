// Création de variables dont je vais me servir

const itemImg = getElementByClassName("item__img");
const producTitle = getElementById("title");
const displayPrice = getElementById('price');
const productDescription = getElementById("description");
const displayColors = getElementByID("colors");

let urlImg = "";
let urlAlt = "";


// Faire appel à l'API + création d'un nouvel ID afin de récuperer les données

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const url = `http://localhost:3000/api/products${id}`;

getProducts = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            itemImg.innerHtml = `<img src="${data.urlImg}" alt="${data.urlAlt}">`
            urlImg = data.urlImg;
            urlAlt = data.urlAlt;
        })
}

