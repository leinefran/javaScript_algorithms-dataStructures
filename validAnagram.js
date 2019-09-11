#!/usr/bin/node
// a function that varifies if 2 strings are an anagram;

function validAnagram (str1, str2) {

    // return true if both strings are empty
    if (!str1 && !str2){
	return true;
    }

    // return false if str1.length !== str2.length;
    if (str1.length !== str2.length) {
	return false;
    }

    // transform both strings into array
    let first_array = str1.split("");
    let second_array = str2.split("");

    // sort arrays alphabetically, and check if both are equal
    first_array = first_array.sort();
    second_array = second_array.sort();

    console.log(first_array);
    console.log(second_array);

    if (first_array == second_array) {
	return true;
    } else {
	return false;
    }
}
console.log(validAnagram('', '')); //true
console.log(validAnagram('aaz', 'zza')); //false
console.log(validAnagram('anagram', 'nagaram')); //true
console.log(validAnagram('rat', 'car')); //false
console.log(validAnagram('awesome', 'awesom')); //false
console.log(validAnagram('amanapalgamate', 'palgamatenadama')); //false
console.log(validAnagram('qwerty', 'twreyq')); //true
