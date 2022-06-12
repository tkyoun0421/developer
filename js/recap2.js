const player = {
    name: "Nico",
    age: 30,
}

console.log(player);

// player 와 console 둘 다 object 이다.
player.name = "Nicolas";
console.log(player);
player.sexy = "soon";
console.log(player);

const calculator = {
    add : function(a, b){
        console.log(a + b);
    },
    minus : function(a , b){
        console.log(a - b);
    },
    devide: function(a , b){
        console.log(a / b);
    },
    squared: function(a, b){
        console.log(a**b);
    }
}

calculator.add(5,6);
calculator.minus(7,8);
calculator.devide(9,3);
calculator.squared(2,3);