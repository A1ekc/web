//alert('Привет всем!');
//console.log('Привет всем!');

// Получить от пользователя два числа и вывести в диалоговое окно сумму значений например 2+3 = 5 а не 23
//Сумма 1 вар*********************************
// const a = parseFloat(prompt('Введите число а'));
// const b = parseFloat(prompt('Введите число b'));
// alert(`Результат сложения чисел ${a}  и ${b} равен ${a + b}`);

//Сумма 2 вар***********************************
// function getNumber(){
//     const result = 5 + 10;
//     return result;
// }

// const num = getNumber();
// console.log(num);

// Вторая задача****************************8
// function sum(num1, num2){
//     const result = num1 + num2;
//     return result;
// }

// function showConsoleResult(result){
//     console.log(`Результат программы: ${result}`);
// }

// const num = sum(15,10);
// showConsoleResult(num);

//Третья задача******************************
// Задача 3: Написать функцию, которая принимает имя пользоватля
// при её вызове и выводит сообщение с пиветствием пользоватля по именм
// проверить работоспособность функции.

// function sayHello(userName) {
//     console.log(`Привет, ${userName}`);
// }
// const userName = prompt("Введите имя");
// sayHello(userName);

//Четвертая задача
// Вывести на экран в дмалоговом окне текст с сообщением "Вам хорошо живется?"
// и кнопри ОК и ОТМЕНА , для чего необходимо использовать confirm
// При нажатии на кнопку ОК вывести в диалоговои текст с сообщением "Тогда мы идем к вам"
// При нажатии на кнопку Отмена вывести в диалоговои текст с сообщением "Ну вы держитесь там"

// const result = confirm("вам хорошо живется?")
// if (result){
//     alert("Тогда мы идём к вам!")
// } else {
//     alert("Ну вы держитксь там")
// }

//Пятая задача switch**************
// const age = Number.parseInt(prompt("Введите ваш возраст"));
// switch (age) {
//     case 18:
//         alert('Вы совершеннолетний, всё можно!');
//         break;
//     case 10:
//         alert('Вам надо учить уроки');
//         break;
//     case 30:
//         alert('Ложитесь спать. завтра на работу');
//         break;
//     default:
//         alert('Мы не знаем что вам делать'); 
// }


//Шестая задача***********************
// Функция getMaxEventElement принимает массив с целыми числами, необходимо
// ревлтзовать функцию так чтобы она возврощала значения большего элемента массива
// который записан в чётном индексе влючая 0

// function getMaxEventElement(arr) {
//     let max = arr[0];
//     for (let i = 2; index < arr.length; index += 2) {
//         if (arr[i] > max){
//             max = arr[i];
//         }  
//     }
//     return max;

// }

// console.log(getMaxEventElement([5,7,-1,12,3,0]));//5
// console.log(getMaxEventElement([4,-12,29,6,31,92,-50]));//31

