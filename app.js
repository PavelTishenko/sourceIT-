 "use strict"; // использование строгого режима

// *************
// var user = {
//   name: "Vasya",
//   age: 30,
// };
// console.log(user);

// var arr = [{name: 'Vasya'}, {name : 'Koul'}];
//  console.log(typeof arr[0])



// function user (name, age) {
//   this.name = name,
//   this.age = age
// }

// let user1 = new user("Vasya", 34);
// console.log(user1);

// let user2 = new user ("Petya", 25);
// console.log (user2);

// let users = user1 === user2;
// console.log(users);





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
//        var num = prompt("Enter the number");
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
//         if (num === "Admin"){
//            var checkPass = prompt("Enter password");
//                    if(checkPass === "Black King" ){
//                            alert("Welcome my King"); 
//                    }else if (checkPass === null){
//                            alert("You gona disconnect"); 
//                    }else{
//                            alert("Password incorect"); 
//                    } ;

//         }else if (num === null){
//             alert("Disconnect");
//         }else{
//             alert("I dont know you");
//         };
// }

// checkNum();


//**** Задачи функции 

// function checkSmthng(a, b){
//   (a + b < 4) ? alert('Small nmbr')/* if (true) */ 
//    : alert ('Big nmbr'); /* if (false) */ 
// }
// checkSmthng(1, 2);

// var val = 10 
//           ? val > 10 
//             ? console.log('You are right')
//               : alert(':(')
//           : alert(':(((((');  
            


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
//   alert('I think you will not have problems with that');
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


//******************  Логические операторы 


// // // ****

// function users (name, age){
//   this.name = name,
//   this.age = age
// }

// let user1 = new users("Klark", 31)

//       if (user1 || user1.name == "John"){
//           console.log('o kurva');
//           ('O kurva !');  
//       } else {
//         console.log('O blat');
//       }


// Проверка if  внутри диапазона
// let nmb1 = 15;
// let nmb2 = 29;
// if (nmb1 >= 14 && nmb2 <= 90){
//     console.log('Done');
// }


// Проверка if  вне диапазона
// let nmb1 = 1;
// let nmb2 = 91;

// if (!(nmb1  >= 14 && nmb2 <= 90 )){
//      console.log('Done');
                
// }

// ********Рекурсия - вызов функции 

// function pow(x, n) {
//   if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
//     return x * pow(x, n - 1);
//   } else {
//     return x;
//   }
// }

// alert( pow(2, 3) ); // 8


// let arr = [3, 1, 6, 2, 8 ];
//     arr.sort();

//     console.log(arr);
    
      

// var pr=[]; // объявить массив
//     // for(var i = 0; i<3; i++) 
//     pr.push(prompt('Enter your numbers: '));// записать значения в массив
//     for(var i = 0; i<3; i++) 
//     // console.log(pr[i]+" ");
//     console.log(pr);
//     // console.log(typeof(pr[0]));
//     // console.log(typeof(+pr[2]));

// let numbers = prompt('Enter numbers: ');





//  Решение уно
// let arr = [];
// for (let i = 0; i < 3; i++){ 
//            arr.push(prompt('Enter your numbers:'));
//            console.log(arr);
//            }
// for (let i = 0; i < 3; i++){
//            arr[i] = +arr[i];
//            console.log(arr); 
//           }           
//            arr.sort(function(a, b){
//            return a - b;
//           });
//             console.log(arr);


// Решение дос

//var stringArray = ['Голубая', 'Горбатая', 'Белуга'];
// var arr = prompt('Enter nmbrs: ');
// var numericStringArray = [arr];
// //var numberArray = [40, 1, 5, 200];
// //var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }

// // снова предполагаем, что функция печати определена
// //console.log('stringArray:', stringArray.join());
// //console.log('Сортировка:', stringArray.sort());

// // //onsole.log('numberArray:', numberArray.join());
// // console.log('Сортировка без функции сравнения:', numberArray.sort());
// // console.log('Сортировка с функцией compareNumbers:', numberArray.sort(compareNumbers));

// console.log('numericStringArray:', numericStringArray.join());
// console.log('Сортировка без функции сравнения:', numericStringArray.sort());
// console.log('Сортировка с функцией compareNumbers:', numericStringArray.sort(compareNumbers));

// // console.log('mixedNumericArray:', mixedNumericArray.join());
// // console.log('Сортировка без функции сравнения:', mixedNumericArray.sort());
// // console.log('Сортировка с функцией compareNumbers:', mixedNumericArray.sort(compareNumbers));

