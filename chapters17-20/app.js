// CHAPTERS17-20
// (ARRAYS AND LOOP)

// Task1.
var activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

// Task2.
var num = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
for(var i=0;i<num.length;i++){
    document.write("<br>"+num[1])
}

// Task3.
for(i=1;i<11;i++){
    document.write("<br>"+i)
}

// Task4.
var table = prompt("Enter your  table");
var lengths = prompt("Enter length for multiplication");
for(i=table;i<=table;i++){
    for(j=1;j<=lengths;j++){
        document.write("<br>" + i + "x" + j + "="+i*j)
    }
}
// Task5.
var fruits =   ["apple","banana","mango","orange","strawberry"];
for(i=0;i<fruits.length;i++){
    document.write("<br>" + fruits[i])
}
for(i=0;i<fruits.length;i++){
    document.write("<br><br>Element at index "+i+" is "+fruits[i])
}

    
// Task7.
var bakery = ["cake","apple pie","cookie","patties"];
var search = prompt("welcome to our bakery","enter your item");
for(i=0;i<bakery.length;i++){
    if(bakery[i]==search){
        alert(search + " is available at index "+i+" in our bakery")
    }
    else if(search == " "){
        alert("please enter your name")
    }
    else{
        alert("we are sorry " + search + " is not available in our bakery")
    }
}

