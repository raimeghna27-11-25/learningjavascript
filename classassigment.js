let score=85;
if(score>=90){
    console.log("Grade A");
} if(score>=80){
    console.log("Grade B");
} else {
    console.log("Grade C");
}   

score = score>=90 ? "Grade A" : score>=80 ? "Grade B" : "Grade C";
console.log(score); 