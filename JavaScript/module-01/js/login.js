/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показыать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы ADMIN_LOGIN, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы ADMIN_LOGIN, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы ADMIN_PASSWORD,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы ADMIN_PASSWORD, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const LOGIN_CANCELLED = 'Отменено пользователем!';
const LOGIN_DENIED = 'Доступ запрещен!';
const LOGIN_OK = 'Добро пожаловать!';
const LOGIN_PWD_MISMATCH = 'Неверный пароль. Попробуйте снова.';

let userName = prompt('Enter your username: ');
if (userName === null) {
    alert(LOGIN_CANCELLED);
} else if (userName !== ADMIN_LOGIN) {
    alert(LOGIN_DENIED);
} else {
    pwd = prompt('Enter your password: ');
    if (pwd === ADMIN_PASSWORD) {
        alert(LOGIN_OK);
    } else {
        alert(LOGIN_PWD_MISMATCH);
    }
}
