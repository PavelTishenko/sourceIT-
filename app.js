 "use strict"; // использование строгого режима


// //  Численное преобразование с помощью "+"
// var a = +"123"; // "+" преобразует "123" в число
// console.log(a);
// console.log(typeof(a));
//   if (typeof(a) == 'number') {
//     alert("number !");
//   } else {
//     alert("Not a number !");
//   }



// //***********************  перевод из одной системы исчесления в другую
// var access = parseInt("110001", 2); // получаем число из строки
// alert( access ); // 24, число с таким 2-ным представлением
// var access2 = access.toString(2); // обратно двоичную строку из числа
// alert( access2 ); // 11000







// 8********************************** Функции

//  Аргументы по умолчанию
// function txt(from, text){
        // вариант 1 
        // if (text === undefined){
        //   text = 'текст не передан';

        // вариант 2
        // {
        // text = text || 'текст не найден';
        // };

//         alert(from + ": " + text);
//       }
// txt("Маша", );




//***********  Оператор вопросительный знак "?" "Условие ? значение1 : значение2"

// function checkAge(age){
//     (age  > 18) ?  alert('Go') : confirm('Do you get agreement ?');  

// }

// checkAge(17);


// *********** function declaration, функция объявляется в основном потоке кода
// Создается до выполнения кода, функции можно вызывать до объявления 
// function() {

// }



// //*********** function expression, функция объявляется в контексте какого либо выражения ("=" например)
// // 
// var f = function(){

// }



// function expression
// var age = prompt('How old are you ? ', 20);
// var sayHI;    

//     if (age >= 18) {
//        sayHI  = function(){
//                 alert('Welcome');
//               }   
//               } else {
//         sayHI = function(){
//                 alert('Your age less than we need');
//         }
//       }

    

//     sayHI();


// Анонимные функции  

// function ask(question, yes, no) {
//   if(confirm(question)) yes()
//   else no();
// }


// function showOK(){
//   alert("Good");
// }

// function showCancel(){
//   alert("Cancel");
// }
// ask("Are you agree ?", showOK, showCancel);



// **** Задачи функции
//   
// function ifItsTrue(){
//     var ofName = prompt("Wich name is oficial for JS ?");
//         if (ofName == "ECMAScript"){
//             alert("Right answer");
//         } else {
//           alert("How ? You dont know ? It's ECMAScript");
//         }

// }
// ifItsTrue();



// **** Задачи функции

// function checkNum(){
//   var num = prompt("Enter the number");
//   if (num > 0 ){
//       alert(1);
//   }else if (num < 0) {
//       alert(-1);
//   }else{
//       alert(0);
//   }
// }
// checkNum();



// **** Задачи функции

// function checkNum(){
//   var num = prompt("Enter login");
//         if (num == "Admin"){
//            var checkPass = prompt("Enter password");
//                    if(checkPass == "Black King" ){
//                            alert("Welcome my King"); 
//                    }else if (checkPass == null){
//                            alert("You gona disconnect"); 
//                    }else{
//                            alert("Password incorect"); 
//                    } ;

//         }else if (num == null){
//             alert("Disconnect");
//         }else{
//             alert("I dont know you");
//         };
// }

// checkNum();


//**** Задачи функции 

// function checkSmsng(a, b){
//   (a + b < 4) ? alert('Small nmbr') : alert ('Big nmbr');
// }
// checkSmsng(2, 2);


//**** Задачи функции

// function checkNum() {
//      var login = prompt("Enter your login");
//            (login == "Vasya") ? alert("Privet"):
//            (login == "Director") ? alert("Zdraste"):
//            (login == "") ? alert("No login"):
//                 alert("Cenceled");
//               }
//       checkNum();



// ****************Switch 

// **** Задачи Switch

// if (browser == "IE"){
//     alert('Wow, you have IE !');
// }else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
//     alert('Yes, we can handle with this browsers to');
// }else {
//   alert('I think you don`t have problems with that');
// }

// **** Задачи Switch

// var a = +prompt('A?', '');

// switch (a) {
//   case 0 : alert(0);
//     break;
//   case 1 : alert(1);
//     break;
//   case 2 : 
//   case 3 :
//           alert("2, 3");
// }

var num = prompt('Number');

