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

    let charCounterStr1 = {};
    let charCounterStr2 = {};

    // iterate through each char of the str1;
    for (let val of str1) {
	charCounterStr1[val] = (charCounterStr1[val] || 0) + 1;
    }

    // same for the str2;
    for (let val of str2) {
	charCounterStr2[val] = (charCounterStr2[val] || 0) + 1;
  }

    console.log(charCounterStr1);
    console.log(charCounterStr2);
    console.log('\n');

    if (charCounterStr1 === charCounterStr2) {
	return true;
    } else {
	return false;
    }
}
console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanapalgamate', 'palgamatenadama'));
console.log(validAnagram('qwerty', 'qeywrt'));
