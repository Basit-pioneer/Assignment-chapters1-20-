// CHAPTERS12-13
// (IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS)

// Task2.
var num1 = prompt("Enter your first number")
var num2 = prompt("Enter your second number")
if(num1>num2){
    alert(num1)
}
else if(num2>num1){
    alert(num2)
}
else if(num1 == num2){
    alert("both are equal")
}

// Task3.
var val = prompt("write your number")
if(val>0){
    alert("the number is positive")
}
else if(val<0){
    alert("the number is negitive")
}
else if(val == 0){
    alert("the number is zero")
}

// Task4.
var vowel = ["a","e","i","o","u"];
var char = prompt("Enter your character");
var char = char.toLowerCase();
for(i=0;i<vowel.length;i++){
    if(vowel[i]==char){
        alert("true! "+char+" it is a vowel character")
    }
    else{
        alert("false! "+char+" it is not a vowel character")
    }
}

// Task5.
var password = "basit123"
var check = prompt("Enter your password");
if(check === password){
    alert("Password is correct")
}
else if(check !== password){
   alert("password is incorrect")
}
else if(check == " "){
    alert("please enter your password")
}

// Task6.
var hour = 13;
if (hour < 18) {
  alert ("Good day")
}
else{
    alert("Good evening")
}
  
// Task7.
var time = prompt("Enter time");
if(time<=12 && time>4){
document.write("Good Morning")
}
else if(time>=12 && time<16){
    document.write("Good afternoon")
}
else if(time>=16 && time<=19){
    document.write("Good evening")
}
else if(time>19 && time<=24){
document.write("Good night")
}



