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
  console.log(reversed);
    

//....................Problem-1 End........................//

