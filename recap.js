1// variable
var favoritebooks = 'arabic';

// Array
var frinedsage = [12,324,21,13,45,55,66,];
 frinedsage = frinedsage.indexOf(21);
 frinedsage[3] = '15';
 frinedsage = frinedsage [3];
 frinedsage.push('502000');
 frinedsage.pop();

//  conditinals
 if(frinedsage[2] == '13'){
    console.log('ami bari jabo');
 }
 else {
    console.log('ami jabona');
 }


//  while loop

 var number= 0;

 while ( number < 10){
    console.log('ami pass');
     number+= 2 ;
     console.log(number);
 }

//  for loop

 for(var i = 0; i <20 ; i++){
    console.log('ami khabo ');
    console.log(i);
 }

//  for loop & array loop

for(var i = 0; i < frinedsage.length; i++){
    var allfrinedsage = frinedsage [i] ;
   console.log(allfrinedsage);
}