// for (let i = 0; i <= 100; i++){
//       if (i % 3 ===0 && i % 5 === 0){ 
//           console.log(i +" super buper");
//       }else if(i % 5 === 0) {
//         console.log(i + ' buper');
//       }else if (  i % 3 === 0 ){
//         console.log(i + ' super ');
//       }else{
//         console.log(i);
//       }
// }

// let arr =[ [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11,12, 13, 14, 15]];




// var arrLenght = 10,
// arr = [],
// val = 0;
// // создаем двумерный массив, заполненый числами от 0 до 99
// for (var i = 0; i < arrLenght; i++) {
// arr[i] = [];

// for (var j = 0; j < arrLenght; j++) {
// arr[i][j] = val;
// val++;
// }
// }

// console.table(arr);

// var resultArray = [];
// // верх квадрата
// for (var i = 0; i < arrLenght; i++) {
// resultArray.push(arr[0][i]);
// }
// // правая сторона без первого и последнего элеметнов
// for (var i = 1; i < arrLenght - 1; i++) {
// resultArray.push(arr[i][arrLenght - 1]);
// }
// // низ без последнего элемента
// for (var i = arrLenght - 1; i > 0; i--) {
// resultArray.push(arr[arrLenght - 1][i]);
// }
// // левая сторона без последнего элеметна
// for (var i = arrLenght - 1; i > 0; i--) {
// resultArray.push(arr[i][0]);
// }

// console.log(resultArray);



// **************************
//  ДЗ на 11.07. 2018       *
// **************************



// ********Chapter 1 Decision numero ONE 
// var arrL = 100;
// var arr = [];

// for (var i = 0; i <= arrL; i++ ){
//     if (i % 5 === 0){
//         //console.log(i);
//           arr.push(i);     
//     }
        
// }
// console.log(arr);



// //**********Chapter 1   Decision numero TWO
// var arrL = 100;
// var arr = [];

// for (var i = 0; i <= arrL; i+= 5 ){
//      arr.push(i);
//   }
// console.log(arr);



//****** Chapter 2 Decision ONE

// var arr =[];
// var arrL = 10;
// var num = 0;
// //  this's how we gona have array
// for (var i = 0; i < arrL; i++) {
//     arr[i] = [];

// for (var g = 0; g < arrL; g++) {
//     arr[i][g] = num;
//     num++;  
//   }
// }
// console.table(arr);


// var finalArr = [];

// // left side of array.table
// for (var i = 1; i < arrL-1; i++) {
//     finalArr.push(arr[i][0]);
// }
// // console.log(finalArr);

// // bottom 
// for (var i = 0; i < arrL - 1; i++) {
// 	  finalArr.push(arr[arrL - 1][i]);
// }
// //  console.log(finalArr);

// // right side of array.table 
// for (var i = arrL - 1; i > 0; i--) {
// 	  finalArr.push(arr[i][arrL - 1]);
// }
// // console.log(finalArr);

// // top of array.table
// for (var i = arrL - 1; i >= 0 ; i--) {
// 	  finalArr.push(arr[0][i]);
// }
// console.log(finalArr);


// ********* Chapter 2 with "while"

// var arr =[];
// var arrL = 10;
// var num = 0;

// //  this's how we gona have array
// var i = 0;
//     while ( i <=  arrL ) {
//           arr[i]=[]; // создает массивы 
           
    
//       //console.log(arr);     
//     var g = 0;
//         while (g <= arrL){
//               arr[i][g] = num;
//               num++; // счетчик числа        
//               g++;  // индекс числа в массиве 
//             }
//               i++; // счетчик массива 
//     }
//   // console.log(arr);
// /*  Создается массив  с помощью 1-го while
//     С помощью 2-го заполняется: num - это цыфры в массивах, g -это индекс чисел в масивах 
//      i - это индекс массива. Имеют они такое месторасположение, потому что нужно заполнить созданый массив, 
//      а потом создавать новый. Иначе не возможно было бы посчитать с какого числа начнется след массив. Ну, либо начинать с нуля )))) Ну либо, мне совсем в голову напекло и я ничего не пойму ))))*/

//    var finalArr = [];

// // // left side of array.table
// i = 0;
// while ( i < arrL-1) {     
//     i++;
//     finalArr.push(arr[i][0]);
//   }
// // console.log(finalArr);

// // bottom 
// i = 0 ;
// while ( i < arrL - 1) {
//        i++;
// 	      finalArr.push(arr[arrL - 1][i]);
//   }
// //  console.log(finalArr);

