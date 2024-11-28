function getFactorial(number = 0) {
    if (number < 0) return undefined;
    if (number === 0) return 1;

    let factorial = 1;
    for (let i = number; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}

const num = 6;

console.log(getFactorial(num));
