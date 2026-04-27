let username = "testuser";
let password = "Test@123";
let email = "";

// 2. Write an if-else statement
// Logic: (User AND Pass) OR Email
if ((username !== "" && password !== "") || email !== "") {
    console.log("✅ Sufficient login credentials");
} else {
    console.log("❌ Insufficient credentials – provide username+password OR email");
}