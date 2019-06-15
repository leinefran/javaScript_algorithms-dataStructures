#!/usr/bin/node
// a function that calculates the sum of all numbers from 1 up to # n.

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
	total += 1;
    }
    return total;
}

console.log(addUpTo(6))
