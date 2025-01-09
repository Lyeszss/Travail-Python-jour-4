function calculer(nb1,operation,nb2) {
    if (operation === '+') {
        return `${nb1} + ${nb2} = ${nb1 + nb2}`
        }
    else if (operation === '-') {
        return `${nb1} - ${nb2} = ${nb1 - nb2}`
            }
    else if (operation === '*') {
        return `${nb1} * ${nb2} = ${nb1 * nb2}`
        }
    else if (operation === '/') {
        if (nb2 !== 0) {
            return `${nb1} / ${nb2} = ${nb1 / nb2}`
            }
        else {
            return "Division par 0 Impossible"
        }
        }
}

console.log(calculer(1,'/',10))
console.log(calculer(1, '+', 2))
console.log(calculer(5, '-', 3))
console.log(calculer(10, '*', 2))
console.log(calculer(10, '/', 2))
console.log(calculer(10, '/', 0))