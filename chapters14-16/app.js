// CHAPTERS14-16
// (ARRAYS)

// Task1.
var arr = [];

// Task2.
var arr1 = {};

// Task3.
var Name = ["basit","bilal","amjid"];

// Task4.
 var rollNum = [1,2,3,4,5,6];

// Task5.
 var bol = [true,false];

// Task6.
 var mixArray = ["basit",4,5,"bilal","true"];

// Task7.
var education = [ "SSC", "HSC", "BCS" , "BS", "BCOM", "MS","m.phil","phd"]
document.write("<h2>Qualifications</h2>")
for(i=1;i<+education.length;i++){
    document.write("<br>"+i+")"+education[i])
}
 
// // Task8.
var students =  ["kashif","bilal","asif"];
var marks = [300,400,450];
var totalMarks = 500; 

for(i=0;i<marks.length;i++){
    var calculation = marks[i]/500*100
    document.write("<br>score of "+students[1]+" is "+marks[i]+"."+"percentage: "+calculation+"%")
}

// Task9.
var color = ["green","sky","blue"];
console.log(color);

// a.adding white color to  the beggining of array.
color.unshift("white");
console.log(color);

// b.adding purple color to  the end of array.
color.push("purple");
console.log(color);

// c.adding brown and pink two more color to  the beggining of array.
color.unshift("brown","pink");
console.log(color);

// d.deleting first color to the beggining of array.
color.shift();
console.log(color);

// e.deleting the last color to the beggining of array.
color.pop();
console.log(color);

// f.adding color to array at second index.
color[1] = "black";
console.log(color);

// g.deleting two colors and adding one color.
color.splice(1,2,"purple")
console.log(color);


// Task11.
var cities = ["kharachi","quetta","lahor","multan","faisalabad"];
selectedCities = cities.slice(2,5);
document.write("<h3>Cities</h3>")
document.write(cities)
document.write("<h3>Selected cities List</h3>")
document.write(selectedCities);
