function makeFibonacciFunction() {
    let nOne = 1;
    let nTwo = 0;
    function currentResult() {
        let nCurrent;
        for (let i = 0; i < 1; i++) {
            nCurrent = nOne + nTwo;
            nOne = nTwo;
            nTwo = nCurrent;
        }
        return nCurrent;
    }
    return currentResult;
}

const fibonacci = makeFibonacciFunction();

console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci());



