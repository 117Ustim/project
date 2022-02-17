let one = document.querySelector('.one');
let input = document.querySelector('.input');



// document.querySelector('button').onclick = () => {
//     let a1 = [12, [45, 87], [55, 13]];
//     document.querySelector('.one').innerHTML = a1[2][0];
//     return a1[2][0];
// };


// document.querySelector('button').onclick = () => {
//     let a2 = [[12, 'hi'], [45, 87], [55, 13]];
//     document.querySelector('.one').innerHTML = a2[0][1];
//     return a2[0][1];
// };


// function f1 () {
// let a3 = [[1, 2, 3], [3, 4, 5], [6, [7, 'my']]];


//     document.querySelector('.one').innerHTML = a3[2][1][1];
//     return a3[2][1][1];

// }
// document.querySelector('button').onclick = f1;



// function f4() {
//     let a4 = [
//         [1, 2, 3], 'fac','go', [3, 4, 5],[6, [7, 'my']]];
        
    

//     for (let i = 0; i < a4.length; i++) {

//         document.querySelector('.one').innerHTML = a4[2];

//     }
// }
// document.querySelector('button').onclick = f4;


function f4() {
    let out = '';
    let a5 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for (let i = 0; i < a5.length; i++) {

        if( a5[i][0] % 2  ) out += a5[i][0] + ' ';
        if( a5[i][1] % 2  ) out += a5[i][1] + ' ';

    }
      document.querySelector('.one').innerHTML += out;
    }
    document.querySelector('button').onclick = f4;