let email = "testuser@example.com";

if(email.includes("@") && email.includes("-")){
    console.log("✅ Valid email format");
}
else{
    console.log("❌ Invalid email format");
}

// ## Exercise 2: Test Result Categorizer

// **Scenario:** Your test framework returns different status codes. You need to display appropriate messages.

// **Requirements:**
// 1. Create a variable `testResult` with value `"PASSED"`
// 2. Write an if-else-if statement that handles:
//    - `"PASSED"` → Print: `"✓ Test passed successfully"`
//    - `"FAILED"` → Print: `"✗ Test failed - check logs"`
//    - `"SKIPPED"` → Print: `"⊘ Test skipped"`
//    - Anything else → Print: `"? Unknown test status"`

let testResult = "FAILED";
if (testResult==="PASSED"){ console.log("✓ Test passed successfully");}
else if (testResult==="FAILED"){ console.log("✗ Test failed - check logs");}
else if (testResult==="SKIPPED"){ console.log("⊘ Test skipped");}
else{ console.log("? Unknown test status")}

// ## Exercise 3: Password Strength Checker

// **Scenario:** Validate password strength for test user creation.

// **Requirements:**
// 1. Create a variable `password` with value `"Test@123"`
// 2. Write an if-else-if statement that checks password length:
//    - Less than 6 characters → `"❌ Weak password - too short"`
//    - Less than 10 characters → `"⚠️ Medium password strength"`
//    - 10 or more characters → `"✅ Strong password"`

let password="Test@12345";
if(password.length<6){console.log("❌ Weak password - too short")}
else if (password.length<=10){console.log("⚠️ Medium password strength")}
else{console.log("✅ Strong password")}

// ## Exercise 4: Test Score Grading

// **Scenario:** Convert test automation scores to letter grades.

// **Requirements:**
// 1. Create a variable `score` with value `85`
// 2. Write an if-else-if statement that assigns grades:
//    - 90 or above → `"Grade: A (Excellent)"`
//    - 80-89 → `"Grade: B (Good)"`
//    - 70-79 → `"Grade: C (Average)"`
//    - 60-69 → `"Grade: D (Pass)"`
//    - Below 60 → `"Grade: F (Fail)"`

let score=59;
if(score>=90){console.log("Grade: A (Excellent)")}
else if(score>=80 && score<=89){console.log("Grade: B (Good)")}
else if(score>=70 && score<=79){console.log("Grade: C (Average)")}
else if(score>=60 && score<=69){console.log("Grade: D (Pass)")}
else{console.log("Grade: F (Fail)")}
