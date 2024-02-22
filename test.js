import * as lab1 from './lab1.mjs';

//TODO: Write and call each function in lab1.js 5 times each, passing in different input

//Q1
console.log(lab1.questionOne(0));
console.log(lab1.questionOne(1));
console.log(lab1.questionOne(7));
console.log(lab1.questionOne(9));
console.log(lab1.questionOne(-10));

//-----------------------------------------------

//Q2
console.log(lab1.questionTwo([5, 3, 10])); 
// {5:true, 3: true, 10: false} 

console.log(lab1.questionTwo([5, 10, 9])); 
// {5: true, 10: false, 9: false}

console.log(lab1.questionTwo([2, 7, 9, 1013])); 
// {2: true, 7: true, 9: false, 1013: true}

console.log(lab1.questionTwo([])); 
// {}

console.log(lab1.questionTwo()); 
// {}

//-----------------------------------------------

//Q3
console.log(lab1.questionThree("The quick brown fox jumps over the lazy dog.")); 
// {consonants: 24, vowels: 11, numbers: 0, spaces: 8, punctuation: 1, specialCharacters: 0}

console.log(lab1.questionThree("How now brown cow!!!"));
// {consonants: 10, vowels: 4, numbers: 0, spaces: 3, punctuation: 3, specialCharacters: 0}

console.log(lab1.questionThree("One day, the kids from the neighborhood carried my mother's groceries all the way home. You know why? It was out of respect."));
// {consonants: 61, vowels: 36, numbers: 0, spaces: 22, punctuation: 5, specialCharacters: 0}

console.log(lab1.questionThree("CS 546 is going to be fun & I'm looking forward to working with you all this semester!!" )); 
// {consonants: 40, vowels: 23, numbers: 3, spaces: 17, punctuation: 3, specialCharacters: 1}

console.log(lab1.questionThree("")); 
// {consonants: 0, vowels: 0, numbers:0, spaces: 0, punctuation: 0, specialCharacters: 0}

//-----------------------------------------------

//Q4
console.log(lab1.questionFour([1, 1, 1, 1, 1, 1])); 
//returns and outputs: [1]

console.log(lab1.questionFour([1, '1', 1, '1', 2])); 
// returns and outputs: [1, '1', 2] 

console.log(lab1.questionFour([3, 'a', 'b', 3, '1'])); 
// returns and outputs: [3, 'a', 'b', '1']

console.log(lab1.questionFour([])); 
//returns and outputs: []

console.log(lab1.questionFour([42, 'g', '42', 1, 1, 'a']));
//returns and outputs: [42, 'g', '42', 1, 'a']

//----------------------------------------------

//console.log(lab1.studentInfo);
