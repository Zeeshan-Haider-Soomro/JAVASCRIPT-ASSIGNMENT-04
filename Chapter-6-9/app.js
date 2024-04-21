// QUESTION 01) ***************************************************************************************

// let a = 10 ;
// document.write("Result:<br>The value of a is: ",a,"<hr><br>");

// document.write("The value of ++a is: ",++a,"<br>");
// document.write("Now the value of a is: ",a,"<br><br>");

// document.write("The value of a++ is: ",a++,"<br>");
// document.write("Now the value of a is: ",a,"<br><br>");

// document.write("The value of --a is: ",--a,"<br>");
// document.write("Now the value of a is: ",a,"<br><br>");

// document.write("The value of a-- is: ",a--,"<br>");
// document.write("Now the value of a is: ",a,"<br><br>");

// QUESTION 02) ***************************************************************************************

// var a = 2;
// document.write("a is: ",a,"<br>");

// var b= 1;
// document.write("b is: ",b,"<br>");

// document.write("First stage --a is: ", --a,"<br>");
// document.write("Second stage --a - --b is: ", --a - --b,"<br>");
// document.write("Third stage --a - --b + ++b is: ", --a - --b + ++b,"<br>");
// document.write("Last stage --a - --b + ++b + b-- is: ", --a - --b + ++b + b--,"<br>");

// var result = --a - --b + ++b + b--;
// document.write("result is: ", result);

// QUESTION 03) ***************************************************************************************

// let name1 = prompt("What's your name ?");
// alert("Good Morning " + name1);

// QUESTION 04) ***************************************************************************************

// let number = +prompt("Write any number: ",5);
// document.write(number + " x " + number + " = " + number*1,"<br>");
// document.write(number + " x " + number + " = " + number*2,"<br>");
// document.write(number + " x " + number + " = " + number*3,"<br>");
// document.write(number + " x " + number + " = " + number*4,"<br>");
// document.write(number + " x " + number + " = " + number*5,"<br>");
// document.write(number + " x " + number + " = " + number*6,"<br>");
// document.write(number + " x " + number + " = " + number*7,"<br>");
// document.write(number + " x " + number + " = " + number*8,"<br>");
// document.write(number + " x " + number + " = " + number*9,"<br>");
// document.write(number + " x " + number + " = " + number*10,"<br>");

// QUESTION 05)Take ***************************************************************************************

// a) Take three subjects name from user and store them in 3 different variables.

// let sub1 = prompt("Write name of any subject: ");
// let sub2 = prompt("another subject: ");
// let sub3 = prompt("one more subject to go: ");

// b) Total marks for each subject is 100, store it in another variable.

// let totalMarks = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.

// let ob1 = +prompt("Write obtained marks you got in first subject");

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.

// let ob2 = +prompt("Write obtained marks you got in first subject");

// let ob3 = +prompt("Write obtained marks you got in first subject");

// per1 = ob1/totalMarks * 100;
// per2 = ob2/totalMarks * 100;
// per3 = ob3/totalMarks * 100;
// finalper = (ob1 + ob2 + ob3)/totalMarks * 100;

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// document.write(`<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td> ${sub1} </td><td> ${totalMarks} </td><td> ${ob1} </td><td> ${per1}% </td></tr><tr><td> ${sub2} </td><td> ${totalMarks} </td><td> ${ob2} </td><td> ${per2}% </td></tr><tr><td> ${sub3} </td><td> ${totalMarks} </td><td> ${ob3} </td><td> ${per3}% </td></tr><tr><th></th><th>300</th><th> ${ob1 + ob2 + ob3} </th><th> ${finalper} </th></tr></table>`);