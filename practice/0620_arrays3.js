let loginArr = ['bob', 'mango', 'admin', 'batman', 'superuser'];

// 1) Запропонувати користувачу ввести логін
// 2) Якщо логін є в масиві повідомити юзера що такий логін існує
// 3) Якщо такого логіна немає привітати користувача з реєстрацією і додати його логін в масив loginArr

let userInput = prompt('Enter username: ');

console.log(userInput);
if (userInput !== null && userInput.length > 0) {
    if (loginArr.includes(userInput)) {
        alert(`User ${userInput} already exists.`)
    } else {
        loginArr.push(userInput);
        alert(`Welcome, ${userInput}!`)
    }
}