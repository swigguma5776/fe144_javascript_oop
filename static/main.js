
// push method to add items to an array
let ingredients = ['eggs', 'milk', 'butter']
ingredients.push('flour')
// console.log(ingredients)

// pop method to remove last item
// ingredients.pop()
// console.log(ingredients)

// remove a specific item, splice 
ingredients.splice(1, 1) // first argument is index, second is how many do we want to remove
console.log(ingredients)

// slice method which is the same in python
// in python to slice we utilize [:] (start & stop) or [::] (start, stop, step)
let newIngredients = ingredients.slice(1,) //equivelant to ingredients[1:] in python
console.log(newIngredients)


// MAP, FILTER, REDUCE

// map allows us to do is perform a function on each item in an iterable
// utilizing map with a arrow/anonymous function
newIngredients = newIngredients.map( (ingredient, index) => index + " New Ingredient: " + ingredient )
console.log(newIngredients)


// utilizing map with a stored function
function squareNums(num){
    return num ** 2
}


let myNums = [2, 4, 7, 10, 5]
let myNumsSquared = myNums.map(squareNums)
console.log(myNumsSquared)


// filter allows us to filter out values in an iterable that do not meet a conditional
let myEvenNums = myNumsSquared.filter( num => num % 2 == 0) 
console.log(myEvenNums)

// reduce allows us to perform calculations on our values in an array
let myEvenSum = myEvenNums.reduce((acc, curr) => acc + curr, 0) // 0 + 4 = 4 + 16 = 20 + 100 = 120
console.log(myEvenSum)

// acc stands for accumulator (accumulated sum / product / quotient)
// curr stands for current 
let myEvenProduct = myEvenNums.reduce((acc, curr) => acc * curr, 1) // 1 * 4 = 4 * 16 = 64 * 100 = 6400
console.log(myEvenProduct)


// sorting is exact same in JS as in Python
// JS sorts values as strings so need to perform the below arrow function to sort by integer value
let mySortedNums = myNums.sort((a, b) => a - b) //sorting #s needs this silliness
console.log(mySortedNums)

let myFruits = ['apple', 'banana', 'orange', 'apricot']
console.log(myFruits.sort())


// destructuring an iterable in JS
// utilizing the spread operator ... to grab all the values regardless of # and assign it to a variable
let [one, two, three, ...aTeam] = ['one', 2, [5, 'hello', 'JS is whack sometimes'], 'Mary', 'James', 'Chris', 'Daniel']

console.log(one)
console.log(three)
console.log(aTeam)


let expandedATeam = [...aTeam, 'Adam', 'Albert']
console.log(expandedATeam)

// in python my_guys = ('Mahrus', 'Haya', 'Savvy', 'Edwin)
// human1, human2, human3, human4 = my_guys
// ... is equivelant to *args in Python

// rest operator which also utilizes the ...

function coolClass(...humans) {
    console.log(humans)
    let myClass = humans.map(human => "Front End Peeps: " + human)
    return myClass
}

console.log(coolClass('Jesica', 'Raymond', 'Alexa'))


// STRING METHODS 
let myString = "Howdy y'all. This is Alex and I say y'all all the time even though I'm from Wisconsin. Y'all"
console.log(myString.length)
console.log(typeof myString) // ===, == is value equality, === strict type check
console.log(myString.toUpperCase())
console.log(myString.indexOf("y'all"))
console.log(myString.toLowerCase().lastIndexOf("y'all"))
console.log(myString.includes('Howdy'))

console.log(myString.slice(0, 5)) // can also do this with a .substring()
console.log(myString.split(". ")) // needs an argument unlike Python. -1 point JS
let myNewString = myString.concat(" are cool and I'm going to miss you") // concatinates aka joins two strings together
console.log(myNewString + ' very much') // same same but different as above


// REGEX patterns 

// utilie the / forward slash to indicate a pattern, no need to import any modules

let mySentence = 'My birthday is September 11 1991. That makes me 32 years old'
let myPattern = /\d+/

// match
// test
// exec = can grab all the matched patterns

console.log(myPattern.test(mySentence)) // true
console.log(mySentence.match(myPattern)) // gives us the whole entire match object
console.log(mySentence.match(myPattern).index) //grabs just the index value

// let myMatches = []
// let match;
// while ((match = myPattern.exec(mySentence)) !== null){
//     myMatches.push(match[0])
// }

// console.log(myMatches)

