let testCases=["Valid credentials","Invalid password","Empty username", "Empty password", "Remember me checkbox"];

console.log(`
Test Suite: Login Module

Test Cases:`);

console.log(testCases);

console.log(`
Total number of test cases : ${testCases.length}
The first test case is : ${testCases[0]}
The lasttest case is : ${testCases[testCases.length-1]}
`);


let testResults=[];
// testResults.push("Passed");
// console.log(testResults);

let resultToAdd=["Passed","Passed","FAILED","PASSED","SKIPPED"]

for(i=0; i<resultToAdd.length; i++){
    testResults.push(resultToAdd[i]);
    console.log(`Test ${i+1} completed: ${resultToAdd[i]}`)
}

console.log(`Total tests run ${testResults.length}`);
if(testResults.indexOf("FAILED")!== -1){
      console.log("❌ A FAILED test exists in the results.");
} else {
    console.log("✅ No FAILED tests found.");
}

console.log("=====================================================================")


let testEmails=["user1@test.com","user2@test.com","user3@test.com"];

console.log(`Test Email Management

Initial emails:
${testEmails}
${testEmails.length}
`);

testEmails.push("user4@test.com");
console.log(`After adding user4@test.com to end:
${testEmails}
    `);
//    - Add "admin@test.com" to the BEGINNING
testEmails.unshift("admin@test.com");
 console.log(`${testEmails}`);

testEmails.pop();
console.log(`${testEmails}`);

testEmails.shift();
console.log(`${testEmails}`);

let emailToRemove="user2@test.com"
let index = testEmails.indexOf(emailToRemove);
console.log(index);
if (index!== -1){
    testEmails.splice(index, 1);
    console.log(`email id is removed from list is : ${emailToRemove}`);
}
else {
    console.log(`Email id ${emailToRemove} not found in list`);
}
console.log(testEmails);
console.log(testEmails.length);


// ## Exercise 4: Test Score Analysis

// **Scenario:** Store and analyze test automation scores.

// **Requirements:**
// 1. Create an array called `testScores` with these values:
//    - 85, 92, 78, 95, 88, 73, 90

// 2. Calculate and print:
//    - Total number of scores
//    - First score
//    - Last score
//    - Check if score 95 exists in the array

let testScores = [85, 92, 78, 95, 88, 73, 90];

console.log(` Total Score is : ${testScores.length}`);
console.log(`First Score is : ${testScores[0]}`)
console.log(`Last Score is : ${testScores[testScores.length-1]}`)

let score=915;
if(testScores.indexOf(score)!== -1){
console.log(`Score ${score} exists`)
}
else {
    console.log(`Score ${score} doesn't exists`)
}