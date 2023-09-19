// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
array.flat(2);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
console.log(greeting.flatMap((x) => x.join(" ")));

// Greeting is an array containing three sub-arrays.
//When you use the flatMap method with the arrow function (x => x.join(' ')), the variable x represents individual elements within the sub-arrays, not the sub-arrays themselves.
//The flatMap method iterates through each element of the outer array (greeting).
//For each element, which is a sub-array in this case, the arrow function (x => x.join(' ')) is applied.
//Inside the arrow function, x represents individual elements within each sub-array as it iterates through them one by one.
//The .join(' ') operation is performed on each of these individual elements (x), not on the sub-arrays themselves.
//The result of x.join(' ') is a string formed by joining the elements of each sub-array with a space separator.
//The flatMap method collects these strings produced by x.join(' ') for each individual element within the sub-arrays and flattens them into a single flat array.
//So, to clarify, x refers to the elements within the sub-arrays, not the sub-arrays themselves.

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
const joinedString = greeting.flat().join(" ");
console.log(joinedString);

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(25);

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";
console.log(userEmail3.trimStart().trimEnd());
//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };
Object.entries(users);
//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
