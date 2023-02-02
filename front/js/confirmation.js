// Faire un localstorage clear car toutes les saisies devraient être conservés sur cette page

function payment() {
    const orderId = document.getElementById("orderId");
    orderId.innerHTML = localStorage.getItem("orderId");
    localStorage.removeItem();
};
