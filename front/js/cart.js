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

  for (i = 0, i < addCartToLocalStorage.length; i++;) {
    product.push(addCartToLocalStorage[i]);
    // push addCartToLocalsorage avec un array i ? dans le for boucler sur chaq prod dans le panier avec le html a afficher qt + prix total afficher les articles, t total et valeur panier L27

    // boucle pour injecter le code en fonction des produits dans le localstorage
    itemsShown = itemsShown + `
    <article class="cart__item" data-id="${addCartToLocalStorage[i]}" data-color="${addCartToLocalStorage.color}">
    <div class="cart__item__img">
      <img src="${addCartToLocalStorage[i].image}" alt="${addCartToLocalStorage[i].alt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${addCartToLocalStorage[i].name}</h2>
        <p>${addCartToLocalStorage[i].color}</p>
        <p>${addCartToLocalStorage[i].price}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${addCartToLocalStorage[i].quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>
    `;

  }

  if (i === addCartToLocalStorage.length) {
    const itemShown = document.getElementById("cart__items");
    itemCart.innerHTML = itemShown;
  }

}



// Modifier la quantité

function modifyquantity() {
  let qtTy = document.querySelectorAll(".itemQuantity");
  for (let k = 0; k < qtTy.length; k++) {
    qtTy[k].addEventListener("change", (event) => {
      event.preventDefault();

      let newQtTy = qtTy[k].value;
      const newStock = {
        id: addCartToLocalStorage[k].id,
        colors: addCartToLocalStorage[k].image,
        quantity: addCartToLocalStorage[k].newQtTy,
      };

      addCartToLocalStorage[k] = newQtTy;
      localStorage.setItem("cart", JSON.stringify(addCartToLocalStorage));

      alert("Panier à jour");

    })
  }
}
modifyquantity();

// Supprimer

function deleteItem() {
  const deleteItems = document.querySelectorAll(".deleteItems");

  for (let l = 0; l < deleteItems.length; l++) {
    deleteItems[l].addEventListener("click", (event) => {
      event.preventDefault();

      let deleteID = addCartToLocalStorage[l].id;
      let deleteColor = addCartToLocalStorage[l].color;

      // créer nouveau tableau sans le modifier

      addCartToLocalStorage = addCartToLocalStorage.filter(element => element.id !== deleteId || element.color !== deleteColor);

      // new data dans le localstorage 

      localStorage.setItem("cart", json.stringify(addCartToLocalStorage));

      // creer une alert 

      alert(" Le panier est vide")

    });
  }

}
deleteItem();


function totalItems() {
  let totalItems = 0;
  for (addCartToLocalStorage in 1 ) {
    // parseint devrait renvoyer un nouveau entier... 
const newQuant = parseInt(addCartToLocalStorage[1].quantity, 10);

//retourner valeur
totalItems += newQuant;
  }


// cela devrait attribuer la valeur et l'afficher correctement
const totalQuantity = document.getElementById("totalQuantity");
totalQuantity.textContent = totalItems;


}
totalItems();

// Afficher et calculer le total des articles dans le panier final

function prixTotal() {
  const calculer = [];
  for (p = 0; p < addCartToLocalStorage; p++) {
    const montantTotal = addCartToLocalStorage[p].price * addCartToLocalStorage[p].quantity;
    calculer.push(montantTotal) 
  }
}
prixTotal();

// !!!! ne pas stocker le prix des articles en local car non sécurisés !!!!

// A faire - Infos user à finir et c'est good 