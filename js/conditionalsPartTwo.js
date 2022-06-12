const age = parseInt(prompt("How old are you?"));


// isNaN은 boolean 값을 반환한다.

if(isNaN(age)){
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age");
}