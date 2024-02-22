
//Q1
export const questionOne = (index) => {
  // Implement question 1 here
  //The input (index) is a number and the output is the Fibonacci value/ number of that input

  //The Fibonacci of any number less than 1 is 0...
  if(index <= 0) {
    return 0;   //return result
}
 
  //The Fibonacci value of 1 is 1...
  if(index == 1) {
    return 1;   //return result
  }

  //Now we do the Fibonacci numbers for all other values other than 0 or 1, which is the sum of the previous two Fibonacci numbers...
  else {
    //index -1 is the first previous fib number and index -2 is the second previous fib number from the given index, and we sum those up and return it...
    return questionOne(index - 1) + questionOne(index - 2);
  }

};
/*
console.log(questionOne(0));
console.log(questionOne(1));
console.log(questionOne(7));
console.log(questionOne(9));
console.log(questionOne(-10));
*/
//-------------------------------------------------------------------

//Q2
export const questionTwo = (arr) => {


  //one of the test cases (last one) does not provide an array, so we must handle that meaning we must return an empty object {} before anything else
  //if not (!) an array (no input), return {}
  if (!arr) {
    return "{}"
  }
  //since we want to return an object, we first must initialize an empty object to store our result
  //if an empty array is passed in, this will simply return an empty object
  let answer = {};
 
  //we are given an array as input, so we must loop through the array, starting at the first character and running until the end of the length of the array...
  for (let i = 0; i < arr.length; i++) {

  //assign the current element from our given array to a variable to make readability easier
    const input = arr[i];

    //only numbers greater than 1 can be prime
    if (input > 1) {
    answer[input] = true;
    }
   
    //if the input is one or less than 1, we will return false
    else {
      answer[input] = false;
    }
   
     
      //we already covered up to and including 1, so we start this inner loop at 2
      //j must be less than or equal to half of the given input
      for (let j = 2; j <= input / 2; j++) {
        //check if input is divisible by j
        if (input % j === 0) {
          //if the input is divisible by a number in that range, it is not a prime number and is set to false
          answer[input] = false;
        }
      }
  }

  //return result
  return answer;
};
/*
console.log(questionTwo([5, 3, 10])); 
// {5:true, 3: true, 10: false} 

console.log(questionTwo([5, 10, 9])); 
// {5: true, 10: false, 9: false}

console.log(questionTwo([2, 7, 9, 1013])); 
// {2: true, 7: true, 9: false, 1013: true}

console.log(questionTwo([])); 
// {}

console.log(questionTwo()); 
// {}
*/
//----------------------------------------------------------

//Q3
export const questionThree = (str) => {
  // Implement question 3 here
  //first we must implement counters to count the number of consonants, vowels, numbers, spaces, punctuation and special characters in that order from the spec sheet
  let consonants = 0;
  let vowels = 0;
  let numbers = 0;
  let spaces = 0;
  let punctuation = 0;
  let specialCharacters = 0;


  //now we create sets that hold reference to consonants and vowels
  //consonants are all letters excluding vowels (and we include y as well for this assignment)
  const con = new Set('BCDFGHJKLMNPQRSTVWXYZ')
  const vow = new Set('AEIOU')


  //use a for of loop to iterate through each character from our given input string
  //so we're saying, for every character of a given string, check these conditions, and increment the counters appropriately 
  for (const char of str) {
 
  //now we check if we have any consonants (we also need to convert to uppercase as that is how our con set is)
  //must use has since we're using a set
  if (con.has(char.toUpperCase())) {
    consonants++; //increment counter
  }


  //now we check if we have any vowels (we also need to convert to uppercase again as that is how our vow set is)
  //must use has since we're using a set
  else if (vow.has(char.toUpperCase())) {
    vowels++; //increment counter
  }


  //now we check if we have any numbers
  //we can use !isNaN() meaning it is not, not a number (NAN)... so it is a number, and we also use parseInt() to extract the number from the given string
  else if (!isNaN(parseInt(char))) {
    numbers++; //increment counter
  }


  //now we check if we have any spaces
  else if (char === ' ') {
    spaces++; //increment counter
  }


  //now we check if we have any punctuation
  else if ('!"\';:,.?'.includes(char)) {
    punctuation++; //increment counter
  }


  //now we check if we have any special characters which is just what's remaining, if anything
  else if ('@#$%^&*(){}[]<>/\\-_=+`~'.includes(char)){
    specialCharacters++; //increment counter
  }


}
 
//since we want to return an object, we first must create an object that already has the predetermined keys to store our result
  const q3 = {consonants, vowels, numbers, spaces, punctuation, specialCharacters};
  return q3; //return result
};
/*
console.log(questionThree("The quick brown fox jumps over the lazy dog.")); 
// {consonants: 24, vowels: 11, numbers: 0, spaces: 8, punctuation: 1, specialCharacters: 0}

console.log(questionThree("How now brown cow!!!"));
// {consonants: 10, vowels: 4, numbers: 0, spaces: 3, punctuation: 3, specialCharacters: 0}

console.log(questionThree("One day, the kids from the neighborhood carried my mother's groceries all the way home. You know why? It was out of respect."));
// {consonants: 61, vowels: 36, numbers: 0, spaces: 22, punctuation: 5, specialCharacters: 0}

console.log(questionThree("CS 546 is going to be fun & I'm looking forward to working with you all this semester!!" )); 
// {consonants: 40, vowels: 23, numbers: 3, spaces: 17, punctuation: 3, specialCharacters: 1}

console.log(questionThree("")); 
// {consonants: 0, vowels: 0, numbers:0, spaces: 0, punctuation: 0, specialCharacters: 0}
*/
//--------------------------------------------------------

//Q4
export const questionFour = (arr) => {
  // Implement question 4 here


  //here we want to initialize a new array that we will use to store elements that are not duplicates (just like how we initialized an empty object in questionTwo)
  //just like in questionTwo, if we pass in an empty array we get an empty object, so here, if we pass in an empty array we get an empty array as output...
  const newArray = [];


  //we will use a for of loop so as to iterate through each character (like in questionThree) 
  //so we're saying, for every character of a given array, check this condition...
  for (const char of arr) {


    //if the element is not already in our newArray (if newArray does not include (!) the character)...
    if (!newArray.includes(char)) {


      //...put it in newArray using push (if it's already in newArray, we don't put it in again. This is what removes the duplicates)
      newArray.push(char);
    }
  }
  return newArray; //return result
};
/*
console.log(questionFour([1, 1, 1, 1, 1, 1])); 
//returns and outputs: [1]

console.log(questionFour([1, '1', 1, '1', 2])); 
// returns and outputs: [1, '1', 2] 

console.log(questionFour([3, 'a', 'b', 3, '1'])); 
// returns and outputs: [3, 'a', 'b', '1']

console.log(questionFour([])); 
//returns and outputs: []

console.log(questionFour([42, 'g', '42', 1, 1, 'a']));
//returns and outputs: [42, 'g', '42', 1, 'a']
*/
export const studentInfo= { 
  firstName: "Nicholas", 
  lastName: "Chludzinski", 
  studentId: "20019527", 

}; 
/*
console.log(studentInfo);
*/
