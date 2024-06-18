function invite(greeting1, greeting2) {
    return greeting1 + this.firstname + this.lastname + greeting2;
}

const person1 = {
    firstname: "ajay ",
    lastname: "gupta "
}
const person2 = {
    firstname: "abhi",
    lastname: "gupta"
}

// why we need to use the call,apply and bind method??
// when we want use the function with the object then we use this method// basically we attach the object with the function
console.log(invite.call(person1, "hello ", "how are you? "));// here we simply pass the argumnet

console.log(invite.apply(person2, ["hello ", "how are you? "]))// here we pass the argument in array

const greeting3 = invite.bind(person1);
console.log(greeting3("hello", "how are you"));// in the bind method firstly we will bind the function with an object that will return an function after that we will pass the argumnet 