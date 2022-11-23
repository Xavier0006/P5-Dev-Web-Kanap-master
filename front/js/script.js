/* Appel à l'API */


let url = "http://localhost:3000/api/products";

// Fetch récupère les données depuis l'URL de l'API

fetch(url)
    .then(response => response.json())

    // La premiere promesse then va récuperer la réponse et la transforme en json 
    // Ensuite deuxieme promesse qui va afficher les données contenue dans ma f
    .then(data => {
        voirProduct(data);
        console.log(data);
    })

    // Ajout d'un message en cas d'erreur

    .catch(e => {
        alert("Fonctionnement impossible")

    });

/* Afficher les produits */

function voirProduct(data) {

    // correspond à ma variable product then data

    for (product of data) {
        const item = document.getElementById("items");
        // retrouver l'élément item

        item.innerHTML +=`
            <a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a>`;

        // les caracteres `` permettent d'insérer du code HTML le += permet de rajouter autant de contenu que possible
        // Les images ne s'affichent pas sur l'index, je dois régler ce pb
    }
};
