var name = 'Asam';
name = 33;


var food = {
    // data i objekt
    type : 'apple',
    taste : 'sour',
    price : 44,

    // metoder i objekt
    info : function () {
        return this.type + ' ' + this.taste + ' ' + this.price;
    },

    // array
    moreinfo : ['dette', 'er', 43, 'et', 'array', {name : 'asam'}],

    // objekt i objekt
    orm : {
        name : 'Abdul',
        age : '21',
        status : 'førtidspensionist'
    }
};


console.log(food.type);
food.type = 'Orange';
console.log(food.type);
// nyt data i objektet
food.size = 'big';
console.log(food.size);

console.log(food.info());



// funktioner

var x = function () {
    return 'Hello';
}
console.log(x());


function y (text) {
    return text + 'World';
}

console.log(y('Hello '));