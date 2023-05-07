// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");

// const stylesIndex = styles.indexOf("Блюз");

// styles[stylesIndex] = "Класика";

// styles.splice(stylesIndex, 1, "Класика");

// console.log(styles.shift());

// styles.unshift("Реп", "Реггі");

// console.log(styles);

/*************************************************************************************************** */

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function loginName(array) {
// 	const name = prompt("Введіть ім'я");
// 	if (array.includes(name)) {
// 		alert("Доступ дозволено");
// 	} else {
// 		alert("Користувач не знайден");
// 	}
// }

// loginName(logins);

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];

// function logItems(array) {
// 	for (let index = 0; index < array.length; index++) {
// 		console.log(`${index + 1} - ${array[index]}`);
// 	}
// }
// logItems(names);

/******************************************************************/

// Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b
//Додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (typeof a === "number" && typeof b === "number") return Math.min(a, b);
//   return "Значення повинні бути числами";
// }
// console.log(min(15, 5));

/***************************************************************************/

// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function deleteFalse(array) {
//   const newArray = [];
//   for (const el of array) {
//     if (!el) {
//       continue;
//     }
//     newArray.push(el);
//   }
//   return newArray;
// }

// console.log(deleteFalse(array));

/********************************************************************************/

// Наступна функція повертає true, якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:

// const age = prompt("Enter your age");

// function checkAge(age) {
//   if (age < 18) {
//     const isAdult = confirm("Маєте 18 років?");
//     return isAdult;
//   }
//   return age >= 18;
// }

// console.log(checkAge(age));

/*************************************************************************************/
//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];
// function add(name) {
//   names.push(name);
//   return names;
// }
// function remove(name) {
//   const index = names.indexOf(name);
//   if (index === -1) return "Такого імені немає!";
//   names.splice(index, 1);
//   return names;
// }
// function update(oldName, newName) {
//   const index = names.indexOf(oldName);
//   if (index === -1) return "Такого імені немає!";
//   names.splice(index, 1, newName);
//   return names;
// }

// console.log(add("Bohdana"));
// console.log(remove("Max"));
// console.log(update("Olena", "Olha"));
// console.log(remove("Kate"));

/****************************************************************************************/

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//   console.log(`${key} : ${user[key]}`);
// }

/*****************************************************************************************/

// У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// const values = Object.values(salaries);
// for (const salary of values) {
//   sum += salary;
// }
// console.log(sum);

/*******************************************************************************/

//3. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає массив об'єктів і
//рядок з назвами каміння.
//Функція рахує і повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(stones, stonesName) {
//   let totalPrice = 0;
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       totalPrice += stone.price * stone.quantity;
//     }
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(stones, "Сапфір"));

/*************************************************************/
//7. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
	DEPOSIT: "deposit",
	WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
	//поточний баланс рахунка
	balance: 0,

	//Історія транзакцій
	transactions: [],

	//Метод створює і повертає об'єкт транзакцій
	//Приймає сумму і тип транзакцій
	createTransaction(type, amount) {
		return {
			type,
			amount,
		};
	},

	//Метод відповідає за додавання сумми к балансу.
	//Приймає сумму транзакціи.
	//Визиває createTransaction для створення об'єкта транзакціи
	//після чого додає його в історію транзакцій
	deposit(amount) {
		this.balance += amount;
		const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
		this.transactions.push({ ...transaction, id: Math.random() });
		return this.transactions;
	},
	//Метод відповідає за зняття сумми з балансу.
	//Приймає сумму транзакціи.
	//Визиває createTransaction для створення об'єкта транзакціи
	//після чого додає його в історю транзакцій
	//Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
	//що недостатньо коштів на рахунку
	withdraw(amount) {
		if (amount > this.balance) {
			return alert("недостатньо коштів на рахунку");
		}
		this.balance -= amount;
		const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
		this.transactions.push({ ...transaction, id: Math.random() });
		return this.transactions;
	},
	//Метод повертає поточний баланс
	getBalance() {
		return this.balance;
	},
	//Метод шукає і повертає об'єкт транзакціи по id
	getTransactionDetails(id) {
		for (const transaction of this.transactions) {
			if (transaction.id === id) {
				return transaction;
			}
		}
		return "Transaction не знайдено";
	},
	//Метод повертає кількіств коштів вказаного типу
	//транзакціи зі всієї історії транзакцій
	getTransactionType(type) {
		let totalAmount = 0;
		for (const transaction of this.transactions) {
			if (transaction.type === type) {
				totalAmount += transaction.amount;
			}
		}
		return totalAmount;
	},
};

console.log(account.deposit(10000));
console.log(account.withdraw(5000));
console.log(account.getBalance());
console.log(account.getTransactionDetails(20));``
console.log(account.getTransactionType(Transaction.DEPOSIT));
