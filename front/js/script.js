

/*  Fetching datas from the API  */

document.addEventListener("DOMContentLoader", () => {

    getItems()

});

/* Get all Items from the API 

async function getItems() {

    try {
        const response = await fetch("http://localhost:3000/api/products");
        console.log(response.status);
        if (!response.ok) {
            throw new Error("Erreur merci de vérifier votre connexion");
        }

        const data = await response.json(); // Formater la réponse en json 

        const itemList = document.getElementById("items");

        for (const item of data) {
            console.log(item);
            addNewItem(item, itemList);
        }

    }
    catch (e) {
        console.error(e);
    }


}

/* Add nouveau item au DOM */

/* 
{object} item 
 {element} Parent

*/
/*
const addNewItem = (item, Parent) => {

};

*/

let url = "http://localhost:3000/api/products";

fetch(url).then(response => response.json().then(data => console.log(data))
);