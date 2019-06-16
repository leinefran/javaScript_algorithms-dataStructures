#!/usr/bin/node
// a function that prints all pairs from 0 up to n.
// bigO is O(n^2)

function printAllPair(n) {
    for (var i = 0; i < n; i++) { // O(n)
	for (var j = 0; j < n; j++) { // O(n)
	    console.log(i, j);
	}
    }
}
