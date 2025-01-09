
let tab = [30, 111, 212, 983, 404, 785, 36, 799, 81, 9101];
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