// // right side of array.table
// i = arrL - 1; 
// while ( i > 0 ) {
//        i--;
// 	      finalArr.push(arr[i][arrL]);
//   }
// // console.log(finalArr);

// // top of array.table
// i = arrL ;
// while (i > 0 ) {
//        i--;
//        finalArr.push(arr[0][i]);
//   }
// console.log(finalArr);






// ************Objects 

// let users = function(name, age, number) {
//             this.name = name,
//             this.age = age,
//             this.number = number
//           }

// let us1 = new users('Vasya', 40, 342);

//           console.log(us1);
                  
//  //  Clone properties from us1{} to clone{}
// let clone = {};
//     for (let key in us1){ 
//         clone[key] = us1[key];
//       }

//     clone.name = "Petya"
//     clone.age = 20;
//     clone.number= 654;
//            console.log(clone.name, clone.age, clone.number);


//  // Перебор свойств объекта и значений этих свойств          
//  let menu = {
//       width: 300,
//       heght: 200,
//       title: "Menu"
//    };
//     for (let propMenu in menu){
//           console.log(propMenu, menu[propMenu]);
//     }    

//  Узнаем сколько в объекте свойств
//  let menu = {
//         width: 300,
//         heght: 200,
//         title: "Menu",
//         color: "Red"
//  };

// let counter = 0;  // счетчик 
// for (let nmbOfProperties in menu){ // 
//       counter++; // step
// }
// console.log(counter);





//*****Массивы и их методы( forEach, map, filter, every, some, reduce and reduceRight)


//split(s)
// let names = 'Masha, Petya, Marina, Vasiliy';

// let arr = names.split(', ', 2); // позволяет превратить строку в массив, разбив с помощью ","

// for (let i = 0; i < arr.length; i++){
//     alert('You have a message: ' + arr[i]);
    
// }


//  у метода split() есть второй аргумент(не обязательный) - ограничение на количество элементов в массиве. 
//  split(',', 2) 


        // top - left - diag \
// var arr =[];
// var arrL = 10;
// var num = 0;
// //  this's how we gona have array
// for (var i = 0; i < arrL; i++) {
//     arr[i] = [];

// for (var g = 0; g < arrL; g++) {
//     arr[i][g] = num;
//     num++;  
//   }
// }
// console.table(arr);

// var finalArr = [];
// // top of array.table
// for (var i = 0; i < arrL ; i++) {
//         finalArr.push(arr[0][i]);
// }
// //console.log(finalArr);

// //right side of array.table 
// for (var i = 0; i < arrL  - 1; i++) {
// 	  finalArr.push(arr[i][arrL - 1]);
// }
// // console.log(finalArr);
// for (var i = arrL - 1; i > 0; i--){
//         finalArr.push(arr[i][i]);
//         //    ();     
// }

// console.log(finalArr); 




// *******************************
// //******* Ракушка *************
// *******************************

// var arr =[];
// var arrL = 10;
// var num = 0;
// //  this's how we gona have array
// for (var i = 0; i < arrL; i++) {
//     arr[i] = [];

// for (var g = 0; g < arrL; g++) {
//     arr[i][g] = num;
//     num++;  
//   }
// }
// console.table(arr);
     
// var finalArr = [];

 
// // верх квадрата
// for (var i = 0; i < arrL; i++) {
// 	finalArr.push(arr[0][i]);
// }
// // правая сторона без первого и последнего элеметнов
// for (var i = 1; i < arrL - 1; i++) {
// 	finalArr.push(arr[i][arrL - 1]);
// }
// // низ без последнего элемента
// for (var i = arrL - 1; i > 0; i--) {
// 	finalArr.push(arr[arrL - 1][i]);
// }
// // левая сторона без последнего элеметна
// for (var i = arrL - 1; i > 0; i--) {
// 	finalArr.push(arr[i][0]);
// }

// //  console.log(finalArr);

// for (var i = 1; i < arrL-1; i++ ){
//         finalArr.push(arr[1][i]);
// }
//         // console.log(finalArr);
       
//  for (var i = 2; i < arrL - 1; i++) {
//         finalArr.push(arr[i][arrL -2]);
//         }       
//         //        console.log(finalArr);
              
              
//  for (var i = arrL - 3; i > 0; i--) {
//         finalArr.push(arr[arrL - 2][i]);
//         } 
//         // console.log(finalArr);

        
// for (var i = arrL - 2; i > 1; i--) {
// 	finalArr.push(arr[i][1]);
// }
// //   console.log(finalArr);


