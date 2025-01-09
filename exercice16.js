votes = ["Pomme", "Banane", "Orange", "Pomme", "Raisin", "Banane", "Banane"]
const vote = votes.reduce((compteur, fruit) => {
    compteur[fruit] = (compteur[fruit] || 0) + 1;
    return compteur;
}, {})

console.log(vote)
let Gagnant = Object.keys(vote).reduce((gagnant, fruit) => 
    vote[fruit] > vote[gagnant] ? fruit : gagnant
);
console.log(Gagnant)