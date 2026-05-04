function emailGenerator(fName, lName, domain){
    let email= fName.toLowerCase()+lName.toLowerCase()+domain;
    return `Email id is ${email}`;   
}
let id1 = emailGenerator("John","Deo","@gmail.com")
console.log(id1);
let id2 = emailGenerator("Mack","Reo","@gmail.com")
console.log(id2);
let id3 = emailGenerator("Clark","Jhon","@gmail.com")
console.log(id3);
console.log("----------------------------------------------------------")


//==================================
function emailGenerator1(fName1, lName1, domain1="@gmail.com"){
    
    return `Email id is ${fName1.toLowerCase()}${lName1.toLowerCase()}${domain1}`;   
}
console.log(emailGenerator1("John","Deo"));
console.log(emailGenerator1("Mack","Reo"));
console.log(emailGenerator1("Clark","Jhon"));