// for (var i = 2; i < arrL-2; i++ ){
//          finalArr.push(arr[2][i]);
// }
// //   console.log(finalArr);

//   for (var i = 3; i < arrL - 2; i++) {
// 	finalArr.push(arr[i][arrL - 3]);
// }
// //  console.log(finalArr);

//  // bottom
//  for (var i = arrL - 4; i > 1; i--) {
// 	finalArr.push(arr[arrL - 3][i]);
// }
// //  console.log(finalArr);

//  // left
// for (var i = arrL - 4; i > 2; i--) {
// 	finalArr.push(arr[i][2]);
// }
// // console.log(finalArr);


// //  top
// for (var i = 3; i < arrL-3; i++ ){
//         finalArr.push(arr[3][i]);
// }
// //  console.log(finalArr);

// //  right
// for (var i = 4; i < arrL - 3; i++) {
// 	finalArr.push(arr[i][arrL - 4]);
// }
// //  console.log(finalArr);
  
// // bottom
// for (var i = arrL - 5; i > 2; i--) {
// 	finalArr.push(arr[arrL - 4][i]);
// }
// // console.log(finalArr);

// // left
// for (var i = arrL - 5; i > 3; i--) {
// 	finalArr.push(arr[i][3]);
// }
// // console.log(finalArr);

// // top
// for (var i = 4; i < arrL-4; i++ ){
//         finalArr.push(arr[4][i]);
// }
// // console.log(finalArr);


// //  right
// for (var i = 5; i < arrL - 4; i++) {
// 	finalArr.push(arr[i][arrL - 5]);
// }
// //  console.log(finalArr);

// // bottom
// for (var i = arrL - 6; i > 3; i--) {
// 	finalArr.push(arr[arrL - 5][i]);
// }
// // console.log(finalArr);

// // left
// for (var i = arrL - 6; i > 4; i--) {
// 	finalArr.push(arr[i][4]);
// }
// console.log(finalArr);






 //  for (var i = 4; i < arrL - 3; i++) {
// 	finalArr.push(arr[i][arrL - 4]);
// }
//  console.log(finalArr);

// for (var i = arrL-2; i > 0; i-- ){
//                finalArr.push(arr[2][i]);
// }
//         console.log(finalArr);




//*****  ДЗ  reverse function 


// function esrever() {
//         let arr = [1, 2, 3];   
//         return arr.reverse();
// }

// console.log(esrever());



// function esrever1(){
//         let arr = [];
//         for (let i = 0; i < 3; i++){ 
//                    arr.push(prompt('Enter your numbers:'));
//                  //console.log(arr);
//                 }
//         for (let i = 0; i < 3; i++){
//                    arr[i] = +arr[i];
//                  //console.log(arr); 
//           }           
//         return arr.reverse();
// }

// console.log(esrever1());


// function esrever() {
//         let arr = [];
//         for (let i = 0; i < 3; i++){ 
//                    arr.push(prompt('Enter your numbers:'));
//                  //console.log(arr);
//                 }
//         for (let i = 0; i < arr.length; i++){
//                    arr[i] = +arr[i];
//                  //console.log(arr); 
//           }
//           console.log(arr.reverse());
// }
// esrever();


// function reverced(arrToRev){
//         let arr = [];
//         arr.push(arrToRev);
//         console.log(arr.reverse()); 
// }

// let arr2 = [1, 2, 3];
// reverced(arr2);


// function reverced(arr) {
//         let rarr = [];
//         for( let i = 0; i < arr.length; i++){      
//                         rarr.push(arr[i]); 
//                         }        
//                         // console.log(rarr);
//         return console.log (rarr.reverse());

// }

// let num = [1, 2, 3, 6];
// reverced(num);



// function reverced1(arr) {
//         let rarr = [];
//         for( let i = 0; i < arr.length; i++){      
//                         rarr.push(arr[i]); 
//                         }        
//                         // console.log(rarr);
//         console.log(rarr.reverse()); 
// }   

// let num = [1, 2, 3, 6];
// reverced1(num);


// function reverced1(arr) {
//         var rarr = [];
//         for( var i = 0; i < arr.length; i++){      
//                 arr[i] *= arr.length;
//                 rarr.push(arr[i]); 
//                         }        
//                         // console.log(rarr);
//         return console.log(rarr.reverse()); 
                                      
// }       

//         var num = [1, 5, 3, 6, 10];
//         reverced1(num);








