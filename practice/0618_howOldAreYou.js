//how old are you in days/hours/mins/seconds?

let ageYrs = parseInt(prompt('How old are you?'));
let ageDays = ageYrs * 365 + parseInt(ageYrs/4);
let ageHrs = ageDays * 24;
let ageMins = ageHrs * 60;
let ageSecs = ageMins * 60;

console.log('You entered ', ageYrs, 'That equals: ');
console.log(ageDays + ' days');
console.log(ageHrs + ' hours');
console.log(ageMins + ' minutes');
console.log(ageSecs + ' seconds');
