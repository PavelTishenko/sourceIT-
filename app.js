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

 
// верх квадрата
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
// }         
//         console.log(rarr);
//         for (let j = 0; j <= arr.length/2; j++ ){
//                 let t = rarr[arr.length - j];  
//                 rarr[arr.length - j] = rarr[j] ; 
//                 rarr[j] = t;      
//         }
//         console.log(rarr);       
        
        //let newArr = [];
        //
// }       
             
//                         // console.log(rarr);
          



//  reverse полученного массива
// function reverse1(arr){
//         let rev1 = [];
//         for(let i = 0, j = arr.length-1; i < j; i++, j--){               

//         let rev = arr[j];
//             arr[j] = arr[i];
//             arr[i] = rev;

//         }
//         rev1.push(arr);
//  return console.log(rev1);

// }
// let arrR = [1, 2, '3', 4,'four', 6, 'true'];
// reverse1(arrR);




// создание нового и реверс его
// function reverced(arr) {
//         let rarr = [];
//         for( let i = 0; i < arr.length; i++){      
//                         rarr.push(arr[i]); 
//                    }       
//                  let newArr = [];
//                  let j = 1;  
//                  let num;     
//         while (j <= arr.length){
//                  newArr.push(j*2);
//                  j++;

//         for(let r = 0, g = newArr.length-1; r < g; r++, g--){               
//                  let rev = newArr[g];
//                      newArr[g] = newArr[r];
//                      newArr[r] = rev;
//                    };
//                         }          

// console.log(newArr);                        
// //console.log(newArr[3]);                        
//                         // console.log(rarr);
//         return console.log (rarr);

// }

// let num = [1, 2, 3, 6];
// reverced(num);



// создание нового и реверс его РАБОЧИЙ
// function rever(arr){
//         let rarr = [];
//         let num = 0;
//         for(let j = 0; j < arr.length; j++){
//                 //let i = 0;
//                 j = num;
//                 rarr.push(j);
//                 num++;
//                 // rarr[i][j] = num;
//                 // num++;
                
//                 // console.log(rarr);    
//         }

//         for(let r = 0, g = rarr.length-1; r < g; r++, g--){               
//                                  let rev = rarr[g];
//                                      rarr[g] =rarr[r];
//                                      rarr[r] = rev;
//                                    };
//                     console.log(rarr);
// }



// rever([4,5,6,7]);



// var arr1 = [1,2,3,4];

// function reverse (arr){
//         var len = arr.length;
//         for (var i = 0; i < arr.length / 2; i++){
//                 arr[i] = arr[len - 1 - i];

//         }
// }







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



//   function obj(name, age) {
//             this.name = name,
//             this.age = age,
//             this.grac = function gro(){
//                        return this.age + 6;
                        
//             }    
// }

// let user = new obj('Petr', 46);

// for (let prop in user){
//         // let counter  = 0;
//         // counter++;
//         console.log(prop);
// }


// console.log(user.grac());
// delete user.name;// удалили имя
// console.log(user.name);

// var arr = [1, 2, 15];
// delete arr[3];
// console.log(arr.length);
// arr[3] = true;
// console.log(arr);

// arr.splice(2, 2, "You are..", "greate");
// console.log(arr);

// var sl = arr.slice(1, 3);
// console.log(sl);
// console.log(arr);
//    var newArr = arr.concat(3, 4,  5);
//    console.log(newArr);
   



// var j = arr.toString();
// console.log(j.split()); // возвращает массив из стр в массив

// class Cat {
//         constructor(length, age){
//                      this.length = length;
//                      this.age = age;   
//         }

//         eat(){

//         }

// }
// let cat1 = new Cat(1, 10);
// console.log(cat1);


// var a = ['a', 'b'];

// console.log(a);

// var b = {
//         0: 'a',
//         1: 'b',
//         length: 2
// };
// console.log(b);



// class animal {
//        constructor(){
//                this.age = 10;
//        }

       
//         eat(){

//         }
// }

// class cat extends animal{
//         constructor() {
//                 super();
//                 this.mustache = true;
//         }
        
//         getVoice(){
//                 return 'miay-miay'
//         }
// };

// class dog extends animal {
//         constructor(){
//                 super(); // вызов родитеьлского конструктора
//                 this.mustache = false;
//                 this.tale = true;
//         }

        
//         getVoice(){
//                 return 'gav gav'
//         }
// };



// var cat1 = new cat();
// var dog1 = new dog();

// console.log(cat1.age);

// console.log(dog1);






// ДЗ 1 на 18.07.2018
// function find(arr, c){
//        // console.log(arr);
//         //console.log(c);
          
        
//         for (let i = 0; i < arr.length ; i++){ // пройдемся по массиву
//                 //console.log(arr[i]);
//              if ( arr[i] === c){
//                 var num = i;// если полученный аргумент равен элементу из массива  
//                  //console.log(num);// выводим индекс этого элемента                      
//             }  
                                             
//         }  
           
