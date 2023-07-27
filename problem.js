//Problem-1:Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

//Input: "hello world"
//Output: "dlrow olleh"

function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString.charAt(i);
    }
    return reversedString;
}
const inputString = "Hello, world!";
const reversed = reverseString(inputString);
//   console.log(reversed);


//Problem-2:Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

//Input: [2, -5, 10, -3, 7]
//Output: 19

function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const numbers = [2, -5, 10, -3, 7];
const result = sumPositiveNumbers(numbers);
// console.log(result);


//Problem-3:Write a JavaScript program to find the most frequent element in an array and return it. 

//Input: [3, 5, 2, 5, 3, 3, 1, 4, 5]
//Output:3

function findMostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const elementCount = {};

    for (const element of arr) {
        elementCount[element] = (elementCount[element] || 0) + 1;
    }

    let mostFrequentElement = arr[0];
    let maxFrequency = 1;

    for (const element in elementCount) {
        if (elementCount[element] > maxFrequency) {
            mostFrequentElement = element;
            maxFrequency = elementCount[element];
        }
    }

    return mostFrequentElement;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(array);
//   console.log("The most frequent element is:", mostFrequent);


//Problem-4: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        throw new Error('Input should be an array with at least two elements.');
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        throw new Error('There is no second smallest element in the array.');
    }

    return secondSmallest;
}


//Problem-5:Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

//input:MMXXIII;
//output:2023;

function romanToInt(romanNumeral) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentSymbol = romanNumeral[i];
        const currentValue = romanMap[currentSymbol];
        const nextValue = romanMap[romanNumeral[i + 1]];

        if (nextValue > currentValue) {
            result += nextValue - currentValue;
            i++;
        } else {
            result += currentValue;
        }
    }

    return result;
}

// console.log(romanToInt("MMXXIII")); 

//Problem-6:Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=[]{}|;:,.<>?";
  
    const allChars =
      uppercaseChars + lowercaseChars + numberChars + specialChars;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  const passwordLength = 8;
  const randomPassword = generateRandomPassword(passwordLength);
//   console.log(randomPassword);

//Problem-7:Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


function calculate(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Error: Division by zero";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator";
    }
  }


//   console.log(calculate(5, '+', 3)); // Output: 8
//   console.log(calculate(10, '-', 4)); // Output: 6
//   console.log(calculate(3, '*', 6)); // Output: 18
//   console.log(calculate(8, '/', 2)); // Output: 4

 

 

  

