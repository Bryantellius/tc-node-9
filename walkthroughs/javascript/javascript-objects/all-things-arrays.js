// Script starts

let numbers = [1, 2, 3, 4, 5];

console.log(`START: ${numbers}`);

numbers.push(6);

console.log(`PUSH: ${numbers}`);

numbers.unshift(0)

console.log(`UNSHIFT: ${numbers}`);

numbers.splice(2, 0, 10);

console.log(`SPLICE: ${numbers}`);

numbers.pop()

console.log(`POP: ${numbers}`);

numbers.shift()

console.log(`SHIFT: ${numbers}`);

// .map
// Takes a function parameter
// Call the function with each array value
// Returns a new array from the old array
// The function parameter is responsible for returning new values for the new array

let newNumbers = numbers.map(function (value) {
    return Boolean(value)
})

console.log(`MAP: ${newNumbers}`)

let users = [
    {
        id: 1,
        firstName: "Ben",
        lastName: "Bryant",
        email: "bb@email.com",
        imgUrl: "url.jpg",
    },
    {
        id: 2,
        firstName: "Seth",
        lastName: "Bowman",
        email: "sb@email.com",
        imgUrl: "url.jpg",
    },
    {
        id: 3,
        firstName: "Cameron",
        lastName: "Hardy",
        email: "ch@email.com",
        imgUrl: "url.jpg",
    }
];

let contactList = users.map(function (user) {
    let contact = {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
    };

    return contact;
})

console.log(users);
console.log(contactList);