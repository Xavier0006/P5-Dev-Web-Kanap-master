// Récupérer les produits dans le local storage 

const produits = [];
const addCartToLocalStorage = JSON.parse(localStorage.getItem("cart"));

// Les afficher

let cartAndFormContainer = document.getElementById("cartAndFormContainer");

// si panier vide afficher message 

if (addCartToLocalStorage === null || addCartToLocalStorage == 0) {
    document.querySelector("#cart__items").innerHTML = `<div class="cartisempy">
    <p>Votre panier est vide !!</p>
    </div>`;
}


else {
    let itemsShown = [];

    for (i=0, i< addCartToLocalStorage.length;) {
// push addCartToLocalsorage avec un array i ? dans le for boucler sur chaq prod dans le panier avec le html a afficher qt + prix total afficher les articles, t total et valeur panier L27
    }
// boucle pour injecter le code en fonction des produits dans le localstorage
    itemsShown = itemsShown +`
    <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
    <div class="cart__item__img">
      <img src="../images/product01.jpg" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>Nom du produit</h2>
        <p>Vert</p>
        <p>42,00 €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>
    `;

}



// Modifier la quantité



// Actualiser

// Supprimer

// Afficher et calculer le total des articles dans le panier final

// !!!! ne pas stocker le prix des articles en local car non sécurisés !!!!