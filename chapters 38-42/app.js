//    (FUNCTION,SWITCH STATEMENTS, WHILE.... DO WHILE LOOPS)
//                   (CHAPTERS 38-42)
// Task 1.
function power(a,b){
    calculate = b-a

}

// // Task2.
function determine(){
    input = prompt("enter year")
    if(input%4 == 0){
        alert(input + " is a leap year")
    }
    else{
        alert(input + " is not a leap year")
    }
}
determine()

// // Task3.
function val_S(){
    var s = ("a+b+c")/"2"
    alert(s)
}
val_S()
var Area = val_S() (val_S() - "a")(val_S() - "b")(val_S() - "c")

function area(){
    alert(Area)
}
area()

// Task4.
var sub1 = +prompt("Enter your first subject");
var sub2 = +prompt("Enter your second subject");
var sub3 = +prompt("Enter your third subject");

function  func1(){
    avreage = (sub1 + sub2 + sub3)/3
    return avreage
}
var val1 = func1()

function func2(){
    percentage = (sub1 + sub2 + sub3)/300*100
    return percentage
}
val2 = func2()

function mainFunc(){
    alert("your number per subject "+val1) 
    alert("your subjects percentage is "+val2+"%") 

}
mainFunc()

// //Task5.
var inpt =  prompt("enter your word")
var InPt = prompt("which lettrs you want finds index of")
function Indexof(InPt){
    for(var i=0;i<inpt.length;i++){
        if(InPt == inpt[i]){
            alert(i)

        }
    }
}
Indexof(InPt)

// // Task6.
var inPut = prompt("Enter your sentence")
function Sent(){
     Replace = inPut.replace(/a/g,"(deleted)")
        alert(Replace)
    
}
Sent()

// Task7.
var country = "pakistan is a beautiful country "
for(var i=0;i<country.length;i++){
        Save = country.slice(i,i+2)
        switch(Save){
                case "ea":
                        document.write("<br>"+"ea")
                        break;
                
        }       
}
                         
// // Task8.
var distance = prompt("Enter cities distance in kilo metre")
function metre(){
        Metre = distance*1000
        alert("the distance two cities in metre is "+Metre+"metre")
}
metre()

function feet(){
        Feet = distance*3280.84
        alert("the distance two cities in feet is "+Feet+"feet")
}
feet()

function inches(){
        Inches = distance*39370.1
        alert("the distance two cities in inches is "+Inches+"inches")
}
inches()

function centimetre(){
        Centimetre = distance*100000
        alert("the distance two cities in centimetre is "+Centimetre+"centimetre")
}
centimetre()

// // Task9.
function overTime(){
        var a = 40*12-12;
        alert("the over time amount of repees is "+a);
}
overTime();

// // Task10.
var withdraw = prompt("Enter your aamount")
function Notes(){
        if(withdraw>=100 && withdraw<110){
                document.write("1 Hundred note")
        }
        
}