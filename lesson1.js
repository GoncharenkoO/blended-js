//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const message = prompt("Яка офіційна назва JavaScript?");
// console.log(message);

// if (message === "ECMAScript") {
// 	alert("Вірно!");
// } else {
// 	alert("Не знаєте? ECMAScript!");
// }

/******************************************************************* */

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const number = prompt("Введіть число");
// console.log(number);

// const hour = Math.floor(number / 60);
// console.log(hour);

// const minute = number % 60;
// console.log(minute);

// const modifiedHour = String(hour).padStart(2, "0");
// const modifiedMinute = String(minute).padStart(2, "0");
// console.log(`${modifiedHour}:${modifiedMinute}`);

/******************************************** */

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 20;
// const min = 5;
// let sum = 0;

// for (let i = max; i >= min; i -= 1) {
// 	console.log(i);

// 	if (i % 2 === 0) {
//     sum += i;

// 	}
// }
// console.log(sum);

// for (let i = max; i >= min; i -= 1) {
// 	console.log(i);

// 	if (i % 2 !== 0) {
// 		continue;
// 	}
// 	sum += i;
// }
// console.log(sum);

/********************** */

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = Number(prompt("Введіть число від 1 до 4"));
// let result = "";

// switch (num) {
// 	case 1:
// 		result = "зима";
// 		break;

// 	case 2:
// 		result = "весна";
// 		break;

// 	case 3:
// 		result = "літо";
// 		break;

// 	case 4:
// 		result = "осінь";
// 		break;

// 	default:
// 		result = "Введіть число від 1 до 4";
// }

// console.log(result);

/*************************************** */

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt("Введіть логін");
// console.log(login);

// if (login === "Admin") {
// 	const password = prompt("Введіть пароль");
// 	if (password === "Я головний") {
// 		alert("Вітаю!");
// 	} else {
// 		alert("Невірний пароль!");
// 	}
// } else if (login === null || login === "") {
// 	alert("Скасовано");
// } else {
// 	alert("Я вас не знаю");
// }

// switch (login) {
// 	case "Admin":
//     const password = prompt("Введіть пароль");
// password === "Я головний" ? alert("Вітаю!") : alert("Невірний пароль!");
// alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");
// if (password === "Я головний") {
// 	alert("Вітаю!");
// } else {
// 	alert("Невірний пароль!");
// }
// 		break;

// 	case null:
// 	case "":
// 		alert("Скасовано");
// 		break;

// 	default:
// 		alert("Я вас не знаю");
// }

/************************************** */

//При завантаженні сторінки користувачу пропонується
//в prompt ввести число. Ввод додається к значенню
//змінної total.
//Операція вводу числа продовжується до тих пір,
//доки користувач не натисне кнопку Cancel в prompt.
//Після того як користувач закінчив ввод натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

// let number = prompt("Введіть число");
// let total = 0;

// while (number) {
//     total += Number(number);
//   number = prompt("Введіть число");
// }
// alert(`Загальна сумма введенних чисел дорівнює ${total}.`);

// while (number) {
// Перевірка на число
// 	if (!Number.isNaN(Number(number))) {
// 		total += Number(number);
// 	}
// 	number = prompt("Введіть число");
// }
// alert(`Загальна сумма введенних чисел дорівнює ${total}.`);

/**************************** */

// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// console.log(minuteValue);

// if (minuteValue <= 15) {
// 	alert("Перша чверть");
// } else if (minuteValue <= 30) {
// 	alert("Друга чверть");
// } else if (minuteValue <= 45) {
// 	alert("Третя чверть");
// } else {
// 	alert("Четверта чверть");
// }

// if (minuteValue >= 0 && minuteValue <= 15) {
// 	alert("Перша чверть");
// }
// if (minuteValue >= 16 && minuteValue <= 30) {
// 	alert("Друга чверть");
// }
// if (minuteValue >= 31 && minuteValue <= 45) {
// 	alert("Третя чверть");
// }
// if (minuteValue >= 46 && minuteValue <= 59) {
// 	alert("Четверта чверть");
// }

/******************************************* */

//Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо користувач ввів інше число - попросити
//ввести ще раз и так далі.
//Цикл повинен питати число, доки користувач не
//введе число більше 100, чи не натисне кнопку
//Cancel в prompt

// let number = prompt("Введіть число");

// while (number < 100) {
// 	if (number === null) {
// 		break;
// 	}
// 	number = prompt("Введіть число");
// }
// alert(number ? number : " Скасовано");
// if (number) {
// 	alert(number);
// } else {
// 	alert("Скасовано");
// }

// alert(number || "Скасовано");

/********************************************** */

// Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть 'Так', в іншому випадку - 'Ні'.

// const message = "Ahgkdkd";

// if (message[0].toLowerCase() === "a") {
// 	alert("Yes");
// } else {
// 	alert("No");
// }
