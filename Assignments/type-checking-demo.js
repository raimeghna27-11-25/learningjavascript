let totalTests = 10;
let passedTests = 8;
let failedTests = 2 ;
let passRate = 80.0;
let testSuiteName = "Result Test Suite";
let allTestsPassed = false;


console.log("===== Test Metrics Dashboard =====");
console.log("Test Suite     : " + testSuiteName +" (Type :" + typeof testSuiteName +")");
console.log("Total Tests    : " + totalTests +" (Type :" + typeof totalTests +")");
console.log("Passed Tests   : " + passedTests +" (Type :" + typeof passedTests +")");
console.log("Failed Tests   : " + failedTests +" (Type :" + typeof failedTests +")");
console.log("Pass Rate      : " + passRate + "%" +" (Type :" + typeof passRate +")");
console.log("All Passed?    : " + (allTestsPassed ? "Yes" : "No") +" (Type :" + typeof allTestsPassed +")");
console.log("=================================");