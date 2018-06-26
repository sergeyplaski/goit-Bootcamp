/*
Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
вказує суму і на основі курса виводиться готова сума.
UAH, EUR, USD
1)Запит яку валюту має
2)Запит в яку валюту хоче перевести
3)Запит яка сума для конвертації
4) В замиканні зберегти 6 курсів валют
5) 6 перевірок в залежності від валют виводити кінцпеву суму
6) Перетворити введену валюту до єдиного формату
7) Перевірка на ціле і додатнє число.
8 ) alert вивести суму яку він отримає.
*/

let exchange = function(from, to, amt) {
    let USDUAH = 26;
    let USDEUR = 0.85;
    let EURUAH = 29;
    let EURUSD = 1.17;
    let UAHUSD = 0.0385;
    let UAHEUR = 0.0329;

    return function () {
        let currencyList = ['USD','EUR', 'UAH'];
        let from = prompt('Enter currency to be exchanged: (USD/EUR/UAH)');
        let FROM = from.toUpperCase();
        if (!currencyList.includes(FROM))
            return `Invalid currency entered : ${from}`;

        let to = prompt('Enter currency you want to receive: (USD/EUR/UAH)');
        let TO = to.toUpperCase();
        if (!currencyList.includes(TO))
            return `Invalid currency entered : ${to}`;

        let amt = parseFloat(prompt('Enter amount to echange'));
        //use eval() to select currency pair:
        return (amt < 0 ? 'Invalid amount entered' : `${amt} ${FROM} = ${amt * eval(FROM + TO)} ${TO}`);
    };
};

let convert = exchange(); // always initialize function enclosure
alert(convert());