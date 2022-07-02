let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;
let runnerAge = 22;

if (earlyRegistration && runnerAge) {
    raceNumber += 1000
}
console.log(raceNumber);

if (earlyRegistration && runnerAge > 18) {
    console.log('The race will start at 9:30am ' + '#' + raceNumber)
} else if (earlyRegistration === false && runnerAge > 18) {
    console.log('Late adults run at 11:00am ' + '#' + raceNumber)
} else if (runnerAge < 18) {
    console.log('The youth race starts at 12:30pm ' + '#' + raceNumber)
} else {
    console.log('See the registration desk for more info')
}