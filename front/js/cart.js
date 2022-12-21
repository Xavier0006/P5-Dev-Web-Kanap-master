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

// Si panier non vide afficher mettre un "else{}"




// Modifier



// Actualiser

// Supprimer

// Afficher et calculer le total des articles dans le panier final

// !!!! ne pas stocker le prix des articles en local car non sécurisés !!!!