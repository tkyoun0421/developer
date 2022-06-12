const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else if(age >= 51 && age <= 80){
    console.log("You should exercise");
} else if(age >= 81){
    console.log("You can do whatever you want");
}


// OR 연산자
true || true === true
false || true === true
true || false === true
false || false === false

// AND 연산자
true && true === true
true && false === false
false && true === false
false && false === false