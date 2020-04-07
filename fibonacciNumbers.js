function getFibonacciNumberN(n) {
    let fibNums = [];
    for(let i = 0; i < n; i++) {
        if(i > 1) {
            fibNums.push(fibNums[i - 1] + fibNums[i - 2]);
        } else {
            fibNums.push(1);
        }
    }
    return fibNums[n-1];
}

console.log(getFibonacciNumberN(7));
