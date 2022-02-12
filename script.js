' use strict';

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start:function (){
       personalMovieDB.count =+prompt('Сколько фильмов вы уже посмотрели?', '');
while(personalMovieDB.count ==''||personalMovieDB.count ==null||isNaN(personalMovieDB.count))
      {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
},
rememberMyFilm: function (){
for (let i = 0; i < 2; i++){
   const a = prompt ('Один из последних просмотренных фильмов?', ''),
         b = prompt ('На сколько оцените его?', ''); 
      if ( a != null && b != null && a != '' && b !='' && a.length < 50){
         
         personalMovieDB.movies[a] = b;
         console.log ('done');

      } else {
         console.log('Error');
         i--;
      }
}
},

detectPersonalLevel: function(){
   if (personalMovieDB.count < 10) {
      console.log ('Мало фильмов');
   }
      else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log('Нормально фильмов');
      }
         else if(personalMovieDB.count >= 30){
            console.log('Вы киноман');
         } else {
            console.log('ошибка');
         }
            },
          

            showMyDB :function(hidden){
               if (!hidden){
                  console.log(personalMovieDB);

               }
            },
toggleVisib : function() {
if (personalMovieDB.privat){
   personalMovieDB.privat = false;
}else {
      personalMovieDB.privat = true;
   }

},
writeYourGenres: function() {
   for (let i = 1; i <= 3; i++){
      personalMovieDB.genres[i -1]= prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

};

// console.log(personalMovieDB);

// const options = {
//    name:'test',
//    width : '1024',
//    height: '1024',
//    color: {
//       bolder: 'black',
//       bg:'red'
//    }
// };
// console.log(Object.keys(options).length);