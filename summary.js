
// variable 
var name = 'shkaib';

// array 
var friends = ['shakib','rakib','ashik','mahdi'];

// change the array Element 
friends [2] = 'kasem';

//  check the array Element
console.log(friends.indexOf('rakib'));
// or //
if(friends.indexOf('said') == -1){
    console.log('said is available');
}

if(friends.indexOf('rakib') !=-1 ){
    console.log('rakib is available');
}

// loop

var number = 0;
while(number<10){
    number++;
    console.log(number);
}

for(var i=0 ; i<20; i++){
    console.log('run',i);
}

// forloop Array

var friends = ['shakib','rakib','ashik','mahdi'];
for(var i=0 ; i<friends.length; i++){
    var allfriends = friends[i];
    console.log('run',allfriends);
}

// function

function addthreenumbers(number1, number2,number3){
    var allnumber = number1 +number2+ number3 ;
    return allnumber ;
}
 var result = addthreenumbers(10,20,30);
 console.log(result);

//  Object
var computer ={
    name:'dell',
    ram:'50gb',
    prossesor:'5G',
    bet:'64bet',
}

// change Object property
computer.ram ='30gb';
computer['ram']='10gb';
console.log(computer);

