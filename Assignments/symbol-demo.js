// **Test Cases:**
// ```javascript
let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

console.log(sym1 === sym2);       // What do you expect?
console.log(typeof sym1 , typeof sym2);         // What type is it?
console.log(sym1.description , sym2.description);    // What prints here?