let animals = ["cat","dog","rabbit","bird","fish"];
// вивести в консоль випадкову тваринку з масиву
//console.log(animals[Math.floor(Math.random()*animals.length)]);

//try to guess which one was randomly selected
let r = animals[Math.floor(Math.random()*animals.length)];
let u = prompt('Try to guess which of the following animals was randomly selected: \ncat, dog, rabbit, bird, fish');
if (u !== null) { // user did not click Cancel
    alert(u === r ? 'Correct! (' + r + ')' : 'Incorrect! (' + r + ')');
}
