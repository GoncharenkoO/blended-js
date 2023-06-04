// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const list = document.createElement("ol");
// const btnAdd = document.createElement("button");
// btnAdd.textContent = "Add";
// const btnRemove = document.createElement("button");
// btnRemove.textContent = "Remove";
// const input = document.createElement("input");
// document.body.append(input, btnAdd, btnRemove, list);
// btnAdd.addEventListener("click", addItem);
// function addItem() {
//   if (input.value === "") return;
//   const item = document.createElement("li");
//   item.textContent = input.value;
//   list.append(item);
//   input.value = "";
// //   if (list.children.length % 2 === 0) {
// //     item.style.backgroundColor = "yellow";
// //   } else {
// //     item.style.backgroundColor = "blue";
// //   }
// item.style.backgroundColor = list.children.length % 2 === 0 ? "yellow" : "blue";
// }
// btnRemove.addEventListener("click", removeItem);
// function removeItem() {
//   if (list.lastChild) {
//     list.lastChild.remove();
//   }
// }

/*****************************************************************************************************/
// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const figure = document.createElement("div");

// changeFigure();

// document.body.append(figure);

// figure.addEventListener("click", changeFigure);

// function changeFigure() {
//   figure.style.cssText = forms[randomither(forms.length)];
//   figure.style.backgroundColor = getRandomHexColor();
//   figure.style.position = "absolute";
//   figure.style.top = `${randomither(100)}%`;
//   figure.style.left = `${randomither(100)}%`;
// }

/**************************************************************************************/

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// let size = 50;

// const markup = `<div style="background: red; width: ${size}px; height: ${size}px;"></div><button id="dec">Зменшити</button><button id="inc">Збільшити</button>`;

// document.body.insertAdjacentHTML("afterbegin", markup);

// const btnDec = document.querySelector("#dec");
// const btnInc = document.querySelector("#inc");
// const square = document.querySelector("div");

// btnDec.addEventListener("click", decSquare);
// btnInc.addEventListener("click", incSquare);

// function decSquare() {
//     if (size === 10) return;
//   size -= 10;
//   square.style.width = `${size}px`;
//   square.style.height = `${size}px`;
// }

// function incSquare() {
//     if (size === 700) return;
//   size += 10;
//   square.style.width = `${size}px`;
//   square.style.height = `${size}px`;
// }

/***********************************************************************************/

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const input = document.getElementById("passwordInput");
// const button = document.getElementById("passwordButton");

// button.addEventListener("click", handleText);

// function handleText() {
//   if (button.textContent === "Приховати") {
//     button.textContent = "Розкрити";
//     input.style.color = "transparent";
//   } else {
//     button.textContent = "Приховати";
//     input.style.color = "inherit";
//   }
// }

/********************************************************************/

// Завдання 6
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

// const items = document.querySelectorAll(".listItem");
// const button = document.getElementById("double");

// button.addEventListener("click", doubleItems);

// function doubleItems() {
// 	items.forEach((item) => {
// 		item.textContent *= 2;
// 	});
// }

/********************************************************************** */

/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

// const items = document.querySelectorAll(".gridItem");

// items.forEach((item) => {
// 	item.addEventListener("mouseenter", () => item.classList.add("hide"));
// 	item.addEventListener("mouseleave", () => item.classList.remove("hide"));
// });

/************************************************************************************* */

// Завдання 14
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const div = document.querySelector("div");

// document.addEventListener("keydown", ({ key, code }) => {
// 	const markup = `
//     <ul class='eventList'>
//       <li class='eventKey'><b>Key</b>: ${key}</li>
//       <li class='eventCode'><b>Code</b>: ${code}</li>
//     </ul>
// `;
//   div.insertAdjacentHTML("afterbegin", markup);
// });

/**************************************************************************** */

// Завдання 12
// Клік по кнопці замінює символ першого поля введення на
// символ з другого поля введення в усьому тексті.
// Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
//

const text = document.querySelector(".text");
const input1 = document.getElementById("from");
const input2 = document.getElementById("to");
const button = document.getElementById("replaceButton");

button.addEventListener("click", buttonReplace);

function buttonReplace() {
	if (input1.value === "" || input2.value === "") return alert("Заповніть поля");
	text.textContent = text.textContent.replaceAll(input1.value, input2.value);
	input1.value = "";
	input2.value = "";
}
