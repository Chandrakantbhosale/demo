// A closure is a function that remembers
// variables from its lexical scope, even when called outside that scope.

function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}

const counter = outer();
counter();
counter();
