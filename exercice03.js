// Je transforme la chaine en tableau de chiffre
let serie = "10,20,30,40"
serie = serie.split(",")
let serie_nb = [];
length = serie.length;
for (let i = 0; i < length; i++)
    serie_nb.push(parseInt(serie[i]));
console.log(serie_nb);
// j'affiche la taille du tableau
console.log(serie_nb.length)
// J'affiche la somme du Tableau
sum = 0
for(var i = 0; i < serie_nb.length; i++) {
    sum = sum + parseInt(serie_nb[i]);
}
console.log(sum);
// J'affiche la Moyenne du Tableau
var moyenne = sum / serie_nb.length;
console.log(moyenne)
// J'affiche le nombre d'element superieur a la moyenne
const sup_moyenne = serie_nb.filter(num => num > moyenne);
console.log(sup_moyenne)
