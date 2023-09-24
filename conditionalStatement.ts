// If Statement
// if (condition) {
//     // Code to be executed if the condition is true
//   }

let myAgeNow = 15;
if(myAgeNow >=18){
    console.log("You are an adult");
}

// Else if Statement
// if (condition1) {
//     // Code to be executed if condition1 is true
//   } else if (condition2) {
//     // Code to be executed if condition2 is true
//   }

let num3 = -10;
if(num3>0){
    console.log('This is positive Number');
}
else if(num3<0){
    console.log('This is Negative number');
}

// The Else Statement
// if (condition) {
//     // Code to be executed if the condition is true
//   } else {
//     // Code to be executed if the condition is false
//   }

let num4 = 0;
if(num4>0){
    console.log('This is positive Number');
}
else if(num4<0){
    console.log('This is Negative number');
}
else{
    console.log('This is a Zero');
}

// Nested Condition

let num5 = 0;
if(num5>=0){
    if(num5===0){
        console.log('Number is zero')
    }
    else{
        console.log('Number is Positive')
    }
}
else{
    console.log('Number is negative');
}