const person = {
    name:"vetal chess 07",
    age:19,
    greet: function(){
        console.log('hello!')
    }
}

Object.prototype.myFunc = function(){
    console.log("hi!!!")
}

person.myFunc()

const user2  = Object.create(null)
user2.prototype = Object.create(person)
console.log(user2 instanceof Object);
