// My age
let myAge = 30;
// First 2 years of a dogs life are 10.5 years each year.
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
// Each following year is 4 years per year.
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// Add earlyYears and laterYears and store in myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

let myName = "Orelso".toLowerCase()
console.log(myName);
// Log out myName myAge and myAgeInDogYears
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)