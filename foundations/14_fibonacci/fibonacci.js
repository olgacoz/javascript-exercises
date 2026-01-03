const fibonacci = function(nth) {
    const num = +nth;
    
    if (num < 0 || !Number.isInteger(num)) {
        return 'OOPS';
    }
    switch (num) {
        case 0: return 0;
        case 1: return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Do not edit below this line
module.exports = fibonacci;
