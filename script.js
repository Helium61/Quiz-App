
const container = document.querySelector('.container');
const questionEl = document.querySelector('.question');
const choicesEl = document.querySelector('.choices');
const NextBtn = document.querySelector('.Nextbtn');
const resultEl = document.querySelector('.result');

let currentQuestionIndex = 0;
let score = 0;

//Make an array of objects that stores question and choices
const quiz=[
  
        {
            question: "Q. JavaScript is an _______ language?",
            choices: ["object bases", "Procedural", "Object-Oriented", "None of above"],
            answer: "Object-Oriented"
        },
        {
            question: "Q. Which of the following is a server-side JavaScript object?",
            choices: ["Function", "File", "FileUpload", "Date"],
            answer: "File"
        },
        {
            question: "Q. JavaScript File Has An Extension of:",
            choices: [".jsx", ".js", ".javascript", ".xml"],
            answer: ".js"
        },
        {
            question: "Q. Which Of The Dialog Box Display a Message And a Data Entry Field?",
            choices: ["Alert()", "Prompt()", "AlertBox()", "Msg()"],
            answer: "Prompt()"
        },
        {
            question: "Q. JavaScript is designed for following purpose -",
            choices: ["To Execute Query Related to DB on Server", "To Perform Server Side Scripting Opertion", "To add interactivity to HTML Pages", "To Style HTML Pages"],
            answer: "To add interactivity to HTML Pages"
        },
        {
            question: "Q. Which of the following is correct about features of JavaScript?",
            choices: ["JavaScript is a lightweight, interpreted programming language.", "JavaScript is designed for creating network-centric applications.", "JavaScript is complementary to and integrated with Java.", "All of the above."],
            answer: "All of the above."
        },
        {
            question: "Q. Which of the following methods is used to access HTML elements using Javascript?",
            choices: ["getElementbyId()", "getElementByClassName()", "Both A and B", "None of the above"],
            answer: "Both A and B"
        },
        {
            question: "Q. Which built-in method returns the length of the string?",
            choices: ["length()", "size()", "index()", "None of the above"],
            answer: "length()"
        },
        {
            question: "Q. Which of the following function of Number object returns the number's value?",
            choices: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
            answer: "valueOf()"
        },
        {
            question: "Q. Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
            choices: ["substr()", "search()", "lastIndexOf()", "indexOf()"],
            answer: "indexOf()"
        },
        {
            question: "Q. Which of the following function of Array object removes the last element from an array and returns that element?",
            choices: ["push()", "pop()", "join()", "map()"],
            answer: "pop()"
        },
        {
            question: "Q. Upon encountering empty statements, what does the Javascript Interpreter do?",
            choices: ["Throws an error", "Ignores the statement", "Gives a warning", "None of the above"],
            answer: "Ignores the Satements"
        },
        {
            question: "Q. Which of the following is a valid type of function javascript supports?",
            choices: ["named function", "anonymous function", "Both of the above", "None of the above"],
            answer: "Both of the above"
        },
        {
            question: "Q. Which built-in method reverses the order of the elements of an array?",
            choices: ["changeOrder(order)", "reverse()", "sort(order)", "None of the above"],
            answer: "reverse()"
        },
        {
            question: "Q. Which of the following methods can be used to display data in some form using Javascript?",
            choices: ["document.write()", "console.log()", "windows.alert()", "ALL of the above"],
            answer: "ALL of the above"
        },
        {
            question: "Q. Which of the following function of Array object adds and/or removes elements from an array?",
            choices: ["splice()", "toSource()", "sort()", "unshift()"],
            answer: "splice()"
        },
        {
            question: "Q. Which of the following function of Array object sorts the elements of an array?",
            choices: ["toSource()", "sort()", "toString()", "unshift()"],
            answer: "sort()"
        },
        {
            question: "Q.  What keyword is used to check whether a given property is valid or not?",
            choices: ["in", "is in", "exists", "lies"],
            answer: "inc"
        },
        {
            question: "Q. Which built-in method sorts the elements of an array?",
            choices: ["changeOrder(order)", "order()", "sort()", "None of the above"],
            answer: "sort()"
        },
        {
            question: "Q. When an operator’s value is NULL, the typeof returned by the unary operator is:",
            choices: ["Boolean","Undefined","Object", "Integer"],
            answer: "Object"
        },
        {
            question: "Q. Which built-in method returns the characters in a string beginning at the specified location?",
            choices: ["substr()", "getSubstring()", "slice()", "None of the above"],
            answer: "substr()"
        },
        {
            question: "Q. Which of the following is a logical operator?",
            choices: ["||", "&&", "|", "%"],
            answer: "||"
        },
        {
            question: "Q. Which of the following is the assignment operator?",
            choices: ["+", "-", "=", "/"],
            answer: "="
        },
        {
            question: "Q. What is the correct syntax for referring to an external script called 'xxx.js'?",
            choices: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
            answer: "<script src='xxx.js'>"
        },
        {
            question: "Q. How do you write 'Hello World' in an alert box?",
            choices: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
            answer: "alert('Hello World');"
        },
        {
            question: "Q. How do you create a function in JavaScript?",
            choices: ["function myFunction()", "function:myFunction()", "function = myFunction()", "None of the above"],
            answer: "function myFunction()"
        },
        {
            question: "Q. How do you call a function named 'myFunction'?",
            choices: ["call function myFunction()", "call myFunction()", "myFunction()", "None of the above"],
            answer: "myFunction()"
        },
        {
            question: "Q. How to write an IF statement in JavaScript?",
            choices: ["if i == 5 then", "if i = 5", "if (i == 5)", "if i = 5 then"],
            answer: "if (i == 5)"
        },
        {
            question: "Q. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
            choices: ["if (i != 5)", "if i <> 5", "if i =! 5 then", "if (i <> 5)"],
            answer: "if (i != 5)"
        },
        {
            question: "Q. How does a WHILE loop start?",
            choices: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "None of the above"],
            answer: "while (i <= 10)"
        },
        {
            question: "Q. How does a FOR loop start?",
            choices: ["for i = 1 to 5", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)"],
            answer: "for (i = 0; i <= 5; i++)"
        },
        {
            question: "Q. How can you add a comment in a JavaScript?",
            choices: ["<!--This is a comment-->", "'This is a comment", "//This is a comment", "None of the above"],
            answer: "//This is a comment"
        },
        {
            question: "Q. How to insert a comment that has more than one line?",
            choices: ["//This comment has more than one line//", "<!--This comment has more than one line-->", "/*This comment has more than one line*/", "None of the above"],
            answer: "/*This comment has more than one line*/"
        },
        {
            question: "Q. What is the correct way to write a JavaScript array?",
            choices: ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue')"],
            answer: "var colors = ['red', 'green', 'blue']"
        },
        {
            question: "Q. How do you round the number 7.25, to the nearest integer?",
            choices: ["Math.round(7.25)", "round(7.25)", "rnd(7.25)", "Math.rnd(7.25)"],
            answer: "Math.round(7.25)"
        },
        {
            question: "Q. How do you find the number with the highest value of x and y?",
            choices: ["ceil(x, y)", "Math.ceil(x, y)", "Math.max(x, y)", "max(x, y)"],
            answer: "Math.max(x, y)"
        },
        {
            question: "Q. What is the correct JavaScript syntax for opening a new window called 'w2'?",
            choices: ["w2 = window.open('http://www.w3schools.com');", "w2 = window.new('http://www.w3schools.com');", "w2 = open('http://www.w3schools.com');", "None of the above"],
            answer: "w2 = window.open('http://www.w3schools.com');"
        },
        {
            question: "Q. JavaScript is a ___ -side programming language.",
            choices: ["Client", "Server", "Both", "None"],
            answer: "Both"
        },
        {
            question: "Q. Which of the following will write the message “Hello DataFlair!” in an alert box?",
            choices: ["alertBox(“Hello DataFlair!”);", "alert(Hello DataFlair!);", "msgAlert(“Hello DataFlair!”);", "alert(“Hello DataFlair!”);"],
            answer: "alert(“Hello DataFlair!”);"
        },
        {
            question: "Q. How do you find the minimum of x and y using JavaScript?",
            choices: ["min(x,y);", "Math.min(x,y)", "Math.min(xy)", "min(xy);"],
            answer: "Math.min(x,y)"
        },
        {
            question: "Q. Which JavaScript label catches all the values, except for the ones specified?",
            choices: ["catch", "label", "try", "default"],
            answer: "default"
        },
        {
            question: "Q. Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
            choices: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2 )"],
            answer: "if(x == 2)"
        },
        {
            question: "Q. What will the code return? Boolean(3<7)",
            choices: ["true", "false", "NaN", "SyntaxError"],
            answer: "true"
        },
        {
            question: "Q. Which is the correct JavaScript syntax to change the HTML content given below? <p id='test'>Hello World!</p>",
            choices: ["document.getElementById('test').innerHTML = 'Hello DataFlair!'", "document.getElement('p').innerHTML = 'Hello DataFlair!'", "document.getId('test').innerHTML = 'Hello DataFlair!'", "None of the above"],
            answer: "document.getElementById('test').innerHTML = 'Hello DataFlair!'"
        },
        {
            question: "Q. What is the correct syntax for adding comments in JavaScript?",
            choices: ["<!--This is a comment-->", "//This is a comment", "-This is a comment", "**This is a comment**"],
            answer: "//This is a comment"
        },
        {
            question: "Q. What is the JavaScript syntax for printing values in Console?",
            choices: ["print(5)", "console.log(5);", "console.print(5);", "print.console(5);"],
            answer: "console.log(5);"
        },
        {
            question: "Q. What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
            choices: ["strip()", "trim()", "stripped()", "trimmed()"],
            answer: "trim()"
        },
        {
            question: "Q. Which of the following is not a reserved word in JavaScript?",
            choices: ["interface", "throws", "program", "short"],
            answer: "program"
        },
        {
            question: "Q. How do you initialize an array in JavaScript?",
            choices: ["var arr = []", "var arr = {}", "var arr = new Array()", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "Q. Which of the following methods is used to access HTML elements using JavaScript?",
            choices: ["getElementById()", "getElementsByClassName()", "Both A & B", "None of the above"],
            answer: "Both A & B"
        },
        {
            question: "Q. Which symbol is used separate JavaScript statements?",
            choices: ["Comma (,)", "Colon (:)", "Hyphen (_)", "Semicolon (;)"],
            answer: "Semicolon (;)"
        },
        {
            question: "Q. Which of the following is not considered as an error in JavaScript?",
            choices: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
            answer: "Division by zero"
        },
        {
            question: "Q. Which of the following is not a JavaScript framework?",
            choices: ["Python Script", "JQuery", "Django", "NodeJS"],
            answer: "Django"
        },
        {
            question: "Q. Which of the following is correct about JavaScript?",
            choices: ["JavaScript is Assembly-language.", "JavaScript is an Object-Oriented language", "JavaScript is an Object-Based language", "JavaScript is a High-level language."],
            answer: "JavaScript is an Object-Based language"
        },
        {
            question: "Q. Arrays in JavaScript are defined by which of the following statements?",
            choices: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", "It is an ordered list of functions"],
            answer: "It is an ordered list of values"
        },
        {
            question: "Q. What is the purpose of 'this' operator in JavaScript?",
            choices: ["It refers current object", "It referes previous object", "It is variable which contains value", "None of the above"],
            answer: "It refers current object"
        },
        {
            question: "Q. Which of the following is the property that is triggered in response to JS errors?",
            choices: ["onclick", "onerror", "onmessage", "onexception"],
            answer: "onerror"
        },
        {
            question: "Q. Which of the following method of Boolean object returns the primitive value of the Boolean object?",
            choices: ["toSource()", "valueOf()", "toString()", "None of the above"],
            answer: "valueOf()"
        },
        {
            question: "Q. Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
            choices: ["charAt()", "charCodeAt()", "concat()", "indexOf()"],
            answer: "charCodeAt()"
        },
        {
            question: "Q. Which of the following function of String object returns the characters in a string between two indexes into the string?",
            choices: ["slice()", "split()", "substr()", "substring()"],
            answer: "substring()"
        },
        {
            question: "Q. Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?",
            choices: ["fixed()", "fontcolor()", "fontsize()", "italics()"],
            answer: "italics()"
        },
        {
            question: "Q. Which of the following function of String object creates an HTML hypertext link that requests another URL?",
            choices: ["link()", "sub()", "sup()", "small()"],
            answer: "link()"
        },
        {
            question: "Q. Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
            choices: ["toLocaleLowerCase()", "toLowerCase()", "toString()", "substring()"],
            answer: "toLocaleLowerCase()"
        },
        {
            question: "Q. Which of the following function of String object returns the calling string value converted to upper case while respecting the current locale?",
            choices: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
            answer: "toLocaleUpperCase()"
        },
        {
            question: "Q. Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?",
            choices: ["pop()", "push()", "reduce()", "reduceRight()"],
            answer: "reduce()"
        },
        {
            question: "Q. Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
            choices: ["unshift()", "sort()", "splice()", "toString()"],
            answer: "unshift()"
        },
        {
            question: "Q. Which of the following function of Array object returns a string representing the array and its elements?",
            choices: ["toSource()", "sort()", "splice()", "toString()"],
            answer: "toString()"
        },
        {
            question: "Q. How can you convert the string of any base to integer in JavaScript?",
            choices: ["Integer.parse", "parseInt", "Parse.Integer", "None of the above"],
            answer: "parseInt"
        },
        {
            question: "Q. Which of the following is not a JavaScript datatype?",
            choices: ["Null type", "Undefined type", "Number type", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "Q. Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
            choices: ["Position", "Window", "Standard", "Location"],
            answer: "Window"
        },
        {
            question: "Q. Which of the following can be used to call a JavaScript Code Snippet?",
            choices: ["Function/Method", "Preprocessor", "Triggering Event", "RMI"],
            answer: "Function/Method"
        },
        {
            question: "Q. Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
            choices: ["will throw errors", "must be restricted to a Unix Machine only", "will work perfectly well on a Windows Machine", "will be displayed as a JavaScript text on the browser"],
            answer: "will work perfectly well on a Windows Machine"
        },
        {
            question: "Q. Which of the following is the structure of an if statement?",
            choices: ["if (conditional expression is true) thenexecute this codeend if", "if (conditional expression is true)execute this codeend if", "if (conditional expression is true)   { then execute this code>->}", "if (conditional expression is true) then {execute this code}"],
            answer: "if (conditional expression is true)   { then execute this code>->}"
        },
        {
            question: "Q. Which of the following is the structure of a switch statement?",
            choices: ["switch(expression){ case value: statement-break; default: statement}", "switch(expression) case value: statement; break; default: statement", "switch(expression){case value: statement; break; default: statement;}", "switch(expression) {case value: {statement; break;}default: {statement;}}"],
            answer: "switch(expression){case value: statement; break; default: statement;}"
        },
        {
            question: "Q. What are the three important manipulations done in a for loop on a loop variable?",
            choices: ["the initialization, the Incrementation, and the update", "the initialization, the testing, and the update", "the testing, the initialization, and the Incrementation", "None of the above"],
            answer: "the initialization, the testing, and the update"
        },
        {
            question: "Q. Which of the following is the correct way for calling the JavaScript code?",
            choices: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
            answer: "Function/Method"
        },
        {
            question: "Q. Which of the following type of a variable is volatile?",
            choices: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
            answer: "Mutable variable"
        },
        {
            question: "Q. Which of the following option is used as hexadecimal literal beginning?",
            choices: ["00", "0x", "0X", "Both 0x and 0X"],
            answer: "Both 0x and 0X"
        },
        {
            question: "Q. In the JavaScript, which one of the following is not considered as an error:",
            choices: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
            answer: "Division by zero"
        },
        {
            question: "Q. Which of the following number object function returns the value of the number?",
            choices: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
            answer: "valueOf()"
        },
        {
            question: "Q. Which of the following number object function returns a string representing the number to a fixed number of decimals?",
            choices: ["toExponential()", "toFixed()", "toLocaleString()", "toPrecision()"],
            answer: "toFixed()"
        },
        {
            question: "Q. Which of the following number object function returns the number's value?",
            choices: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
            answer: "valueOf()"
        },
        {
            question: "Q. In JavaScript, what will be used for calling the function definition expression:",
            choices: ["Function prototype", "Function literal", "Function calling", "Function declaration"],
            answer: "Function literal"
        },
        {
            question: "Q. Which of the following is a valid JavaScript variable name?",
            choices: ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"],
            answer: "_first_and_last_names"
        },
        {
            question: "Q. Which of the following is the correct output for the following JavaScript code: varx=5,y=1 var obj = { x:10} with(obj) { alert(y) }",
            choices: ["1", "Error", "10", "5"],
            answer: "1"
        },
        {
            question: "Q. In JavaScript, what will be used for calling the function definition expression:",
            choices: ["Function prototype", "Function literal", "Function calling", "Function declaration"],
            answer: "Function literal"
        },
        {
            question: "Q. Which of the following is a valid JavaScript variable name?",
            choices: ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"],
            answer: "_first_and_last_names"
        },
        {
            question: "Q. Which of the following is the correct output for the following JavaScript code: varx=5,y=1 var obj = { x:10} with(obj) { alert(y) }",
            choices: ["1", "Error", "10", "5"],
            answer: "1"
        },
        {
            question: "Q. Which of the following is correct about JavaScript?",
            choices: ["JavaScript is Assembly-language.", "JavaScript is an Object-Oriented language", "JavaScript is an Object-Based language", "JavaScript is a High-level language."],
            answer: "JavaScript is an Object-Based language"
        },
        {
            question: "Q. What is the purpose of 'this' operator in JavaScript?",
            choices: ["It refers current object", "It referes previous object", "It is variable which contains value", "None of the above"],
            answer: "It refers current object"
        },
        {
            question: "Q. Which of the following is not considered as an error in JavaScript?",
            choices: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
            answer: "Division by zero"
        },
        {
            question: "Q. Which of the following is not a reserved word in JavaScript?",
            choices: ["interface", "throws", "program", "short"],
            answer: "program"
        },
        {
            question: "Q. Which of the following is the structure of a switch statement?",
            choices: ["switch(expression){ case value: statement-break; default: statement}", "switch(expression) case value: statement; break; default: statement", "switch(expression){case value: statement; break; default: statement;}", "switch(expression) {case value: {statement; break;}default: {statement;}}"],
            answer: "switch(expression){case value: statement; break; default: statement;}"
        },
        {
            question: "Q. Which of the following methods is used to access HTML elements using JavaScript?",
            choices: ["getElementById()", "getElementsByClassName()", "Both A & B", "None of the above"],
            answer: "Both A & B"
        },
        {
            question: "Q. Which of the following is not considered as an error in JavaScript?",
            choices: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
            answer: "Division by zero"
        },
        {
            question: "Q. What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
            choices: ["strip()", "trim()", "stripped()", "trimmed()"],
            answer: "trim()"
        },
    ];
    
    function loadQuestion() {
        const currentQuestion = quiz[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
        choicesEl.innerHTML = '';
        
        currentQuestion.choices.forEach(choice => {
            const choiceBtn = document.createElement('button');
            choiceBtn.classList.add('btn', 'choiceBtn');
            choiceBtn.textContent = choice;
            choiceBtn.addEventListener('click', () => {
                selectAnswer(choice);
            });
            choicesEl.appendChild(choiceBtn);
        });
    }
    function selectAnswer(choice) {
        const currentQuestion = quiz[currentQuestionIndex];
        if (choice === currentQuestion.answer) {
            score++;
        }
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quiz.length) {
            loadQuestion();
        } else {
            displayResult();
        }
    }
    
    
    function displayResult() {
        questionEl.style.display = 'none';
        choicesEl.style.display = 'none';
        NextBtn.style.display = 'none';
        resultEl.textContent = `Your score is ${score} out of ${quiz.length}`;
    }
    
    NextBtn.addEventListener('click', () => {
        // currentQuestionIndex++;
        loadQuestion();
        console.log("elo")
    });
    
    // Initialize the first question
    loadQuestion();