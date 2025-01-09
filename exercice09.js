tab = [2192,42,4,10394,24,9]
const n = tab.length;
let swapped;

do {
  swapped = false;
  for (let i = 0; i < n - 1; i++) {
    if (tab[i] > tab[i + 1]) {
      [tab[i], tab[i + 1]] = [tab[i + 1], tab[i]];
      swapped = true;
    }
  }
} while (swapped);
console.log(tab)
