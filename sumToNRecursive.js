function sumToN(n) {
    if(n === 1) {
        return 1;
    }
    return n * sumToN(n - 1);
}

console.log(sumToN(4));