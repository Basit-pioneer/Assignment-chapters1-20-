// CHAPTERN 5
// (MATH EXPRESSIONS)

// Task1.
var a = 20;
var b = 25;
var c = a + b;
document.write("sum of" + " " + a + " " + "and" + " " + b + " " +"is" + " " +c)

// Task2.
var $a = 20;
var $b = 25;
var $c = a - b;
document.write("<br>the substraction of " + " " + $a + " " + "from" + " " + $b + " " +"is" + " " +$c)

var A = 20;
var B = 25;
var C = a * b;
document.write("<br>the multiplication of " + " " + A + " " + "from" + " " + B + " " +"is" + " " +C)

var x = 20;
var y = 25;
var z = x / y;
document.write("<br>the division of " + " " + x + " " + "from" + " " + y + " " +"is" + " " +z)

var X = 20;
var Y = 25;
var Z = Y % X;
document.write("<br>the remainde of " + " " + Y + " " + "from" + " " + X + " " +"is" + " " + Z)

// Task3.
var value = 5;
document.write("<br> value after variable declaration is"+" " +value);
document.write("<br>initial value:"+ " "+value);
var value2 = ++value;
document.write("<br>value  after increment"+" "+value2);
var value2 = value + 7;
document.write("<br>value after addition is:"+" "+value2);
var value3 = --value2;
document.write("<br>value after decrement is:"+" "+value3);
value4 = value3 % 3;
document.write("<br>The remaindwer is:"+" "+value4)
// Task4.
tickets = "600";
total_cost = 5 * tickets;
document.write("<br>Total cost to buy 5 tickets to a movie is" + "  "+total_cost+"PKR")

// Task5.
for(j=4;j>4;j++);{
    for(i=1;i<=10;i++){
        document.write("<br>"+j+"x"+i+"="+j*i)
    }
}

// Task6.
celcius = 25;
fahrenheit = 77;

F = (celcius*9/5)+32;
document.write("<br>"+"<br>"+celcius+"C"+ "is" +F+"F");
C = (fahrenheit-32)*5/9;
document.write("<br>"+fahrenheit+"F"+ "is" +C+"C");

// Task7.
var item1 = 650;
var quantity1 = 3;
var item2 = 100;
var quantity2 = 7;
var charges = 100;
var costs = item1*3 + item2*7 + charges;
document.write("<br>"+"<br>"+"price of item 1 is "+item1);
document.write("<br>"+"quantity of item 1 is "+quantity1);
document.write("<br>"+"price of item 2 is "+item2);
document.write("<br>"+"quantity of item 2 is "+quantity2);
document.write("<br>shipping charges "+charges)
document.write("<br>Total cost of your order is "+costs)

// Task8.
var Total_marks = 980;
var obtained_marks =  804;
var percentage = 804/980*100;
document.write("<br><br>Total marks: "+Total_marks);
document.write("<br>obtained marks: "+obtained_marks);
document.write("<br>percentage: "+percentage)

// Task9.
pakRupees = 104.80*10 + 25*28;
document.write("<h2>Currency in PKR</h2>");
document.write("Total currency in PKR: "+pakRupees);

// Task10.
var val =  (20 +5 * 10)/2;

// Task11.
var current_year = 2016;
var birth = 1992;
var age = 2016-1992;
document.write("<h2>Age Caculater</h2>");
document.write("Current year: "+current_year);
document.write("<br>Birth  year: "+birth);
document.write("<br>Your age is: "+age);

// Task12.
var radius = 20;
var circumference = (2*3.142)*20;
var area = 3.142*(20*20);
document.write("<h2>The Geometrizer</h2>")
document.write("Radius of a circle: " + radius);
document.write("<br>The circumference is: " + circumference);
document.write("<br>The area is: " + area);

// Task13.
var snack = "Lays"
var my_age = 20;
var max_age = 65;
var snackPer_day = 2;
var max_amount = (65-20)*365*2
document.write("<h2>The Lifetime Supply Calculator</h2>")
document.write("Favourite snack: " + snack);
document.write("<br>current age: " + my_age);
document.write("<br>Estimated Maximum Age: " + 65);
document.write("<br>Amount of snacks per day: " + snackPer_day);
document.write("<br>you will need "+max_amount+" snacks to last you until the rip old age")