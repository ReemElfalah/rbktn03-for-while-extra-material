// Exercises
// Basic Requirments
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
function sum(n) {
	let sum = 0;
	while(n > 0){
		sum += n;
		n--;
	}
	return sum;
} 
//  sum(3); // => 6 
//  sum(4); // => 10 
//  sum(5); // => 15



// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
function factorial(n) { 
	let fact = 1;
	while(n > 0){
		fact *= n;
		n--;
	}
	return fact;
} 
//  factorial(3); // => 6 
//  factorial(4); // => 24 
//  factorial(5); // => 120


// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
function repeatString(str, count) {
	let result = ''; 
	while(count > 0){
		result += str;
		count --;
	}
	return result;
} 
//  repeatString('dog', 0); // => '' 
//  repeatString('dog', 1); // => 'dog' 
//  repeatString('dog', 2); // => 'dogdog' 
//  repeatString('dog', 3); // => 'dogdogdog'
// Your task is to implement the repeatString function using a while loop.


// More Practice
// 1.Go back through any of the exercises done in the introduction to repetition and refactor them to use the while loop.
// 1.Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, e.g.

//  function sum(start, end) {
//  // TODO: your code here
//  }
//  sum(2, 7); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
//  sum(3, 5); // => 3 + 4 + 5 => 12
// What happens if start is larger than end? Modify sum to check for this case and, when found, swap the start and end arguments.
function sum(start, end){
	let result = 0;
	while(start <= end){
		result += start;
		start++;
	}
	return result;
}

// 2.Fencepost Loop: Use a while loop to build a single string with the numbers 1 through n, separated by commas. Have it return the new string.
// How can we make sure not to have a comma after the last number?
function counting(n) { 
let result = '';  
let i = 1;
	while(i < n){
		result += i + ',';
	i++;
	}
	return result + n;
} 
//  counting(5); // => '1, 2, 3, 4, 5' 
//  counting(1); // => '1' 
//  counting(3); // => '1, 2, 3'




// 3.Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5:
//  welcome 1 
//  welcome 2, meet 1                         
//  welcome 3, meet 1 and 2 
//  welcome 4, meet 1, 2 and 3 
//  welcome 5, meet 1, 2, 3 and 4
// HINT: search for which symbol that creates a line break in a string.
function meetAndGreet(n) { 
 let i = 1;           //n after welcome counter
 let result = ''; 
  while(i <= n){
  	if (i === 1)
  		result = 'welcome ' + i + '.';
  	else {
  		result += '\n' +'welcome ' + i + ', ' + 'meet ';
  		let j = 1;
  		while(j < i){
  			if (j === i - 2)
  				result += j + ' and ';
  			else if (j === i - 1)
  				result += j + '.'; 
  			else 
 					result +=  j + ', ';
 				j++;
  		}
  	}
  	i++;
  }
  return result;
}

// 4.Reverse String: Write a function that takes a string as an input and returns the reverse of that string.

function reverse(str){
	if(str.slice(0) === '')
		return '';
	return str.slice(stringLength(str) - 1) + reverse(str.slice(0,stringLength(str) - 1))
}
function reverseString(str) { 
	let rvs = '';
   while(str.slice(0) !== ''){
   	rvs += str.slice(str.length - 1);
   	str = str.slice(0,str.length - 1);
   } 
   return rvs;
} 
//  reverseString('hello'); // => 'olleh' 
//  reverseString('1#*$'); // => '$*#1'
// Do this using a while loop.



// 5.Write a javascript program to print all Prime numbers from 1 to n.
function prime(n){
	let i = 2;
	let priNums = 1;
	let pri;
	let j;
	while(i <= n){
		pri = true;
		j = 2;
		while(j <= i / 2){
			if(i % j === 0)
				pri = false;
			j++;
		}
		if(pri)
			priNums += ', ' + i;
		i++;
	}
	return 'Prime numbers from 1 to ' + n + ' are ' + priNums + '.';
}

// 6.Write a JavaScript for loop that will iterate from 0 to n. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
//  '0 is even' 
//  '1 is odd' 
//  '2 is even'
function evenOdd(n){
	let i = 0;
	let result = '';
	while(i <= n){
		result += i + ' is ';
		if(i % 2 === 0)
			result += 'even.'
		else if
			result += 'odd.'
		i++;
		result += '\n'
	}
	return result;
}



// 7.Write a javascript program to enter any number and print all factors of the number.
function factor(n){
	let i = 2;
	let factors = '1' ;
	while (i <= n){
		if(n % i === 0)
			factors += ', ' + i;
		i++;
	}
	return 'factors of ' + n + ' are ' + factors + '.';
}




// Advanced
// 1. Write a javascript function to find the sum of first and last digit of any number, without convert it to string
//  firstAndLast(456) ==> 4 + 6 = 11 
//  firstAndLast(123) ==> 1 + 3 = 4 
//  firstAndLast(197) ==> 1 + 7 = 8
function firstandlast(n){
	let last = n % 10;
	while(n >= 10)
	{
		n /= 10;
	}
	return Math.floor(n) + last;
}



// 2.Write a javascript program to draw the stars
//      * 
//     *** 
//    ***** 
//   ******* 
//  ********* 
//   ******* 
//    ***** 
//     *** 
//      *
function stars(n){ 
	let i = 1;
	let x = 0;
	let y;
	let m;
	let str = '';
	if ( n % 2 !== 0) {
		while(i <= Math.round(n / 2)){	
			m = 1;
			while(m < n + 2 - i) {
				str += ' ';
				m++;
			}
			y = 1;
			while(y < x + 2) {
				str += '*';
				y++;
			}
			x = y;
			i++;
			str += '\n ';
		}
		while(i > 2){
			m = 0;
			while(m <= n + 2 - i) {
				str += ' ';
				m++;
			}
			y = 1;
			while(y < x - 2) {
				str += '*';
				y++;
			}
			x = y;
			i--;
			str += '\n ';
	}
}
return str
}
// 3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', 
//the program keeps on prompting the user to enter a new character.
function game(){
	let x = window.prompt("Enter a character: ");
    x.toLoweCase;
	while(x !== 'r' && x !=='p' && x !== 's'){
		return game()
    }
	return 'Character is correct';
}