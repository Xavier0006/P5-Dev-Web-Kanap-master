/*  Fetching datas from the API  */

document.addEventListener("DOMContentLoader", () => {

    getItems()

});

/* Get all Items from the API */

async function getItems() {

    try {
        const response = await fetch("http://localhost:3000/api/products");
        console.log(response.status);
        if (!response.ok) {
            throw new Error("Error HTTP");
        }

        const data = await response.json(); // Formater la réponse en json 

        const itemList = document.getElementById("items");

        for (const item of data) {
            addNewItem(item, itemList);
        }

    }
    catch (e) {
        console.error(e);
    }


}



