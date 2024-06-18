// // arrow function a spectila type of function which are introduced in es6 bascially its shorter/conscise syntax for a function and the arrow function dont have thier own this keywordl;


// const person = {
//     fname: 'ajay',
//     lname: "gupta",
//     // call: function calling() {
//     //     console.log(this.fname + this.lname);
//     // }
//     call: () => {
//         console.log(this.fname + this.lname);// here we can use this keyword inside the arrow function
//     }

// }

// person.call("ajay");

function foo() {
    return boole();
    function boole() {
        return "hello";
    }
}
console.log(foo());