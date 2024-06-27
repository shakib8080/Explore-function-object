// var i = 0 ;
// while(i < 20){
//     console.log('cholo',i);
//     if(i == 10){
//         break;
//     }
//     i++
    
// }

// for(var i = 0 ; i < 20; i++){
//    console.log(i);
// if(i == 10){
//     break;
// }
// }

// var numbers = [54,35,21,98,23,101,45,67];

// for(var i= 0; i<numbers.length ; i++){
//     var number = numbers[i];
    
//     if(number > 90){
//        break;
//     }
//     console.log(number);
// }



// var names = ['shak','rakib','sojib','suny'];
// var i = 0;
// while(i< names.length){
//     i++;
//     var allname = names[i];
//     console.log(allname);
//     console.log(names.length);
//     console.log(allname);
// }



var number = [50,40,44,63,35,75,35,64,46,];
for(var i = 0 ; i< number.length ;i++){
    var allnumber = number[i];
    if(allnumber<63){
        break;
    }
    console.log(allnumber);
}


var number = [50,40,44,63,35,75,35,64,46,];
for(var i = 0 ; i< number.length ;i++){
    var allnumber = number[i];
    if(allnumber > 60){
        continue;
    }
    console.log(allnumber);
}