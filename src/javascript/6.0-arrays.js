let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments); // Prints: [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]

condiments = ['Mayo'];
console.log(condiments); // Prints: [ 'Mayo' ]


utensils[3] = 'Spoon'; // Prints: [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]
console.log(utensils)