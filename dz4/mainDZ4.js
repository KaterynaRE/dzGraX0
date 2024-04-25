// 1. Створити об'єкт project. У нього є назва, наприклад FaceBook. У нього є developer, 
//у якого є ім'я, прізвище та адреса, а у адреси є країна і місто.
// За допомогою деструктуризації витягнути країну і місто.

// const project = {
//     nameProject: 'FaceBook',
//     projectDeveloper: {
//         firstNameDeveloper: 'Isaak',
//         lastNameDeveloper: 'Nout',
//         adress: {
//             country: 'Ukraine',
//             city: 'Zp',
//         }
//     }
// }
// const { projectDeveloper: { adress: { country, city } } } = project;
// console.log(country);
// console.log(city);

//2. Є дані у такому форматі: Ivan;Ivanov;1990;ivanov@gmail.com.
// Витягнути електронну адресу та рік народження за допомогою деструктуризації.

//  const info = 'Ivan; Ivanov; 1990; ivanov@gmail.com';
//  const [firstName, , age, email] = info.split(';');
//  console.log(age);
//  console.log(email);

//  3. У Map помістити 10 слів англо-українських. У якості ключа англійське слово, у якості значення - українське.
// Наприклад: mother->мама. Користувач вводить слово англійською, програма видає результат українською.

// const dictionary = new Map();
// dictionary.set('mother', 'мама');
// dictionary.set('father', 'папа');
// dictionary.set('douther', 'донька');
// dictionary.set('son', 'син');
// dictionary.set('dog', 'собака');
// dictionary.set('cat', 'кішка');
// dictionary.set('car', 'машина');
// dictionary.set('eight', 'вісім');
// dictionary.set('one', 'один');
// dictionary.set('two', 'два');

// let inputUser = prompt("Введіть слово англійською для перекладу", "");
// let inpt = inputUser;
// function translate(inpt) {
//     if (dictionary.has(inpt)) {
//         return dictionary.get(inpt);
//     } else {
//         return 'Переклад не знайдено';
//     }
// }
// let translateWord = translate(inputUser.toLowerCase()); 
// console.log(translateWord);

//4. Створити об'єкт телефон за допомогою функції конструктора, у нього є бренд, модель, ціна, колір.
//Створити три об'єкти телефонів. Наприклад: бренд samsung, модель x100, ціна 1000грн, колір червоний.
//При перетворенні(преобразуванні) до рядка потрібно відобразити інформацію: samsung x100 1000грн.

// function Telefon(brandName, model, price, color) {
//     this.brandName = brandName;
//     this.model = model;
//     this.price = price;
//     this.color = color;
// }
// Telefon.prototype.toString = function() {
//     return `${this.brandName} ${this.model} ${this.price}грн`;
// };

// let tel1 = new Telefon('Samsung', 'x100', 1000, 'red');
// let tel2 = new Telefon('Samsung', 's24Ultra', 62000, 'blue');
// let tel3 = new Telefon('Apple', 's13ProMax', 60000, 'black');

// console.log(tel1.toString());
// console.log(tel2.toString());
// console.log(tel3.toString());

// 5. Створити функцію, яка приймає будь-яку кількість чисел і обчислює середнє арифметичне, повертаючи його як результат.
// Викликати цю функцію з трьома аргументами та з масивом, в якому три значення.

// function arithmetic(...arguments) {
//     let res = 0;
//     let temp = 0;
//     let countArgs = 0;
//     for (const v of arguments) {
//         temp += v;
//         countArgs++;
//         res = temp / countArgs;
//     }
//     return res;
// }

// console.log(arithmetic(1, 1, 2));
// const arr = [1, 1, 2]; 
// console.log(arithmetic(...arr));

//6 Є масив об'єктів User. У них є ім'я та прізвище. Створити новий масив користувачів на основі старого,
//додавши при цьому до кожного об'єкту властивість isSelected: false.

// function Users(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const users = [
//    new Users('Ivan', 'Ivanov'),
//    new Users('Petr', 'Petrov'),
// ];
// const copyUsers = users.map(user => ({ ...user, isSelected: false }));
// console.log(copyUsers);

//7
//+ При натисканні на кнопку починає працювати таймер від 5 до 1.
//+ На екрані повинні відображатися значення таймера (5, 4, 3, 2, 1).
//+ Після того як таймер зупинився - екран забарвлюється червоним.
//+ Повторно запустити таймер можна лише після того, як він закінчився. 
//+ При повторному запуску лічильник починає з початку і екран знову білий.

// let count = 5;
// const btnStart = document.getElementById('btnStart');
// const counter = document.getElementById('counter');
// let interval = null;
// btnStart.addEventListener('click', () => {
//     if (interval == null || count <= 1) {          
//         clearInterval(interval);  
//         interval = null; 
//         count = 5;      
//         document.body.style.backgroundColor = ''; 
//     }
//     if (interval == null) {
//         interval = setInterval(() => {
//             counter.innerText = count--;
//             if (count < 1)
//             {
//                 clearInterval(interval);
//                 document.body.style.backgroundColor = 'red';                        
//             }                                   
//         }, 1000);          
//     }           
// });


