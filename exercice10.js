tab = []
for (let i = 0; i < 50; i++) {
    tab.push(Math.floor(Math.random() * (100))+1)
    
}
console.log(tab)
sum = 0
for(var i = 0; i < tab.length; i++) {
    sum = sum + parseInt(tab[i]);
}
var moyenne = sum / tab.length;
console.log("Moyenne = " + moyenne);

let min = Infinity;
let max = -Infinity;

for (let i = 0; i < tab.length; i++) {
    if (tab[i] < min) { 
        min = tab[i];
    }
    if (tab[i] > max) {
        max = tab[i];
    }
}  
    console.log("Min:", min);
    console.log("Max:", max); 
compteur_paire = 0
for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 == 0) {
        compteur_paire += 1
}
}
console.log("Nombre de nombres pairs:", compteur_paire);