//             arr.forEach(function(item, i, arr){
//                 //console.log(`item: ${item}, index: ${i}`);
//                 for (let k = arr.length-1; k >= 0; k--){ // идем с конца массива
//                        if(item === arr[i-1]){ // если находим едентичный элемент с предыдушим
//                          console.log(-1); // выводим -1
                            
                       
                            
//                        } 
//                 }
//             });
                                                                          
         
//  return console.log(num);
  
         
// }


// find([1, 1,  true, 3, 'crew', 5], 'crew');

// var arr = [1, 1,  true, 3, 'crew', 5];





// function find(arr,c) 
// {
//     var arr_res = []; // результирующий массив

//     /* проход по массиву слева-направо */
//     for (var i=1; i < arr.length; i++) {                   
       
//         /* проходим массив в обратном порядке, начиная с элемента arr[i-1] */                   
//         for (var j=i-1; j >= 0; j--) { 
          
          
//             /* если ранее в массиве уже встречался элемент
//                с таким же значением как и у текущего, 
//                то помещаем это значение в результирующий массив
//                (предварительно проверив, нет ли там уже такого значения), 
//                завершаем внутренний цикл и переходим 
//                на следующую итерацию внешнего цикла*/ 
//              if (arr[j] == arr[i]) { 
                
                
//                 var is_unique = true; // флаг уникальности элемента
               
//                 for (var k=0; k < arr_res.length; k++) {
//                     if (arr_res[k] == arr[i]) {
                        
//                         is_unique = false;
//                 //         //break;
//                     }
//                 }
//                 if (is_unique) {
//                     //console.log(-1);
//                     arr_res.push(arr[i]); 
//                 }
//                 // break;
//             } 
//         } 
//     } 
//    return arr_res;
// }
// console.log(find(arr));
 
 







// Дз 2 на 18.07.2018
//  // this is how we will have random number 
// function randomNumber(min, max) {
//         return min + Math.floor(Math.random() * (max + 1 - min));
// }

// var arr =[];
// var arrL = 10;
// var num = 0;

// //  this's how we gona have array
// for (var i = 0; i < arrL; i++) {
//     arr[i] = [];

// for (var g = 0; g < arrL; g++) {
//     arr[i][g] = num;
//     num = randomNumber(1, 99) ;  // fill array with random number from 1 to 99
       
//         if(!(num % 5 === 0) ){ // check if our array el divide on 5
//                 num = 'false'; // if not change it to 'false' 
//         } 
//     }
          
// }

// console.table(arr);




// let arr = [1, 2, true];

// let n = arr.some(function(num){
//         return num <= 3;
        
// });
// console.log(n);






// var arr = [1, 1, 4, 3, 7, 6, 5];
// function compareNumbers(a, b){ /*Сортирует от меньшего к большему*/
//         if(a > b){return 1;} // что-бы сделать реверс нужно 
//         if(a < b){return -1;}// сменить знаки больше меньше в ифах
// }
// var s = arr.sort(compareNumbers)
// let s = [].concat([1, 2], [3, 4]);
// let s = arr.indexOf(1);

//let s = arr.slice(0, 2);// [1,2]

// arr.splice(0,2); // Результат: [3,4]

// arr.splice(0,2 , 'asc', 'csa');// результат: ['asc', 'csa', 3, 4]
// console.log(s); 



 
// var store = {}, 
// arr = [23, 325, 31231, 23];

// for(var i =0; i < arr.length; i++){
//         store[arr[i]] = i; // 
// }
// console.log(store);
// console.log(store[325]);
//  console.log(Object.keys(store)); // ключи объекта
  

// занятие 18.07.2018
// var obj = {
//         className: 'open menu'
// }

// function addClass(obj, str){
//         var arr = obj.className.split(' ');
//         if(arr.indexOf(str) > -1) {
//                 return;
//         }
//                 arr.push(str);
//                 obj.className = arr.join(' ');
// }

// addClass(obj, 'new');
// console.log(obj.className);
// addClass(obj, 'open')
// console.log(obj.className);
// addClass(obj, 'ept');
// console.log(obj.className);

// var arr = [1, -1, 2, 3];    
// // arr.forEach((item, index, arrTemp) => {

// // })

// var positArr = arr.filter(function(number){
//         return number > 0;
// })

// console.log(positArr);







// var arr = ['We', 'have', 'lifes'];

// var c = arr.map( function(arr){
//        return arr.length; 
// });
// console.log(c);



// function getSums(arr) {
//         var result = [];
//         if (!arr.length) return result;
      
//         arr.reduce(function(sum, item) {
//           result.push(sum);
//           return sum + item;
//         });
      
//         return result;
//       }
      
//       alert(getSums([1,2,3,4,5]));



function getHandM(){
        var newDate = new Date();
        var H = ("0" + newDate.getHours()).slice(-2); // adding 0 in the begining of hours
        var M = ("0" + newDate.getMinutes()).slice(-2); // adding 0 in the begining of minutes

        console.log(`${H}:${M}`);
}

getHandM();