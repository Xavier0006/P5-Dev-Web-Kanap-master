/* Appel à l'API */


let url = "http://localhost:3000/api/products";

// Fetch récupère les données depuis l'URL de l'API

fetch(url)
    .then(response => response.json())

    // La premiere promesse then va récuperer la réponse et la transforme en json 
    // Ensuite deuxieme promesse qui va afficher les données contenue dans ma f
    .then(data => {
        addProducts(data);
        console.log(data);
    })

    // Ajout d'un message en cas d'erreur

    .catch(e => {
        console.error(e);
    });

/* Afficher les produits */


function addProducts(products) {

    // correspond à ma variable product then data

    const itemList = document.getElementById("items");
    // retrouver l'élément item

    for (product of products) {
        itemList.innerHTML +=`
            <a href="./product.html?id=${product._id}">
            <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
          </a>`;

        // les caracteres `` permettent d'insérer du code HTML le += permet de rajouter autant de contenu que possible
      
    }
};
