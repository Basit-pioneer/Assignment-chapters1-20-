// CHAPTERS9-11
// (USER INPUT  & CONDITTIONAL STATEMENT)

// Task1.
var cities = prompt("Enter you city");
if (cities == "karachi"){
    alert("welcome to the city of light")
}
else{
    alert("we don't know about"+cities)
}
 
// Task2.
gender = prompt("Enter your gender")
if(gender == "male"){
    alert("Good morning sir")
}
else if(gender == female){
    alert("Good Morning Ma'am")
}

// Task3.
traffic_colors = prompt("Enter your traffic color")
    if(traffic_colors  == red){
        alert("must stop")
    }
    else if(traffic_colors == yellow) {
        alert("ready to move")
    }
    else if (traffic_colors == green){
        alert("move now")
    }

// Task4.
petrol = prompt("Enter remaining fuel:")
if(petrol == 0.25 || petrol<=0.25){
    alert("please refil the fuel in your car");
}
else{
    alert("you have enough fuel for drive");
}

// Task5.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");}



gussedNum = prompt("Enter your gussed number");
numbers = [1,2,3,4,5,6,7,8,9,10]


for(i=0;i<numbers.length;i++){
    if(gussedNum == numbers[i]){
        alert("Bingo!Correct answer")
    }
    else if(gussedNum == 11 || gussedNum == 0){
        alert("Close enough to the correct answer")
    }
}


check = prompt("Enter your number:");
if(check/3 == 0){
    alert("it is divisiable by 3")
}
else{e
    alert("it is not divisiable by 3")
}