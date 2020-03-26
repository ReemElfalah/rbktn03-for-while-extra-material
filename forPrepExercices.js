// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that computes the sum of the numbers in an array.
function sumW(array) {
	let result = 0;
	let i = 0;
	while (i < array.length) {
		result += array[i]
		i++;
	}
	return result;
}
//----------------------------------------
function sumF(array) {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result += array[i]
	}
	return result;
}
//----------------------------------------------------------------------
// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.
function maximumW(array) {
	let max = array[0];
	let i = 1;
	while (i < array.length) {
		if (array[i] > max)
			max = array[i];
		i++;
	}
	return max;
}
//----------------------------------------
function maximumF(array) {
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max)
			max = array[i];
	}
	return max;
}
//----------------------------------------------------------------------
// 3.Try the following at a console:

//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.
function longestWordW(str) {
	let i = 1;
	str = str.split(' ');
	max = str[0];
	while (i < str.length) {
		if (str[i].length > max.length)
			max = str[i];
		i++;
	}
	str = str.join(' ');
	return max;
}
//----------------------------------------
function longestWordF(str) {
	str = str.split(' ');
	max = str[0];
	for (let i = 1;i < str.length; i++) {
		if (str[i].length > max.length)
			max = str[i];
	}
	str = str.join(' ');
	return max;
}
//----------------------------------------------------------------------
// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
function removeW(array, element) {
	let i = 0;
	let arr = [];
	while (i < array.length) {
		if (array[i] !== element)
			arr.push(array[i]);
		i++;
	}
	return arr
}
//----------------------------------------
function removeF(array, element) {
	let arr = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== element)
			arr.push(array[i]);
	}
	return arr
}
//----------------------------------------------------------------------
// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.
function evenArrW(array) {
	let i = 0;
	let arr = [];
	while (i < array.length) {
		if (array[i] % 2 === 0)
			arr.push(array[i]);
		i++;
	}
	return arr;
}
//----------------------------------------
function evenArrF(array){
	let arr = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0)
			arr.push(array[i]);
	}
	return arr;
}
//------------------------------------------------------------
// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.
function averageW(array){
	let i = 0;
	let sum = 0;
	while (i < array.length) {
		sum += array[i];
		i++;
	}
	return sum / array.length;
}
//----------------------------------------
function averageF(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum / array.length;
}
//----------------------------------------------------------------------
// 2. Write a function called min that finds the smallest number in an array of numbers.
function minimumW(array) {
	let min = array[0];
	let i = 1;
	while (i < array.length) {
		if (array[i] < min)
			min = array[i];
		i++;
	}
	return min;
}
//----------------------------------------
function minimumF(array) {
	let min = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < min)
			min = array[i];
	}
	return min;
}
//----------------------------------------------------------------------
// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.
function shortestWordW(str) {
	let i = 1;
	str = str.split(' ');
	min = str[0];
	while (i < str.length) {
		if (str[i].length < min.length)
			min = str[i];
		i++;
	}
	str = str.join(' ');
	return min;
}
//----------------------------------------
function shortestWordF(str) {
	str = str.split(' ');
	min = str[0];
	for (let i = 1;i < str.length; i++) {
		if (str[i].length < min.length)
			min = str[i];
	}
	str = str.join(' ');
	return min;
}
//----------------------------------------------------------------------
// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that 
//the character occurs in the string.
function countCharW(string, char) {
	string = string.split('');
	let i = 0;
	let count = 0;
	while (i < string.length) {
		if (string[i] === char)
			count ++;
		i++;
	}
	return count;
}
//----------------------------------------
function countCharF(string, char) {
	string = string.split('');
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === char)
			count ++;
	}
	return count;
}
//----------------------------------------------------------------------
// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.
function evenLengthWordsW(array) {
	let i = 0;
	let arr = [];
	while (i < array.length) {
		if(array[i].length % 2 === 0)
			arr.push(array[i]);
		i++;
	}
	return arr;
}
//----------------------------------------
function evenLengthWordsF(array) {
	let arr = [];
	for(let i = 0; i < array.length; i++) {
		if(array[i].length % 2 === 0)
			arr.push(array[i]);
	}
	return arr;
}
//----------------------------------------------------------------------
// Advanced
// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed
function reverseW(string) {
	let i = 0;
	let array = [];
	let string = string.split('');
	while (i < string.length) {
		array.unshift(string[i]);
	i++;
	}
	string = string.join('');
	return array.join('');
}
//----------------------------------------
function reverseF(string) {
	let array = [];
	let string = string.split('');
	for (let i = 0; i < string.length; i++) {
		array.unshift(string[i]);
	}
	string = string.join('');
	return array.join('');
}
//----------------------------------------------------------------------
// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, an array, and something else -- 
//the second argument will be what is used to determine which elements to keep.
// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.
function keepW(array, element) {
	array.push(element)
	return array
}

function evenLengthWordsKeep(array) {
	let arr = [];
	for(let i = 0; i < array.length; i++) {
		if(array[i].length % 2 === 0)
			keepW(arr, array[i]);
	}
	return arr;
}

