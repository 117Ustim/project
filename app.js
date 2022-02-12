// let a = [1,2,3,4,1,2,3,4];

// for( let i = 0;i < a[1];i++) {
// document.querySelector('.one').innerHTML += a[i];
// }

// let a = [3, 8, 'string', false];
// let out = document.querySelector('.out');
// document.querySelector('button').onclick = function () {
// for (let i = 0; i < a.length; i++)
// out.value += a[i] + ' ';
// };

// let a = [2, 4, 8, 12, 33];
// let one = document.querySelector('.one');

// for (let  i = 0; i < a.length;i++) {

// }
//  one.innerHTML += a.length ;  


// let m = [3, 5, 'fare', 2, 9, 'go-go'];

// let one = document.querySelector('.one');
 
// one.innerHTML += m[2]+ m[3]+ m[5];


// let m = [9, 23, 5, 33, 45, 21, 67];
// let one = document.querySelector('.one');

// let sum = m[0] + m[2] + m[3];
// one.innerHTML += sum;



// let m = ['Ustim','Taurus','14 may','1972'];
// let one = document.querySelector('.one');

// document.querySelector('button').onclick = function ()  {
//     for( let i = 0;i < m.length;i++) {
//       one.innerHTML += m[i] + ' ' ; 
     
    
//     }
//     one.innerHTML += m[0] + m[3];
// }; 


// let a =[];
// a['ar7'] = [' china',' india',' brasil',' japan',' egipty'];
// let one = document.querySelector('.one');

// document.querySelector('button').onclick = function ()  {

//     a.ar7.push(' italy',' turkey',' vietnam');
//   one.innerHTML += a['ar7'] + ' ';  

// };


// let one = document.querySelector('.one');
// m = ['test', 'west', 'list', 'class', 'best'];
// document.querySelector('button').onclick = function () {

//   let t = m[0];
// let a = m.length -1;
// let b =m[a];
// m[0] = m[a];
// m[a] = t;

// one.innerHTML += m ;

// };


// let one = document.querySelector('.one');
// let m = ['test', 'west', 'list', 'class', 'best'];
// document.querySelector('button').onclick = function () {

//   one.innerHTML += m.length -1 + '___ ';
// one.innerHTML += m.length + '___ ';
// };
 
  
// let one = document.querySelector('.one');
// let m = [1, 2, 1, 3, 4, 2, 10,  5, 6, 4, 9, 10];
// function f1() {

// let a = Array.from(new Set(m));
   
//   one.innerHTML += a;
// }
// f1(m);


// let one = document.querySelector('.one');
// let a = [1, 2, 3, 'hello', 66];

// function f1() {

//   for ( let i = a.length - 1 ; i > -1; i--) {

// one.innerHTML += a[i];
  
//   }
//   }   
// f1();

// let one = document.querySelector('.one');
// let a = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

// for ( let i = 0 ; i <= a.length -1; i++) {
//  if ( a[i] > 0) {

//   one.innerHTML += a[i] + ' ';
// }
// }

// let one = document.querySelector('.one');
// let one2 = document.querySelector('.one2');
// let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// let odd = [];
// let even = [];

// for ( let i = 0 ; i <= ar16.length -1 ; i++) {
// if ( ar16[i] % 2 == 0) {
//   odd.push(ar16[i]);  
   
// }else {
//   even.push(ar16[i]);

// } 
// }
// one.innerHTML += odd;
// one2.innerHTML += even;


// let one = document.querySelector('.one');
// let ar17 =  [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

// for ( let i = 0 ; i <= ar17.length -1 ; i++) {
//   if(ar17[i] > 2) {
//   one.innerHTML += ar17[i] + ' ';
// }
// }

// let one = document.querySelector('.one');
// let ar18 =  [1,15,24,13,78,21,4,45,67,91];
// let max = Math.max(...ar18);

// one.innerHTML += max;

// let one = document.querySelector('.one');
// let arr2 = [15,4,5,1];
// function f1(ar){
// let sum = 0;
// for(let i = 0; i < ar.length; i++){
//     sum += ar[i];
//     }
//     one.innerHTML += sum;
// }
// f1(arr2);
// !!!!!!!!

// let one = document.querySelector('.one'); 
// let out = document.querySelector('.out'); 
// let d1 = [33,'best', 66,'best'];
// function f1() {
 
//  d1.push(out.value);

// one.innerHTML += d1 + ' ';
//  }
//  document.querySelector('button').onclick = f1;


// let one = document.querySelector('.one'); 
// let out = document.querySelector('.out'); 

// function f2() {
// let d1 = [33,'best', 66, 'best',77];

//  out.value = d1.shift();
//  one.innerHTML += d1;
 
// }
// f2();

let one = document.querySelector('.one'); 
let out = document.querySelector('.out'); 
let m = [1,2,3,4,5];

function f3 () {

m.push(out.value);  
     
 one.innerHTML += m + ' ';


}  
document.querySelector('button').onclick = f3;
 