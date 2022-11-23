/* Appel à l'API */


let url = "http://localhost:3000/api/products";

// Fetch récupère les données depuis l'URL de l'API

fetch(url)
    .then(response => response.json())
    
// La premiere promesse then va récuperer la réponse et la transforme en json 
// Ensuite deuxieme promesse qui va afficher les données conetenue dans ma f
    .then(data =>  { voirProduit(data);

    })

    // Ajout d'un message en cas d'erreur

    .catch(e => { alert ("Fonctionnement impossible")

    } );
