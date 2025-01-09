let panier = [
    { nom: "Jus", prix: 2, quantite: 5 },
    { nom: "Croissant", prix: 1, quantite: 10 },
    { nom: "Baguette", prix: 1.5, quantite: 4 }
]
let prixTotal = panier.reduce((total, article) => total + article.prix * article.quantite, 0)
let nouvelArticle = { nom: "Coca", prix: 0.8, quantite: 2 };
panier.push(nouvelArticle)

let nomArticleASupprimer = "Banane";
panier = panier.filter(article => article.nom !== nomArticleASupprimer);