let user = {
    name: 'Daler',
    surname: 'Muinjonov',
    age: 15,
    isMarried: true,
    hairColor: 'rijiy'
}


let money = {
    auto: 30000,
    food: 50000,
    friends: 100000,
    expenses: [
        {
            house: 1000000
        }
    ],
    hairColor: 'red',
}

let vls =Object.values(money,user)
console.log(
    Math.max(vls.length)
);