// let allMyMatches = myPattern.exec(mySentence)
// console.log(allMyMatches)

let myPost = "Hey @AlexSwagg, did you see the new Dune movie? It's so good! #christopherwalkin #dune2" 


let hashtag = /#[a-z0-9]+/
console.log(myPost.match(hashtag)[0])

let mention = /@\w+/
console.log(myPost.match(mention)[0])


// OBJECTS aka Dictionaries

let person1 = {
    name: 'Aang',
    age: 12,
    pets: ['Appa', 'Momo'],
    bending: {
        nations: ['air', 'water', 'earth', 'fire', 'blood'],
        abilities: 'avatar state'
    },
    'do-bending': (element) => console.log(`I am Aang and I will destroy you with my ${element} bending`)
}

//console log air
console.log(person1.bending.nations[0]) // dot notation
console.log(person1['bending']['nations'][0]) //bracket notation

person1['do-bending']('air') // if your key has any characters in it, you'll need to use bracket notation

// accessing key/value pairs from objects
// in the world of python we had .keys(), .values(), .items()
// in JS we have Object.keys(), Object.values(), Object.entries()

console.log(Object.keys(person1)) // creates an array of keys
for (let key of Object.keys(person1)) {
    console.log(key)
}

for (let value of Object.values(person1)){
    console.log(value)
}

for (let [key, value] of Object.entries(person1)) { // loop through both key/value

    if (Array.isArray(value)){ // JS built-in method to check if something is an array
        console.log(key)
        for (let item of value){
            console.log(`\t${item}`)
        }
    } else if (typeof value == 'object') {
        for (let [key, val] of Object.entries(value)) {
            console.log(key, ":", val)
        }
    } else {
        console.log(key, ":", value)
    }
}

// Chri's cart shenanigans
// const inventory = [
//     {product: 'apple', price: 1.99 },
//     {product: 'bananna', price: 2.99},
//     {product: 'orange', price: 3.99},
// ];

// let totalPrice = 0

// for (let item of inventory){
//     totalPrice += item.price
// }

// console.log(totalPrice)


// OLD WAY OF DOING CLASSES 
// OBJECT CONSTRUCTORS AND PROTOTYPES

function Superhero (name, powers, suitColor) {
    this.name = name;
    this.powers = powers;
    this.suitColor = suitColor;
}

Superhero.prototype.doPower = function() {
    console.log(`I am ${this.name} and I am going to use my ${this.powers} powers on you!`)
};

// when instantiating a new object prototype need to use the 'new'
let spiderMan = new Superhero('spiderman', 'spidey powers', 'red and blue with black accents')
console.log(spiderMan.name)

spiderMan.doPower()

//NEW WAY OF DOING CLASSES AS OF ECMA 6

class SuperheroAgain {
    // this is basically the same as the __init__() in Python
    constructor(name, powers, suitColor){
        this.name = name;
        this.powers = powers;
        this.suitColor = suitColor;
    }
    
    doPower = () => {
        console.log(`I am ${this.name} and I am going to use my ${this.powers} powers on you!`)
    }
}

let thor = new SuperheroAgain('Thor', 'lightning & thunder', 'blue with red cape')
thor.doPower()

// Objects in JS can inherit using the 'extends' keyword
// much like in Python we placed the parent class inside the parenthesis, now we use 'extends'


class Human {
    constructor(name, age, height, personality, sleepSchedule){
        this.name = name;
        this.age = age;
        this.height = height;
        this.personality = personality; 
        this.sleepSchedule = sleepSchedule;
    }
    
    sleep = () => {
        console.log(`Hi my name is ${this.name} and I sleep for this many hours ${this.sleepSchedule}`)
    }
}

// inheritance
class Baby extends Human {
    constructor(name, age, height, personality, sleepSchedule, poopSchedule){
        super(name, age, height, personality, sleepSchedule) // super().__init__() in Python
        this.poopSchedule = poopSchedule
    }
    
    cry = () => {
        console.log(`I am a baby so I cry all the time! Wah Wah`)
    }
}


let chris = new Human('Chris', 32, '5 foot 5 inches', 'chipper', 6)
chris.sleep()
// console.log(chris.poopSchedule) undefined because it is only created in the Baby class
// chris.cry() // this will work in Python but is a HUGE NO NO

let chrisBaby = new Baby('Aiden', 2, '2 foot', 'quiet', 16, 4)
chrisBaby.sleep()
console.log(chrisBaby.poopSchedule)









