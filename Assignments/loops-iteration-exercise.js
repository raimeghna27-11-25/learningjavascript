console.log(`Login Module Test Suite
━━━━━━━━━━━━━━━━━━━━━━━━━`);

let testCases =["Login with valid credentials",
    "Login with invalid password",
    "Login with empty username",
    "Logout functionality",
    "Remember me checkbox"];
for(i=0; i<testCases.length; i++){
    console.log(`${i+1}. ${testCases[i]}`)
}
    console.log(`Total test cases: ${testCases.length}`);
    console.log();

//  ## Exercise 1.5: Refactor with for...of Loop

// **Scenario:** Learn the modern, cleaner way to iterate arrays when you don't need the index.

// **Requirements:**
// 1. Take the same `testCases` array from Exercise 1
// 2. Rewrite the loop using `for...of` instead of traditional for loop
// 3. Notice how the code becomes cleaner and more readable

console.log(`Login Module Test Suite
━━━━━━━━━━━━━━━━━━━━━━━━━`);
 let j=1;
for(let testCase of testCases){
    console.log(`${j++}. ${testCase}`)
}
  console.log(`Total test cases: ${testCases.length}`);
    console.log();

// ## Exercise 2: Count Test Results

// **Scenario:** Analyze test execution results and generate statistics.

// **Requirements:**
// 1. Create an array called `testResults` with these values:
//    - "PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"

// 2. Use a for loop to count:
//    - Total tests
//    - PASSED tests
//    - FAILED tests
//    - SKIPPED tests

// 3. Calculate and print:
//    - Pass rate (percentage)
//    - Fail rate (percentage)

let testResult=["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"];
let testTotal= testResult.length;
let testPassed=0;
let testFailed=0;
let testSkipped=0;

for(let result of testResult){    
    if(result==="PASSED"){
        testPassed++;        
    }
    if(result==="FAILED"){
        testFailed++;        
    }
    if(result==="SKIPPED"){
        testSkipped++;        
    }

}
console.log(`Total Test count is : ${testTotal}`);
console.log(`Passed Test count is : ${testPassed}`);
console.log(`Failed Test count is : ${testFailed}`);
console.log(`Skipped Test count is : ${testSkipped}`);
console.log(`Pass Rate is ${(testPassed/testTotal)*100}%`);
console.log(`Fail Rate is ${(testFailed/testTotal)*100}%`);

// ## Exercise 3: Calculate Test Scores

// **Scenario:** Calculate statistics for test automation scores.

// **Requirements:**
// 1. Create an array called `testScores` with these values:
//    - 85, 92, 78, 95, 88, 73, 90, 87

// 2. Use a for loop to calculate:
//    - Total of all scores
//    - Average score
//    - Highest score (you'll need to track this as you loop)
//    - Lowest score (you'll need to track this as you loop)
console.log();
let testScore= [85, 92, 78, 95, 88, 73, 90, 87];
let totalScore=0;
let highestScore= testScore[0];
let lowestScore = testScore[0];

for(i=0; i<testScore.length; i++){
    totalScore+=testScore[i];
    if(testScore[i]>highestScore){
        highestScore= testScore[i];
    }
    else if (testScore[i]<lowestScore){
        lowestScore = testScore[i];
    }
}
console.log(`Total score is : ${totalScore}`);
console.log(`Average score is : ${totalScore/testScore.length}`);
console.log(`Highest score is : ${highestScore}`);
console.log(`Lowest score is : ${lowestScore}`);


   