const a = [1, 2, 3, 4, 5, 6];
const b = a.slice(0, 5);// its return the copy of an array
console.log(b);
a.unshift(8);
console.log(a);
console.log(b);

// splice method its a predefined method which are use to remove and add the element from the array// its not return the duplicate array its modify the original array
a.splice(0, 1, "a", "b");
console.log(a);