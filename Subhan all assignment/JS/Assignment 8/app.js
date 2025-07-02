// First Question

function Date_time(){
    var now = new Date();
    var day = now.getDate();

    console.log(now); 
}

//Date_time();

// Second Question

function Greet_user(){
    var first_name = prompt("Enter Your First Name");
    var last_name = prompt("Enter Your Last Name");
    var gap = " ";

    alert("Welcome " + first_name + gap + last_name);
}

Greet_user();

// Third Question

function sumOfNumber(){
    var num1 = +prompt("Enter The First Number");
    var num2 = +prompt("Enter Your Second Number");

    alert("Sum Of 1st Num And 2nd Num is : " + num1 + num2);
}

sumOfNumber();

// Fourth Question

function calculator(){
    var num1 = +prompt("Enter The First Number");
    var operator = prompt("Enter The Sign");
    var num2 = +prompt("Enter Your Second Number");

    if(operator == "+"){
        alert(num1 + num2);
    } else if(operator == "-"){
        alert(num1 - num2);
    } else if(operator == "/"){
        alert(num1 / num2);
    } else if(operator == "*"){
        alert(num1 * num2);
    } else{
        alert("Please Try Again");
    }
}

calculator();

// Fifth Question

function square(num) {
  return num * num;
}

square();

// Sixth Question

function Numbercounting(First_num, Last_num){

    var First_num = +prompt("Enter The First Number from The Counting Starts");
    var Last_num = +prompt("Enter The last Number where the counting will Stop!");
    var output = ""

    for(var i = First_num; i<= Last_num; i++){
        output += i + " ";
    }
    
}

Numbercounting();

// Seventh Question

function factorial(number) {
  var result = 1;
  for (var i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

factorial()

// Eighth Question

function areaOfRectangle(width, height) {
    return width * height;
  }

  var area1 = areaOfRectangle(5 * 10);

  console.log("Answer of First Argument: " + area1);

  var w = 7;
  var h = 4;
  var area2 = areaOfRectangle(w * h);

  console.log("Answer of First Argument: " + area2);

//   Ninth Question



