const age = 30;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calcutlator = {
    plus: function (a, b) {
        return a + b;
    }
}

const plusResult = calcutlator.plus(2, 3);