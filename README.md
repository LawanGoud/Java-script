# DOM and Event Fundamentals

## JavaScript Variables

### Variable Declaration

Variables are like containers for storing values. We can create a variable using the `let` keyword.

```Javascript
let message;
```

### Assigning a Value to the Variable

We can put data into a variable using an assignment operator `(=)`.

```Javascript
let message = 'Hello Rahul';
```

```Javascript
let message;
message = 'Hello Rahul';
```

<b>Note</b>

Printing a variable without assigning a value will give the output undefined.

## Document Object Model (DOM)

The DOM is the structured representation of the HTML document created by the browser. It allows JavaScript to manipulate, structure, and style your website.

```HTML
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <h1>Web Technologies</h1>
    <button>Change Heading</button>
  </body>
</html>
```

### Document Object

It is the entry point of the DOM. For accessing any HTML Element, you should always start with accessing the document object first.

### HTML DOM Tree

The DOM tree represents an HTML document as nodes. Each node is referred to as an Object.

![alt text](image.png)

### Methods

#### getElementById

The `getElementById()` method helps to select the HTML Element with a specific ID.

```Javascript
console.log(document.getElementById("headingElement"))
```

### Properties

#### textContent

To manipulate the text within the HTML Element, we use `textContent` Property.

#### style

The `style` property is used to get or set a specific style of an HTML Element using different CSS properties.

Use Camel Case naming convention `(starting letter of each word should be in the upper case except for the first word) for naming the Style Object Properties.

For example, `color`, `fontFamily`, `backgroundColor`, etc.

### Events

Events are the actions by which the user or browser interacts with the HTML Elements. Actions can be anything like clicking a button, pressing keyboard keys, scrolling the page, etc.

#### onclick Event

The `onclick` event occurs when the user clicks on an HTML Element. We will give the name of the function as a value for the HTML `onclick` attribute.

```HTML
<body>
  <h1 id="headingElement">Web Technologies</h1>
  <button onclick="manipulateStyles()">Change Heading</button>
</body>
```

```Javascript
function manipulateStyles() {
  document.getElementById("headingElement").textContent = "4.O Technologies";
  document.getElementById("headingElement").style.color = "blue";
}
```

**DOM and Event Fundamentals**

# Primitive Types & Conditionals

## JavaScript Values

Basically In JavaScript values are of two categories.

- Primitive Types
- Reference Types

### Primitive Types

- Number
- Boolean
- String
- Undefined, etc.

| Primitive Type | Description                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Number         | All the numbers are of Number type.                                                                                                                    |
| Boolean        | Boolean values are either true or false.                                                                                                               |
| String         | String is a stream of characters. The String should be enclosed with Single quotes, Double quotes, or Backticks.                                       |
| Undefined      | If a value is not assigned to the variable, then it takes `undefined` as its value. In JS, `undefined` refers to the value that is not being assigned. |

### Operators

#### typeof()

The `typeof()` operator is used to find the type of value.

```Javascript
let a = 900;
let b = 9.2;
console.log(typeof(a));  // number
console.log(typeof(b));  // number
```

```Javascript
let isApproved = false;
console.log(typeof(isApproved));
console.log(typeof(true));
```

## Converting String to a Number

In JavaScript, when we combine the number and string, it results in a string.

The `parseInt()` function accepts a string and converts it into an integer.

```Javascript
let a = '20';
console.log(typeof(a));  // string

let b = parseInt(a);
console.log(typeof(b));  // number
```

## Conditional Statements

The Conditional Statement allows you to execute a block of code only when a specific condition is true.

**If...Else Statement:**

<b>Syntax:</b>

```javascript
if (conditionA) {
  Block1;
} else if (conditionB) {
  Block2;
} else {
  Block3;
}
```

# Input Element and Math Functions

## Math Functions

### Math.random()

The `Math.random()` function returns a random number (float value) in range 0 to less than 1 (`0 <= randomNumber < 1`).

```Javascript
console.log(Math.random());
```

### Math.ceil()

The `Math.ceil()` function always rounds a number up to the next largest integer.

```Javascript
console.log(Math.ceil(95.906698007537561));  // 96
```

```JavaScript
let randomNumber = Math.random();
console.log(randomNumber);
console.log(randomNumber*1000);
console.log(Math.ceil(randomNumber*1000));
```

## HTML Elements

### HTML Input Element

The HTML input element creates interactive controls to accept the data from the user.

There are different types of inputs.

- Text
- Password
- Radio
- Date
- Checkbox

#### Text Input

```Javascript
<input type="text" />
```

**Note**

Default type for the HTML `input` element is `text`.

#### Password Input

It provides a way for the user to enter a password securely.

```Javascript
<input type="password" />
```

## DOM Properties

### Value

We can use the `value` property to get the value of the HTML `input` Element.

```Javascript
document.getElementById("inputElement").value;
```

```HTML
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <p>Enter your Name</p>
    <input type="text" id="inputElement" />
    <p>Enter your Password</p>
    <input type="password" />
    <div>
      <button onclick="signIn()">Sign In</button>
    </div>
    <p id="signInText"></p>
  </body>
</html>
```

```Javascript
let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");
function signIn() {
  let inputValue = inputElement.value;
  let verifyText = "Hi " + inputValue + ", verifying your account...";
  signInTextElement.textContent = verifyText;
}
```

## Comparison Operator

### Loose equal to vs Strict equal to (`== vs ===`)

Loose equal to (`==`): Loose equality compares two values for equality but doesn’t compare types of values.

Strict equal to (`===`): Strict equality compares two values for equality including types of values.

```Javascript
console.log(2 == '2');  // true
console.log(2 === '2');  // false
```

# Arrays & More DOM Manipulations

## Data Structures

Data Structures allow us to store and organize data efficiently. This makes us access and performs operations on the data smoothly.

In JavaScript, we have built-in Data Structures like,

- Arrays
- Objects
- Sets
- Maps

## Arrays

An Array holds an ordered sequence of items

### Creating an Array

```Javascript
let myArray = [5, "six", 2, 8.2]
console.log(myArray) // [5, "six", 2, 8.2]
```

### Accessing an Array items

```JavaScript
let myArray = [5, "Six", 2, 8.2];

console.log(myArray[0]); // 5

console.log(myArray[1]); // six
```

### Modifying an Array items

```JavaScript
let myArray = [5, "Six", 2, 8.2];
myArray[1] = 6;

console.log(myArray) // [5, 6, 2, 8.2]
```

### Finding Array Length

The `array.length` is used to find the number of items in the array.

```Javascript
let myArray = [5, "Six", 2, 8.2];
let lengthOfArray = myArray.length;

console.log(lengthOfArray) // 4
```

### Array Methods

#### push()

The `push()` method adds new items to the end of the array.

```Javascript
let myArray = [5, "six", 2, 8.2];
myArray.push(true);

console.log(myArray);  // [5, "six", 2, 8.2, true]
```

#### pop()

The `pop()` method removes the last item of an array and returns that item.

```Javascript
let myArray = [5, "six", 2, 8.2];
let lastItem = myArray.pop();

console.log(myArray);  // [5, "six", 2]

console.log(lastItem);  // 8.2
```

```Javascript
let myArray = [5, "six", 2, 8.2];
myArray[1] = 7;
myArray.pop();
myArray.push("seven");

console.log(myArray);
```

## Functions

### Function Declaration

```Javascript
function showMessage() {
  console.log("Hello");
}

showMessage();
```

### Function Expression

There is another syntax for creating a function which is called Function Expression.

```Javascript
let showMessage = function() {
  console.log("Hello");
};

showMessage();
```

## More DOM Manipulations

### Creating an HTML Element - `createElement()`

```Javascript
let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";

console.log(h1Element);  // <h1>Web Technologies</h1>
```

### Appending to an HTML Element - `appendChild()`

**Appending to Document Body Object:**

```Javascript
document.body.appendChild(h1Element);
```

**Appending to Existing Container Element:**

```Javascript
let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);
```

```HTML
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div id="myContainer"></div>
  </body>
</html>
```

```Javascript
let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";

let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);

let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading";
containerElement.appendChild(btnElement);
```

### Adding Event Listeners Dynamically

```Javascript
let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading";
document.getElementById("myContainer").appendChild(btnElement);

btnElement.onclick = function(){
  console.log("click event triggered");
};
```

### Providing Class Names Dynamically - `classList.add()`

```Javascript
btnElement.onclick = function(){
  h1Element.textContent = "4.0 Technologies";
  h1Element.classList.add("heading");

  console.log(h1Element);
};
```

```CSS
.heading {
  color: blue;
  font-family: "Caveat";
  font-size: 40px;
  text-decoration: underline;
}
```

### Removing Class Names Dynamically - `classList.remove()`

```Javascript
let removeStylesBtnElement = document.createElement("button");
removeStylesBtnElement.textContent = "Remove Styles";

document.getElementById("myContainer").appendChild(removeStylesBtnElement);

removeStylesBtnElement.onclick = function(){
  h1Element.classList.remove("heading");
};
```

```HTML
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div id="myContainer"></div>
  </body>
</html>
```

```CSS
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  color: blue;
  font-family: "Caveat";
  font-size: 40px;
  text-decoration: underline;
}
```

```Javascript
let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";

let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);

let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading and Add Styles";
containerElement.appendChild(btnElement);

btnElement.onclick = function(){
  h1Element.textContent = "4.0 Technologies";
  h1Element.classList.add("heading");
};

let removeStylesBtnElement = document.createElement("button");
removeStylesBtnElement.textContent = "Remove Styles";
containerElement.appendChild(removeStylesBtnElement);

removeStylesBtnElement.onclick = function(){
  h1Element.classList.remove("heading");
};
```

# Objects

## Object

An Object is a collection of properties.

A property is an association between a name (or key) and a value.

For example, a person has a name, age, city, etc. These are the properties of the person.

| Key       | Value    |
| --------- | -------- |
| firstName | Rahul    |
| lastName  | Attuluri |
| age       | 28       |
| city      | Delhi    |

### Creating an Object

We can add properties into `{}` as `key: value` pairs.

```Javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};

console.log(person);  // Object {firstName: "Rahul", lastName: "Attuluri", age: 28}
```

#### Identifiers

A valid Identifier should follow the below rules:

- It can contain alphanumeric characters, \_ and $.
- It cannot start with a number.

**Valid Identifiers:**

```Javascript
firstName;
$firstName;
_firstName;
firstName12;
```

**Invalid Identifiers:**

```Javascript
12firstName;
firstName 12;
```

To use an Invalid identifier as a key, we have to specify it in quotes.

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  1: "value1",
  "my choice": "value2",
};

console.log(person); // Object {1: "value1", firstName: "Rahul", lastName: "Attuluri", age: 28, my choice: "value2"}
```

## Accessing Object Properties

### Dot Notation

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  1: "value1",
  "my choice": "value2",
};

console.log(person.firstName); // Rahul
```

Use Dot notation when the key is a valid Identifier.

### Bracket Notation

```Javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  "1": "value1",
  "my choice": "value2",
};

console.log(person["firstName"]);  // Rahul
```

### Accessing Non-existent Properties

**Dot Notation:**

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  1: "value1",
  "my choice": "value2",
};

console.log(person.gender); // undefined
```

**Bracket Notation:**

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  1: "value1",
  "my choice": "value2",
};

console.log(person["gender"]); // undefined
```

### Variable as a Key

```Javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};

let a = "firstName";

console.log(person[a]);  // Rahul

console.log(person.a);  // undefined
```

### Object Destructuring

To unpack properties from Objects, we use Object Destructuring. The variable name should match with the key of an object.

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};

let { gender, age } = person;

console.log(gender); // undefined

console.log(age); // 28
```

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  1: "value1",
  "my choice": "value2",
};

let a = "firstName";
let { gender, age } = person;

console.log(person.firstName);

console.log(person["gender"]);

console.log(person[a]);

console.log(person.a);

console.log(gender);

console.log(age);
```

## Modifying Objects

### Modifying Object Property

**Dot Notation:**

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};

person.firstName = "Abhi";

console.log(person.firstName); // Abhi
```

**Bracket Notation:**

```Javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};

person["firstName"] = "Abhi";

console.log(person["firstName"]);  // Abhi
```

### Adding Object Property

**Dot Notation:**

```Javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};

person.gender = "Male";

console.log(person);  // Object {firstName: "Rahul", lastName: "Attuluri", age: 28, gender: "Male"}
```

**Bracket Notation:**

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};

person["gender"] = "Male";

console.log(person); // Object {firstName: "Rahul", lastName: "Attuluri", age: 28, gender: "Male"}
```

## Property Value

The Value of Object Property can be

- Function
- Array
- Object

### Function as a Value

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  run: function () {
    console.log("Start Running.");
  },
};

person.run(); // Start Running.
```

**Methods:**

A JavaScript method is a property containing a function definition.

For example, in `document.createElement();`, the document is an Object, `createElement` is a key and `createElement()` is a Method.

### Array as a Value

```Javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  habits: ["Playing Chess", "Singing"],
};

console.log(person.habits);  // ["Playing Chess", "Singing"]

console.log(person.habits[0]);  // Playing Chess

console.log(person["habits"][1]);  // Singing
```

### Object as a Value

```javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  habits: ["Playing Chess", "Singing", "Dancing"],
  car: {
    name: "Audi",
    model: "A6",
    color: "White",
  },
};

console.log(person.car.name); // Audi

console.log(person.car["model"]); // A6
```

### Object And Array

```Javascript
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  run: function () {
    console.log("Start Running.");
  },
  habits: ["Playing Chess", "Singing", "Dancing"],
  car: {
    name: "Audi",
    model: "A6",
    color: "White",
  },
};

person.run();

console.log(person.car.name);

console.log(person.car["model"]);
```

# Todos Application

## HTML Input Element

### Checkbox

The HTML `input` element can be used to create a Checkbox. To define a Checkbox, you need to specify the HTML type attribute with the value `checkbox` for an HTML `input` element.

```HTML
<input type="checkbox" />
```

### The HTML Label Element

The HTML `label` element defines a Label.

```HTML
<label for="myCheckbox">Graduated</label>
```

#### The HTML for Attribute

The HTML `for` attribute associates the HTML `label` element with an HTML `input` element.

```HTML
<input type="checkbox" id="myCheckbox" />
<label for="myCheckbox">Graduated</label>
```

## DOM Manipulations

### The htmlFor Property

We can use `htmlFor` property to add HTML `for` attribute to the HTML `label` element.

```Javascript
let labelElement = document.createElement("label");
labelElement.htmlFor = "myCheckbox";
```

### The setAttribute() Method

We can use `setAttribute()` method to set any HTML attribute name and its corresponding value. If the attribute already exists, the value is updated. Otherwise, a new attribute is added with the specified name and value.

**Syntax**: `Element.setAttribute(name, value);`

```Javascript
let labelElement = document.createElement("label");
labelElement.setAttribute("for", "myCheckbox");
```

```Javascript
let inputElement = document.createElement("input");

inputElement.type = "checkbox";
inputElement.id = "myCheckbox";
document.body.appendChild(inputElement);
```

## Loops

Loops allow us to execute a block of code several times.

- for...of Loop
- for...in Loop
- for Loop
- while Loop and many more.

### The for...of Loop

```Javascript
let myArray = [1, 2, 3, 4];

for (let eachItem of myArray) {
   console.log(eachItem);
}
```

```HTML
<li class="todo-item-container d-flex flex-row">
  <input type="checkbox" id="checkboxInput" class="checkbox-input" />
  <div class="d-flex flex-row label-container">
    <label for="checkboxInput" class="checkbox-label">
      Learn HTML
    </label>
    <div class="delete-icon-container">
      <i class="far fa-trash-alt delete-icon"></i>
    </div>
  </div>
</li>
```

### The HTML Code for creating a Todo Item:

```HTML
<li class="todo-item-container d-flex flex-row">
  <input type="checkbox" id="checkboxInput" class="checkbox-input" />
  <div class="d-flex flex-row label-container">
    <label for="checkboxInput" class="checkbox-label">
      Learn HTML
    </label>
    <div class="delete-icon-container">
      <i class="far fa-trash-alt delete-icon"></i>
    </div>
  </div>
</li>
```

## CSS Box Properties

### Border

The CSS border property is a shorthand property for:

- border-width
- border-style (required)
- border-color

For example,

```CSS
.button {
  border-style: dashed;
  border-width: 2px;
  border-color: #e4e7eb;
}
```

Instead of writing the CSS properties `border-style`, `border-width` and `border-color` individually, we can apply these properties at once with a single CSS property called `border`.

**Syntax**: `border: border-width border-style border-color`

```CSS
.button {
  border: 2px dashed #e4e7eb;
}
```

To specify the border on one of the four sides of an HTML element, you can use the below CSS properties.

- border-top
- border-bottom
- border-right
- border-left

```CSS
.button {
  border-top: 1px dotted #e4e7eb;
}
```

If the border is not required, we can apply the `none` as value to the CSS `border` property.

```CSS
.button {
  border: none;
}
```

For example, if the border property is not required on the top side of an HTML element. You can use,

```CSS
.button {
  border-top: none;
}
```

```HTML
    <div class="p-3">
      <button class="button-1">Learn more</button>
      <button class="button-2">Read more</button>
    </div>
```

```CSS
.button-1 {
  border-top: 2px dashed orange;
}

.button-2 {
  border-bottom: none;
}
```

## TodosList

# On-Demand Session

## Most Commonly Made Mistakes

### Most of the JS properties and methods should be in the Camel case.

Most of the JS properties and methods are in the Camel case (the starting letter of each word should be in uppercase except for the first word).

| Code                      | Mistake        | Correct Syntax            |
| ------------------------- | -------------- | ------------------------- |
| document.CreateElement()  | C in Uppercase | document.createElement()  |
| document.getElementbyId() | b in Lowercase | document.getElementById() |
| element.textcontent       | c in Lowercase | element.textContent       |
| element.classlist.add()   | l in Lowercase | element.classList.add()   |

## The ID should be the same in both the HTML and JS.

### Mistake

```HTML
<h1 id="heading">Shopping List</h1>
```

```JavaScript
let headingEl = document.getElementById("listHeading");
headingEl.textContent = "Items Needed";
```

In the above Code Snippets, the HTML element's text content doesn't change because the ID used in HTML and JS are different.

So, While accessing an HTML element with the ID using JS, the ID used in the HTML element and the document.getElementById method must be the same.

```HTML
<h1 id="heading">Shopping List</h1>
```

```JavaScript
let headingEl = document.getElementById("heading");
headingEl.textContent = "Items Needed";
```

### Mistake

```HTML
<h1 id="listHeading ">Shopping List</h1>
```

```JavaScript
let headingEl = document.getElementById("listHeading");
headingEl.textContent = "Items Needed";
```

The HTML element's text content doesn't change because there is an extra space at the end of the ID in the HTML code.

So, there shouldn't be any extra spaces in the IDs used in both the HTML and JS.

```HTML
<h1 id="listHeading">Shopping List</h1>
```

```JavaScript
let headingEl = document.getElementById("listHeading");
headingEl.textContent = "Items Needed";
```

## The Function name must be the same in both the Function declaration and the Function call.

### Mistake

```JavaScript
function greeting() {
  let message = "Hello Rahul";
  console.log(message);
}

greet();
```

As there is no function called `greet`, we will get an error in the above Code Snippet.

So, while calling a function, you must use the same function name used in the function declaration.

```JavaScript
function greeting() {
  let message = "Hello Rahul";
  console.log(message);
}

greeting();
```

# Todos Application Part - 2

## HTML Input Element

### Placeholder

Placeholder is the text that appears in the HTML input element when no value is set. We can specify it using the HTML attribute placeholder.

```HTML
<input type="text" placeholder="Enter your name" />
```

## JavaScript built-in Functions

### alert()

The `alert()` function displays an alert box with a specified message and an OK button.

```JavaScript
alert("Enter Valid Text");
```

## DOM Properties

### Checked

The `checked` property sets or returns the checked status of an HTML checkbox `input` element as a boolean value.

```JavaScript
let checkboxElement = document.getElementById(checkboxId);
checkboxElement.checked = true;
```

## DOM Manipulations

### The removeChild() Method

The `removeChild()` method removes an HTML child element of the specified HTML parent element from the DOM and returns the removed HTML child element.

```JavaScript
function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);

  todoItemsContainer.removeChild(todoElement);
}
```

### The classList.toggle() Method

The `classList.toggle()` method is used to toggle between adding and removing a class name from an HTML element.

```JavaScript
function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);

  labelElement.classList.toggle('checked');
}
```

We can replace classList.add() and classList.remove() methods with classList.toggle() method.

# Todos Application Part - 3

## Execution Context

The environment in which JavaScript Code runs is called Execution Context.

Execution context contains all the variables, objects, and functions.

Execution Context is destroyed and recreated whenever we reload an Application.

## Storage Mechanisms

### Client-Side Data Storage

Client-Side Data Storage is storing the data on the client (user's machine).

- Local Storage
- Session Storage
- Cookies
- IndexedDB and many more.

### Server-Side Data Storage

Server-Side Data Storage is storing the data on the server.

## Local Storage

It allows web applications to store data locally within the user's browser.

It is a Storage Object. Data can be stored in the form of key-value pairs.

Please note that both key and value must be strings. If their type is other than a string, they get converted to strings automatically.

| Key      | Value          |
| -------- | -------------- |
| fullName | Rahul Attuluri |
| gender   | Male           |
| city     | Delhi          |

To access and work with Local Storage we have below methods:

- setItem()
- getItem()
- clear()
- removeItem()

### The setItem() Method

The `setItem()` method can be used for storing data in the Local Storage.

**Syntax**: `localStorage.setItem("Key", "Value")`;

### The getItem() Method

The `getItem()` method can be used for getting data from the Local Storage.

**Syntax**: `localStorage.getItem("Key")`;

```Javascript
localStorage.setItem("fullName", "Rahul Attuluri");

localStorage.setItem("gender", "Male");

localStorage.setItem("city", "Delhi");

let fullName = localStorage.getItem("fullName");

let gender = localStorage.getItem("gender");

let city = localStorage.getItem("city");

console.log(fullName);
console.log(gender);
console.log(city);
```

## Values

### null

We use `null` in a situation where we intentionally want a variable but don't need a value to it.

```Javascript
let selectedColor = null;

console.log(selectedColor);  // null
console.log(typeof(selectedColor));  // object
```

## HTML Elements

### The textarea Element

The HTML `textarea` element can be used to write the multiline text as an input.

```HTML
<textarea rows="8" cols="55"></textarea>
```

- The HTML `rows` attribute specifies the number of lines.
- The HTML `cols` attribute specifies the number of characters per each line.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <textarea rows="8" cols="55" id="message"></textarea>
    <br />
    <button class="btn btn-primary mt-1" id="saveButton">Save</button>
  </body>
</html>
```

```Javascript
let textAreaElement = document.getElementById("message");
let saveButton = document.getElementById("saveButton");

saveButton.onclick = function() {
  let userEnteredText = textAreaElement.value;
  localStorage.setItem("userEnteredText", userEnteredText);
};

let storedUserInputValue = localStorage.getItem("userEnteredText");

if (storedUserInputValue === null) {
  textAreaElement.value = "";
}
else {
  textAreaElement.value = storedUserInputValue;
}
```

# Todo Application Part - 4

## JavaScript Object Notation (JSON)

JSON is a data representation format used for:

- Storing Data (Client/Server)
- Exchanging data between Client and Server

### Supported Types

- Number
- String
- Boolean
- Array
- Object
- Null

### JS Object vs JSON Object

In JSON, all keys in an object must be enclosed with double-quotes. While in JS, this is not necessary.

```Javascript
let profile = {
  name: "Rahul",
  age: 29,
  designation: "Web Developer"
};
```

```JSON
let profile = {
  "name": "Rahul",
  "age": 29,
  "designation": "Web Developer"
};
```

### JSON Methods

**_JSON.stringify() :_** It converts the given value into JSON string.

_syntax :_ `JSON.stringify(value)`

**_JSON.parse() :_** It parses a JSON string and returns a JS object

_syntax :_ `JSON.parse(string)`

```Javascript
let profile = {
  name: "Rahul",
  age: 29,
  designation: "Web Developer"
};
let stringifiedProfile = JSON.stringify(profile);

console.log(stringifiedProfile); // {"name":"Rahul","age":29,"designation":"Web Developer"}

console.log(typeof(stringifiedProfile)); // string
```

# Todo Application Part - 5

## Array Methods

| Method                                            | Functionality              |
| ------------------------------------------------- | -------------------------- |
| includes, indexOf, lastIndexOf, find, findIndex() | Finding Elements           |
| push, unshift, splice                             | Adding Elements            |
| pop, shift, splice                                | Removing Elements          |
| concat, slice                                     | Combining & Slicing Arrays |
| join                                              | Joining Array Elements     |
| sort                                              | Sorting Array Elements     |

### splice()

The `splice()` method changes the contents of an array.

Using `splice()` method, we can

- Remove existing items
- Replace existing items
- Add new items

**_Removing existing items_**

**_Syntax :_** `arr.splice(Start, Delete Count)`

- Start : Starting Index
- Delete Count : Number of items to be removed, starting from the given index

```Javascript
let myArray = [5, "six", 2, 8.2];
myArray.splice(2, 2);

console.log(myArray);  // [5, "six"]

let deletedItems = myArray.splice(2, 2);

console.log(deletedItems);  // [2, 8.2]
```

The `splice()` method returns an array containing the deleted items.

**_Adding new items_**

**_Syntax :_** `arr.splice(Start, Delete Count, Item1, Item2...)`

Here the `Item1, Item2 ...` are the items to be added, starting from the given index.

```Javascript
let myArray = [5, "six", 2, 8.2];
myArray.splice(2, 0, "one", false);

console.log(myArray);  // [5, "six", "one", false, 2, 8.2]
```

**_Replacing existing items_**

**_Syntax:_** `arr.splice(Start, Delete Count, Item1, Item2 ... )`

### findIndex()

The `findIndex()` method returns the first item's index that satisfies the provided testing function. If no item is found, it returns `-1`.

**_Syntax :_** `arr.findIndex(Testing Function)`

Here Testing Function is a function to execute on each value in the array.

```Javascript
let myArray = [5, 12, 8, 130, 44];
let itemIndex = myArray.findIndex(function(eachItem) {
  console.log(eachItem);
});
```

In the above code snippet, the below function is a Testing Function.

```
function(eachItem) {
console.log(eachItem);
}
```

```Javascript
let myArray = [5, 12, 8, 130, 44];
let itemIndex = myArray.findIndex(function (eachItem) {
    if (eachItem === 130) {
        return true;
    } else {
        return false;
    }
});
console.log(itemIndex);
```

### includes()

The `includes()` method returns true if the provided item exists in the array. If no item is found, it returns `false`.

**_Syntax:_** `arr.includes(item)`

### indexOf()

The `indexOf()` method returns the first index at which a given item can be found in the array. If no item is found, it returns `-1`.

**_Syntax:_** `arr.indexOf(item)`

### lastIndexOf()

The `lastIndexOf()` method returns the last index at which a given item can be found in the array. If no item is found, it returns `-1`.

**_Syntax :_** `arr.lastIndexOf(item)`

### find()

The `find()` method returns the first item's value that satisfies the provided testing function. If no item is found, it returns `undefined`.

**_Syntax:_** `arr.find(Testing Function)`

### unshift()

The `unshift()` method adds one or more items to the beginning of an array and returns the new array length.

**_Syntax:_** `arr.unshift(item1,item2, ..., itemN)`

### shift()

The `shift()` method removes the first item from an array and returns that removed item.

**_Syntax:_** `arr.shift()`

### concat()

The `concat()` method can be used to merge two or more arrays.

This method does not change the existing arrays but instead returns a new array.

**_Syntax_**

```JS
let newArray = arr1.concat(arr2);
```

### slice()

The `slice()` method returns a portion between the specified start index and end index(end index not included) of an array into a new array.

**_Syntax:_** `arr.slice(startIndex, endIndex)`

### join()

The `join()` method creates and returns a new string by concatenating all of the items in an array, separated by commas or a specified separator string.

If the array has only one item, then it will be returned without using the specified separator.

**_Syntax:_** `arr.join(separator)`

Here `separator` is a string used to separate each item of the array. If omitted, the array items are separated with a comma.

### sort()

The `sort()` method sorts the items of an array and returns the sorted array. The default sort order is ascending.

**_Syntax:_** `arr.sort()`

```JS
let arr = ["Wind", "Water", "Fire"];
let combinedString = arr.join(",");
console.log(combinedString);
```

# Todo Application Part - 6

## Local Storage

### The removeItem() Method

The `removeItem()` method removes the specified storage object item based on the key.

**_Syntax:_** `localStorage.removeItem(key)`

_Key_ - Name of the key to be removed

```JS
localStorage.removeItem("todoList");
```

# Callbacks & Schedulers

## Callback function

A Callback is a function that is passed as an argument to another function.

### Passing a function as an argument

```Javascript
function displayGreeting(displayName) {
  console.log("Hello");
  displayName();
  console.log("Good Morning!");
}

displayGreeting(function() {
  console.log("Rahul");
});
```

```Javascript
function displayGreeting(displayName) {
  console.log("Hello");
  displayName();
  console.log("Good Morning!");
}
function displayRahul() {
  console.log("Rahul");
}
displayGreeting(displayRahul);
```

```Javascript
function displayGreeting(displayName) {
  console.log("Hello");
  displayName();
  console.log("Good Morning!");
}
let displayRam = function() {
  console.log("Ram");
};
displayGreeting(displayRam);
```

## Schedulers

The Schedulers are used to schedule the execution of a callback function.

There are different scheduler methods.

- setInterval()
- clearInterval()
- setTimeout()
- clearTimeout(), etc.

### setInterval()

The setInterval() method allows us to run a function at the specified interval of time repeatedly.

**_Syntax_**: `setInterval(function, delay);`

**_function_** - a callback function that is called repeatedly at the specified interval of time (delay).

**_delay_** - time in milliseconds. (1 second = 1000 milliseconds)

```Javascript
let counter = 0;
setInterval(function() {
  console.log(counter);
  counter = counter+1;
}, 1000);
```

In the `setInterval()` method, the callback function repeatedly executes until the browser tab is closed or the scheduler is cancelled.

When we call the `setInterval()` method, it returns a unique id. This unique Id is used to cancel the callback function execution.

### clearInterval()

The `clearInterval()` method cancels a schedule previously set up by calling `setInterval()`.

To execute `clearInterval()` method, we need to pass the uniqueId returned by `setInterval()` as an argument.

**_Syntax_**: `clearInterval(uniqueId)`;

```Javascript
let counter = 0;
let uniqueId = setInterval(function() {
  console.log(counter);
  counter = counter+1;
}, 1000);

clearInterval(uniqueId);
```

```HTML
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <button id="setIntervalBtn">
      Set Interval
    </button>
    <button id="clearIntervalBtn">
      Clear Interval
    </button>
  </body>
</html>
```

```Javascript
let setIntervalBtnEl = document.getElementById("setIntervalBtn");
let clearIntervalBtnEl = document.getElementById("clearIntervalBtn");

let uniqueId = null;

setIntervalBtnEl.onclick = function() {
  let counter = 0;
  uniqueId = setInterval(function() {
    console.log(counter);
    counter = counter + 1;
  }, 1000);
};

clearIntervalBtnEl.onclick = function() {
  clearInterval(uniqueId);
  console.log("Interval cleared");
};
```

### setTimeout()

The `setTimeout()` method executes a function after the specified time.

**_Syntax_**: `setTimeout(function, delay)`;

**_function_** - a callback function that is called after the specified time (delay).

**_delay_** - time in milliseconds.

```Javascript
let counter = 0;
setTimeout(function() {
  console.log(counter);
  counter = counter + 1;
}, 1000);
```

### clearTimeout()

We can cancel the `setTimeout()` before it executes the callback function using the `clearTimeout()` method.

To execute `clearTimeout()`, we need to pass the uniqueId returned by `setTimeout()` as an argument.

**Syntax**: `clearTimeout(uniqueId)`;

```HTML
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <button id="setTimeoutBtn">
      Set Timeout
    </button>
  </body>
</html>
```

```Javascript
let setTimeoutBtnEl = document.getElementById("setTimeoutBtn");

let uniqueId = null;

setTimeoutBtnEl.onclick = function() {
  setTimeout(function() {
    console.log("Hello");
  }, 3000);
};
```

# Event Listeners and More Events

## Event Listeners

JavaScript offers three ways to add an Event Listener to a DOM element.

- Inline event listeners
- onevent listeners
- addEventListener()

### Inline event listeners

```HTML
<button onclick="greeting()">Greet</button>
```

```Javascript
function greeting() {
  console.log("Hi Rahul");
}
```

### onevent listeners

```HTML
<button id="greetBtn">Greet</button>
```

```Javascript
let greetBtnEl = document.getElementById("greetBtn");

greetBtnEl.onclick = function() {
  console.log("Hi Rahul");
};
```

### addEventListener()

It is a modern approach to add an event listener.

**_Syntax_**: `element.addEventListener(event, function)`;

**element** - HTML element
**event** - event name
**function** - Callback function

```HTML
<button id="greetBtn">Greet</button>
```

```Javascript
let greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", function() {
  console.log("Hi Rahul");
});
```

## Operator

### Comparison Operators

| Operator                     | Usage   | Description                                                                   |
| ---------------------------- | ------- | ----------------------------------------------------------------------------- |
| Equal ( == )                 | a == b  | returns true if both a and b values are equal.                                |
| Not equal ( != )             | a != b  | returns true if both a and b values are not equal.                            |
| Strict equal ( === )         | a === b | returns true if both a and b values are equal and of the same type.           |
| Strict not equal ( !== )     | a !== b | returns true if either a and b values are not equal or of the different type. |
| Greater than ( > )           | a > b   | returns true if a value is greater than b value.                              |
| Greater than or equal ( >= ) | a >= b  | returns true if a value is greater than or equal to b value.                  |
| Less than ( < )              | a < b   | returns true if a value is less than b value.                                 |
| Less than or equal ( <= )    | a <= b  | returns true if a value is less than or equal to b value.                     |

### Logical Operators

| Operator    | Usage    | Description                                  |
| ----------- | -------- | -------------------------------------------- |
| AND ( && )  | a && b   | returns true if both a and b values are true |
| `OR (\|\|)` | `a\|\|b` | returns true if either a or b value is true  |
| NOT ( ! )   | !a       | returns true if a value is false             |

## More Events

Events are the actions by which the user or browser interact with HTML elements.

There are different types of events.

- Keyboard Events
- Mouse Events
- Touch Events, and many more.

### Keyboard Events

Keyboard Event is the user interaction with the keyboard.

The keyboard events are

- keydown
- keyup

#### Keydown event

The `keydown` event occurs when a key on the keyboard is pressed.

**_Syntax_**: `element.addEventListener("keydown", function)`;

```Javascript
let inputEl = document.createElement("input");

function printKeydown() {
  console.log("key pressed");
}

inputEl.addEventListener("keydown", printKeydown);
document.body.appendChild(inputEl);
```

#### Keyup event

The `keyup` event occurs when a key on the keyboard is released.

**Syntax**: `element.addEventListener("keyup", function)`;

### Event Object

Whenever an event happens, the browser creates an event object.

It consists of information about the event that has happened.

It consists of many properties and methods.

- type
- target
- key
- timeStamp
- stopPropagation, and many more.

#### Properties & Methods

For any event, event-specific properties and methods will be present.

For Example,

The `keydown` event has `key` property, whereas the `onclick` event doesn't have it.

**event.type :**
The event.type property contains the type of event occurred like click, keydown, etc.

```Javascript
let inputEl = document.createElement("input");

function printKeydown(event) {
  console.log(event.type);  // keydown
}

inputEl.addEventListener("keydown", printKeydown);
document.body.appendChild(inputEl);
```

**event.target :** The `event.target` property contains the HTML element that triggered the event.

```Javascript
let inputElement = document.createElement("input");

function printKeydown(event) {
  console.log(event.target);  // <input></input>
}

inputElement.addEventListener("keydown", printKeydown);
document.body.appendChild(inputElement);
```

**event.key:** The `event.key` property contains the value of the key pressed by the user.

```Javascript
let inputElement = document.createElement("input");

function printKeydown(event) {
  console.log(event.key);
}

inputElement.addEventListener("keydown", printKeydown);
document.body.appendChild(inputElement);
```

| Keyboard key | event.key value |
| ------------ | --------------- |
| Enter        | Enter           |
| a            | a               |
| A            | A               |
| 1            | 1               |
| \_           | \_              |
| <            | <               |

# BOOM Project

# Hypertext Transfer Protocol (HTTP)

## Web Resources

A Web Resource is any data that can be obtained via internet.

A resource can be

- HTML document
- CSS document
- JSON Data or Plain text
- Image, Video, etc.

## Uniform Resource Locator (URL)

URL is a text string that specifies where a resource can be found on the internet.

We can access web resources using the URL.

**_Syntax_**: `protocol://domainName/path?query-parameters`

In the URL `http://www.flipkart.com/watches?type=digital&rating=4`,

- `http` is a **Protocol**
- `www.flipkart.com` is a **Domain Name**
- `/watches` is a **Path**
- `type=digital&rating=4` is the **Query Parameters**

### Protocol

A protocol is a standard set of rules that allow electronic devices to communicate with each other.

There are different types of protocols.

- Hypertext Transfer Protocol (HTTP)
- Hypertext Transfer Protocol Secure (HTTPS)
- Web Sockets, etc.

#### HTTP

The Hypertext Transfer Protocol (HTTP), is a protocol used to transfer resources over the web.

_Examples:_ Internet forums, Educational sites, etc.

**_HTTP Request:_** Message sent by the client

**_HTTP Response:_** Message sent by the server

#### HTTPS

In Hypertext Transfer Protocol Secure (HTTPS), information is transferred in an
encrypted format and provides secure communication.

_Examples:_ Banking Websites, Payment gateway, Login Pages, Emails and Corporate Sector Websites, etc.

#### Domain Name

It indicates which Web server is being requested.

#### Path

The path is to identify the resources on the server.

Examples:

- /watches in `http://www.flipkart.com/watches`
- /electronics/laptops/gaming in `http://www.flipkart.com/electronics/laptops/gaming`

#### Query Parameters

Query parameters add some criteria to the request for the resource.

Multiple query parameters can be added by using an `&` ( ampersand ) symbol.

For example,
`http://www.flipkart.com/watches?type=digital&rating=4`

## HTTP

### HTTP Requests

HTTP requests are messages sent by the client to initiate an action on the server.

HTTP request includes

- Start Line
- Headers
- Body

#### Start Line

A Start Line specifies a

- URL
- HTTP Method
- HTTP Version

**HTTP Methods**

The HTTP Request methods indicate the desired action to be performed for a given resource.

| Methods         | Description                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------- |
| GET (Read)      | Request for a resource(s) from the server                                                   |
| POST (Create)   | Submit data to the server                                                                   |
| PUT (Update)    | The data within the request must be stored at the URL supplied, replacing any existing data |
| DELETE (Delete) | Delete a resource(s)                                                                        |

**_HTTP Version_**

| Year | Version  |
| ---- | -------- |
| 1991 | HTTP/0.9 |
| 1994 | HTTPS    |
| 1996 | HTTP/1.0 |
| 1997 | HTTP/1.1 |
| 2015 | HTTP/2   |
| 2019 | HTTP/3   |

#### Headers

HTTP Headers let the client and the server to pass additional information with an HTTP request or response.

#### Body

We place the data in the Request body when we want to send data to the server.

For example, form details filled by the user.

HTTP Requests

- Start Line

  - URL
    - Protocol
      - HTTP
      - HTTPS
    - Domain Name
    - Path
    - Query Parameters
  - HTTP Method
    - GET (Read)
    - POST (Create)
    - PUT (Update)
    - DELETE (Delete)
  - HTTP Version

- Headers
- Body

### HTTP Responses

HTTP responses are messages sent by the server as an answer to the clients request.

HTTP Response includes

- Status Line
- Headers
- Body

### Status Line

A Status line specifies a

- HTTP version
- Status code
- Status text

**Status code**

Status codes Indicate whether an HTTP request has been successfully completed or not.

| Status Code Series | Indicates    |
| ------------------ | ------------ |
| 1XX                | Information  |
| 2XX                | Success      |
| 3XX                | Redirection  |
| 4XX                | Client Error |
| 5XX                | Server Error |

- 200 ( Success ) - Indicates that the request has succeeded

- 201 ( Created ) - The request has succeeded and a new resource has been created as a result

**_Status text_**

| Status Code | Status Text       |
| ----------- | ----------------- |
| 200         | OK                |
| 204         | No Response       |
| 301         | Moved Permanently |
| 401         | Unauthorized      |
| 403         | Forbidden         |
| 404         | Not Found         |

#### Body

Response Body contains the resource data that was requested by the client.

HTTP Responses

- Status Line
  - HTTP version
  - Status code
    - 1XX
    - 2XX
    - 3XX
    - 4XX
    - 5XX
  - Status text
- Headers
- Body

# HTTP Requests using JS

## Fetch

The `fetch()` method is used to fetch resources across the Internet.

**Syntax**: `fetch(URL, OPTIONS)`

URL - URL of the resource
OPTIONS - Request Configuration

### Request Configuration

We can configure the fetch request with many options like,

- Request Method
- Headers
- Body
- Credentials
- Cache, etc.

We can configure a request by passing an options object with required properties and their values.

For example,

```Javascript
let options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
};
```

## Making HTTP Requests using Fetch

The method property value in the options object can be `GET`, `POST`, `PUT`, `DELETE`, etc. The default method is `GET`.

### GET

The `GET` method can be used to retrieve (get) data from a specified resource.

For example,

```Javascript
let options = {
  method: "GET"
};

fetch("https://gorest.co.in/public-api/users", options);
```

### POST

The POST method can be used to send data to the server.

```Javascript
let data = {
  name: "Rahul",
  gender: "Male",
  email: "rahul@gmail.com",
  status: "Active"
};

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ACCESS-TOKEN"
  },
  body: JSON.stringify(data)
};

fetch("https://gorest.co.in/public-api/users", options)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });
```

### PUT

The PUT method can be used to update the existing resource.

```Javascript
let data = {
  name: "Rahul Attuluri"
};

let options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ACCESS-TOKEN"
  },
  body: JSON.stringify(data)
};

fetch("https://gorest.co.in/public-api/users/1359", options)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });
```

### DELETE

The DELETE method can be used to delete the specified resource.

```Javascript
let options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ACCESS-TOKEN"
  }
};

fetch("https://gorest.co.in/public-api/users/1359", options)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });
```

```Javascript
let data = {
  name: "Rahul",
  gender: "Male",
  email: "rahul@gmail.com",
  status: "Active"
};

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer 5b8faa3592569928a8aa07468fac524e3255d48825a42c698da9b7eb99ef1415"
  },
  body: JSON.stringify(data)
};

fetch("https://gorest.co.in/public-api/users", options)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });
```

## HTTP Response Object Properties and Methods

Response Object provides multiple properties to give more information about the HTTP Response.

- status (number) - HTTP status code
- statusText (string) - Status text as reported by the server, e.g. "Unauthorized"
- headers
- url
- text() - Getting text from response
- json() - Parses the response as JSON

For example,

```Javascript
let options = {
  method: "GET"
};

fetch("https://gorest.co.in/public-api/users", options)
  .then(function(response) {
    return response.status;
  })
  .then(function(status) {
    console.log(status);  // 200
  });
```

In the above example, we can get the response status as `200` when the request is success.

```Javascript
let options = {
  method: "GET"
};

fetch("https://gorest.co.in/public-api/users", options)
  .then(function(response) {
    return response.status;
  })
  .then(function(status) {
    console.log(status);
  });
```

# Wikipedia Search Application

## HTML Input Element

### Search

The HTML input element with the type search is designed for the user to enter the search queries.

```HTML
<input type="search" />
```

## Bootstrap Components

### Spinner

The Spinners can be used to show the loading state of the page.

```HTML
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
```

## Wikipedia Search Application

```HTML
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="main-container">
      <div class="wiki-search-header text-center">
        <img class="wiki-logo" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png" />
        <br />
        <input placeholder="Type a keyword and press Enter to search" type="search" class="search-input w-100" id="searchInput" />
      </div>
      <div class="d-none" id="spinner">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <div class="search-results" id="searchResults"></div>
    </div>
  </body>
</html>
```

```CSS
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.main-container {
  font-family: "Roboto";
}

.wiki-search-header {
  border-style: solid;
  border-width: 1px;
  border-color: #d5cdcd;
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  margin-bottom: 40px;
}

.wiki-logo {
  margin-bottom: 30px;
  width: 150px;
}

.search-input {
  font-size: 18px;
  border-style: solid;
  border-width: 1px;
  border-color: #d5cdcd;
  border-radius: 3px;
  padding: 10px;
}

.search-results {
  width: 100%;
  padding-left: 20px;
}

.result-item {
  margin-bottom: 20px;
}

.result-title {
  font-size: 22px;
}

.link-description {
  color: #444444;
  font-size: 15px;
}

.result-url {
  color: #006621;
  text-decoration: none;
}
```

```Javascript
let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
  let { link, title, description } = result;

  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");

  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

  let titleBreakEl = document.createElement("br");
  resultItemEl.appendChild(titleBreakEl);

  let urlEl = document.createElement("a");
  urlEl.classList.add("result-url");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  resultItemEl.appendChild(urlEl);

  let linkBreakEl = document.createElement("br");
  resultItemEl.appendChild(linkBreakEl);

  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);

  searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
  spinnerEl.classList.add("d-none");

  for (let result of searchResults) {
    createAndAppendSearchResult(result);
  }
}

function searchWikipedia(event) {
  if (event.key === "Enter") {

    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipedia);
```

# Forms

## HTML Forms

The HTML Forms can be used to collect data from the user.

Forms are of different kinds:

- Login/Sign in Form
- Registration Form
- Contact Us Form, etc.

### HTML Form Element

The HTML `form` element can be used to create HTML forms. It is a container that can contain different types of Input elements like Text Fields, Checkboxes, etc.

```HTML
<form></form>
```

**Note**

Whenever we click a button or press `Enter` key while editing any input field in the form, the `submit` event will be triggered.

## Event Object Methods

### preventDefault

The `preventDefault()` method prevents the occurrence of default action.

Here in the form, it prevents the default behaviour of the `submit` event.

```Javascript
let myFormEl = document.getElementById("myForm");

myFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
});
```

## Event Types

There are different types of events.

- Keyboard Events
- Mouse Events
- Touch Events
- Form Events, etc.

### Form Events

A Form Event is an event that can occur within a form.

Some of the form events are:

- blur
- focus
- change, etc.

#### Blur Event

The `blur` event happens when an HTML element has lost focus.

```Javascript
let nameEl = document.getElementById("name");

nameEl.addEventListener("blur", function(event) {
  console.log("blur event triggered");
});
```

# Form Part - 2

## HTML Select Element

The HTML `select` element is used to create a drop-down list.

```HTML
<select></select>
```

## HTML Option Element

The HTML `option` element is used to create the menu option of a drop-down list.

The text content of the HTML `option` element is used as a label.

```HTML
<select>
  <option>Active</option>
</select>
```

### The value Attribute

Every HTML `option` element should contain the HTML `value` attribute.

```HTML
<option value="Active">Active</option>
```

## HTML Input Element

### Radio

The HTML input `radio` element is used to select one option among a list of given options.

```HTML
<input type="radio" id="genderMale" value="Male" />
<input type="radio" id="genderFemale" value="Female" />
```

#### HTML name attribute

The HTML `name` Attribute specifies the name for an HTML Element.

```HTML
<input type="radio" value="Male" name="gender" />
```

#### Radio Group

All the radio buttons with same name collectively called as a radio group.

We can select only one radio button within a radio group.

```HTML
<input type="radio" value="Male" name="gender" />
<input type="radio" value="Female" name="gender" />
```

## Boolean Attributes

For the HTML Boolean attributes, we only specify the name of the HTML attribute.

The presence of a boolean attribute represents the true value, and the absence represents the false value.

### HTML selected attribute

The `selected` attribute specifies that an option should be pre-selected when the page loads.

```HTML
<option value="Active" selected>Active</option>
```

### HTML checked attribute

The `checked` attribute specifies that an input element should be pre-selected (checked) when the page loads.

```HTML
<input type="radio" id="genderMale" value="Male" name="gender" checked />
```

# More Modern JS Concepts

## Spread Operator

The Spread Operator is used to unpack an iterable (e.g. an array, object, etc.) into individual elements.

### Spread Operator with Arrays

```Javascript
let arr1 = [2, 3];
let arr2 = [1, ...arr1, 4];

console.log(arr2);  // [1, 2, 3, 4]
```

#### Creating a Copy

```Javascript
let arr1 = [2, 3];
let arr2 = [...arr1];

console.log(arr2);  // [2, 3]
```

#### Concatenation

```Javascript
let arr1 = [2, 3];
let arr2 = [4, 5];
let arr3 = [...arr1, ...arr2];

console.log(arr3); // [2, 3, 4, 5]
```

### Spread Operator with Objects

```Javascript
let person = { name: "Rahul", age: 27 };
let personDetails = { ...person, city: "Hyderabad" };

console.log(personDetails);  // Object {name: "Rahul", age: 27, city: "Hyderabad"}
```

#### Creating a Copy

```Javascript
let person = { name: "Rahul", age: 27 };
let personDetails = { ...person };

console.log(personDetails);  // Object {name: "Rahul", age: 27}
```

#### Concatenation

```Javascript
let person = { name: "Rahul", age: 27 };
let address = { city: "Hyderabad", pincode: 500001 };
let personDetails = { ...person, ...address };

console.log(personDetails);  // Object {name: "Rahul", age: 27, city: "Hyderabad", pincode: 500001}
```

### Spread Operator with Function Calls

The Spread Operator syntax can be used to pass an array of arguments to the function. Extra values will be ignored if we pass more arguments than the function parameters.

```Javascript
function add(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3, 4, 5];

console.log(add(...numbers));  // 6
```

## Rest Parameter

With Rest Parameter, we can pack multiple values into an array.

```Javascript
function numbers(...args) {
  console.log(args);  // [1, 2, 3]
}

numbers(1, 2, 3);
```

### Destructuring arrays and objects with Rest Parameter Syntax

#### Arrays

```Javascript
let [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a);  // 1
console.log(b);  // 2
console.log(rest);  // [3, 4, 5]
```

#### Objects

```Javascript
let { firstName, ...rest } = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 27
};

console.log(firstName);  // Rahul
console.log(rest);  // Object {lastName: "Attuluri", age: 27}
```

<b>Note :</b>
The Rest parameter should be the last parameter.

```Javascript
function numbers(a, b, ...rest) {
  console.log(a);  // 1
  console.log(b);  // 2
  console.log(rest);  // [3, 4, 5]
}
numbers(1, 2, 3, 4, 5);
```

```Javascript
function numbers(a, ...rest, b) {
  console.log(a);
  console.log(rest);
  console.log(b);
}
numbers(1, 2, 3, 4, 5);  // Uncaught SyntaxError: Rest parameter must be last formal parameter
```

## Functions

### Default Parameters

The Default Parameters allow us to give default values to function parameters.

```Javascript
function numbers(a = 2, b = 5) {
  console.log(a);  // 3
  console.log(b);  // 5
}

numbers(3);
```

## Template Literals (Template Strings)

The Template Literals are enclosed by the backticks.

They are used to:

1. Embed variables or expressions in the strings
2. Write multiline strings

We can include the variables or expressions using a dollar sign with curly braces `${}`.

```Javascript
let firstName = "Rahul";

console.log(`Hello ${firstName}!`);  // Hello Rahul!
```

# More Modern JS Concepts Part - 2

## Operators

### Ternary Operator

A Ternary Operator can be used to replace `if...else` statements in some situations.

**Syntax:** `condition ? expressionIfTrue : expressionIfFalse`

```Javascript
let speed = 70;
let message = speed >= 100 ? "Too Fast" : "OK";

console.log(message);  // OK
```

## Conditional Statements

### Switch Statement

A Switch statement is a conditional statement like `if...else` statement used in decision making.

<b>Syntax:</b>

```Javascript
switch (expression) {
  case value1:
    /*Statements executed when the
    result of expression matches value1*/
    break;
  case value2:
    /*Statements executed when the
    result of expression matches value2*/
    break;
  ...
  case valueN:
    /*Statements executed when the
    result of expression matches valueN*/
    break;
  default:
    /*Statements executed when none of
    the values match the value of the expression*/
    break;
}
```

```Javascript
let day = 1;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");  // Monday
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid");
    break;
}
```

#### What happens if we forgot a break

If there is no `break` statement, then the execution continues with the next case until the `break` statement is met.

```Javascript
let day = 4;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  default:
    console.log("Invalid");
}
```

## Defining Functions

There are multiple ways to define a function.

- Function Declaration
- Function Expression
- Arrow Functions
- Function Constructor, etc.

### Arrow Functions

An Arrow function is a simple and concise syntax for defining functions.

It is an alternative to a function expression.

<b>Syntax:</b>

```Javascript
let sum = (param1, param2, …) => {
  // statement(s)
};
sum();
```

```Javascript
let sum = (a, b) => {
  let result = a + b;
  return result;
};
console.log(sum(4, 3));
```

#### Simple Expressions

In arrow functions, the `return` statement and curly braces are not required for simple expressions.

```Javascript
let sum = (a, b) => a + b;

console.log(sum(4, 3));  // 7
```

#### One parameter

If there is only one parameter, then parentheses are not required.

```Javascript
let greet = name => `Hi ${name}!`;

console.log(greet("Rahul"));  // Hi Rahul!
```

#### No parameters

If there are no parameters, parentheses will be empty, but they should be present.

```Javascript
let sayHi = () => "Hello!";

console.log(sayHi());  // Hello!
```

#### Returning Objects

```Javascript
let createUser = name => {
  return {
    firstName: name
  };
};

console.log(createUser("Rahul"));  // Object {firstName: "Rahul"}
```

**_Simple Expression_**

```Javascript
let createUser = name => { firstName: "Rahul" };

console.log(createUser());  // undefined
```

JavaScript considers the two curly braces as a code block, but not as an object syntax.

So, wrap the object with parentheses to distinguish with a code block.

```Javascript
let createUser = name => ({ firstName: "Rahul" });

console.log(createUser());  // Object {firstName: "Rahul"}
```

# Factory and Constructor Functions

## Factory Function

A Factory function is any function that returns a new object for every function call.

The Function name should follow the `camelCase` naming convention.

**Syntax**

```Javascript
function functionName(parameter1, parameter2, ...) {
  return {
    property1: parameter1,
    property2: parameter2,
    ...
    ...
  }
}
let myObject = functionName(arg1, arg2, ...)
```

```Javascript
function createCar(color, brand) {
  return {
    color: color,
    brand: brand,
    start: function() {
      console.log("started");
    }
  };
}

let car1 = createCar("blue", "Audi");
let car2 = createCar("red", "Tata");
let car3 = createCar("green", "BMW");

console.log(car1);  // Object { color: "blue", brand: "Audi", start: ƒ() }
console.log(car2);  // Object { color: "red", brand: "Tata", start: ƒ() }
console.log(car3);  // Object { color: "green", brand: "BMW", start: ƒ() }
```

### Shorthand Notations

```Javascript
function createCar(color, brand) {
  return {
    color,
    brand,
    start() {
      console.log("started");
    }
  };
}

let car1 = createCar("blue", "Audi");
let car2 = createCar("red", "Tata");
let car3 = createCar("green", "BMW");

console.log(car1);  // Object { color: "blue", brand: "Audi", start: ƒ() }
console.log(car2);  // Object { color: "red", brand: "Tata", start: ƒ() }
console.log(car3);  // Object { color: "green", brand: "BMW", start: ƒ() }
```

## Constructor Function

A regular function that returns a new object on calling with the new operator. The created new object is called an `Instance`.

The Function name should follow the `PascalCase` naming convention.

**_Syntax:_**

```Javascript
function FunctionName(parameter1, parameter2, ...) {
  this.property1 = parameter1;
  this.property2 = parameter2;
  ...
  ...
}
let myObject = new FunctionName(arg1, arg2, ...)
```

### The new Operator

When a function is called with the new operator, it does the following steps:

- Creates an empty object and assigns it to this
- Return this

```Javascript
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}

let car1 = new Car("blue", "Audi");
console.log(car1);  // Car { }
```

Here,

- `car1` is instance
- `car1.start()` is instance method
- `car1.color`, `car1.brand` are instance properties

### Factory vs Constructor Functions

| Factory Functions                              | Constructor Functions                   |
| ---------------------------------------------- | --------------------------------------- |
| Follows camelCase notation                     | Follows PascalCase notation             |
| Doesn't need new operator for function calling | Needs new operator for function calling |
| Explicitly need to return the object           | Created object returns implicitly       |

## JS Functions

Similar to Objects, Functions also have properties and methods.

### Default Properties

- name
- length
- constructor
- prototype, etc.

### Default Methods

- apply()
- bind()
- call()
- toString(), etc.

### Function Properties

#### The name Property

This property returns the name of the function.

```Javascript
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}
console.log(Car.name);  // Car
```

#### The length Property

This property returns the number of parameters passed to the function.

```Javascript
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}
console.log(Car.length);  // 2
```

#### The `typeof` function

```Javascript
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}
console.log(typeof(Car));  // function
```

## The Constructor Property

Every object in JavaScript has a constructor property.

The constructor property refers to the constructor function that is used to create the object.

```Javascript
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}
let car1 = new Car("blue", "Audi");
console.log(car1.constructor);  // f Car(color, brand) {}
```

## Built-in Constructor Function

These are the Constructor functions provided by JavaScript.

- function Date()
- function Error()
- function Promise()
- function Object()
- function String()
- function Number(), etc.

In JavaScript, date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods.

### Creating Date Objects

There are four ways to create a date object.

- new Date()
- new Date(milliseconds)
- new Date(datestring)
- new Date(year, month, day, hours, minutes, seconds, milliseconds)

#### new Date()

You can create a date object without passing any arguments to the `new Date()` constructor function.

```Javascript
let now = new Date();

console.log(now);  // Tue Feb 02 2021 19:10:29 GMT+0530 (India Standard Time) { }
console.log(typeof(now));  // object
```

Here, `new Date()` creates a new date object with the current date and local time.

**Note :**

- Coordinated Universal Time (UTC) - It is the global standard time defined by the World Time Standard. (This time is historically known as Greenwich Mean Time, as UTC lies along the meridian that includes London and nearby Greenwich in the United Kingdom.)
- Local Time - The user's device provides the local time.

#### new Date(milliseconds)

The `Date` object contains a number that represents milliseconds since 1 January 1970 UTC.

The `new Date(milliseconds)` creates a new date object by adding the milliseconds to zero time.

```Javascript
let time1 = new Date(0);
console.log(time1);  // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time) { }

// 100000000000 milliseconds from 1 Jan 1970 UTC
let time2 = new Date(100000000000);
console.log(time2);  // Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time) { }
```

<b>Note: </b> 1000 milliseconds is equal to 1 second.

#### new Date(date string)

The `new Date(date string)` creates a new date object from a date string.

**Syntax:** `new Date(datestring)`;

```Javascript
let date = new Date("2021-01-28");

console.log(date);  // Thu Jan 28 2021 05:30:00 GMT+0530 (India Standard Time) { }
```

You can also pass only the year and month or only the year. For example,

```Javascript
let date = new Date("2020-08");
console.log(date);  // Sat Aug 01 2020 05:30:00 GMT+0530 (India Standard Time) { }

let date1 = new Date("2020");
console.log(date1);  // Wed Jan 01 2020 05:30:00 GMT+0530 (India Standard Time) { }
```

**Short date format**

```Javascript
// short date format "MM/DD/YYYY"
let date = new Date("03/25/2015");
console.log(date);  // Wed Mar 25 2015 00:00:00 GMT+0530 (India Standard Time) { }
```

**Long date format**

```Javascript
// long date format "MMM DD YYYY"
let date1 = new Date("Jul 1 2021");
console.log(date1);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }
```

Month and Day can be in any order

```Javascript
let date2 = new Date("1 Jul 2021");
console.log(date2);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }
```

The month can be full or abbreviated. Also, month names are case insensitive.

```Javascript
let date3 = new Date("July 1 2021");
console.log(date3);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }

// commas are ignored
let date4 = new Date("JULY, 1, 2021");
console.log(date4);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }
```

#### new Date(year, month, day, hours, minutes, seconds, milliseconds)

It creates a new date object by passing a specific date and time.

```Javascript
let time1 = new Date(2021, 1, 20, 4, 12, 11, 0);
console.log(time1);  // Sat Feb 20 2021 04:12:11 GMT+0530 (India Standard Time) { }
```

Here, months are counted from 0 to 11. January is 0 and December is 11.

The passed argument has a specific order.

If four numbers are passed, it represents the year, month, day and hours.

```Javascript
let time1 = new Date(2021, 1, 20, 4);
console.log(time1);  // Sat Feb 20 2021 04:00:00 GMT+0530 (India Standard Time) { }
```

Similarly, if two arguments are passed, it represents year and month.

```Javascript
let time1 = new Date(2020, 1);
console.log(time1);  // Sat Feb 20 2021 04:00:00 GMT+0530 (India Standard Time) { }
```

**Warning**

If you pass only one argument, it is treated as milliseconds. Hence, you have to pass two arguments to use this date format.

### AutoCorrection in Date Object

When you assign out of range values in the Date object, it auto-corrects itself.

```Javascript
let date = new Date(2008, 0, 33);
// Jan does not have 33 days
console.log(date);  // Sat Feb 02 2008 00:00:00 GMT+0530 (India Standard Time) { }
```

33 days are auto corrected to 31 (jan) + 2 days in feb.

### Instance Methods

There are methods to access and set values like a year, month, etc. in the Date Object.

| Method        | Description                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| now()         | Returns the numeric value corresponding to the current time (the number of milliseconds passed since January 1, 1970, 00:00:00 UTC) |
| getFullYear() | Gets the year according to local time                                                                                               |
| getMonth()    | Gets the month, from 0 to 11 according to local time                                                                                |
| getDate()     | Gets the day of the month (1–31) according to local time                                                                            |
| getDay()      | Gets the day of the week (0-6) according to local time                                                                              |
| getHours()    | Gets the hour from 0 to 23 according to local time                                                                                  |
| getMinutes    | Gets the minute from 0 to 59 according to local time                                                                                |
| getUTCDate()  | Gets the day of the month (1–31) according to universal time                                                                        |
| setFullYear() | Sets the full year according to local time                                                                                          |
| setMonth()    | Sets the month according to local time                                                                                              |
| setDate()     | Sets the day of the month according to local time                                                                                   |
| setUTCDate()  | Sets the day of the month according to universal time                                                                               |

```Javascript
let date1 = new Date(1947, 7, 15, 1, 3, 15, 0);

console.log(date1.getFullYear());  // 1947
console.log(date1.getMonth());  // 7
```

#### Setting Date Values

```Javascript
let date1 = new Date(1947, 7, 15);
date1.setYear(2021);
date1.setDate(1);

console.log(date1);  // Sun Aug 01 2021 00:00:00 GMT+0530 (India Standard Time) { }
```

# More Modern JS Concepts Part - 3

## `this`

The `this` is determined in three ways.

- In Object methods, it refers to the object that is executing the current function.
- In Regular functions, it refers to the window object.
- In Arrow functions, it refers to the context in which the code is defined.

### `this` in Object Methods

```Javascript
let car = {
  color: "blue",
  brand: "Audi",
  start: function() {
    console.log(this);  // Object { color: "blue", brand: "Audi", start: ƒ() }
  }
};

car.start();
```

In the above example, this refers to the `car` object as it's executing the method `start`.

### `this` in Regular Functions

```Javascript
function start() {
  console.log(this);  // Window { }
}
start();
```

In the above example, `this` refers to the window object.

### `this` in Arrow Functions

In Arrow functions, this depends on two aspects:

- When the code is defined
- Context

Arrow function `inherits` this from the context in which the code is defined.

#### Object Methods

```Javascript
let car = {
  color: "blue",
  brand: "Audi",
  start: () => {
    console.log(this);  // Window { }
  }
};

car.start();
```

**Arrow Functions with Callbacks**

```Javascript
let car = {
  color: "blue",
  brand: "Audi",
  start: function() {
    setTimeout(() => {
      console.log(this);  // Object { color: "blue", brand: "Audi", start: ƒ() }
    }, 1000);
  }
};

car.start();
```

### `this` in Constructor Functions

In Constructor Function, `this` refers to the instance object.

```Javascript
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log(this);  // Car { }
  };
}

let car1 = new Car("blue", "Audi");
car1.start();
```

In the above example, this refers to the object car1.

#### Arrow Functions

```Javascript
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = () => {
    console.log(this);  // Car { }
  };
}

let car1 = new Car("blue", "Audi");
car1.start();
```

## Immutable and Mutable Values

### Immutable

All the primitive type values are immutable.

- Number
- String
- Boolean
- Symbol
- Undefined, etc.

```Javascript
let x = 5;
let y = x;
y = 10;

console.log(x);  // 5
console.log(y);  // 10
```

### Mutable

All the Objects are mutable.

- Object
- Array
- Function

```Javascript
let x = { value: 5 };
let y = x;
let z = { value: 20 };

y.value = 10;

console.log(x);  // Object { value: 10 }
console.log(y);  // Object { value: 10 }

y = z;

console.log(x);  // Object { value: 10 }
console.log(y);  // Object { value: 20 }
```

## Declaring Variables

In JavaScript, a variable can be declared in 3 ways.

- Using let
- Using const
- Using var

### let

While declaring variables using let,

- Initialization is not mandatory
- Variables can be reassigned

```Javascript
let x;
x = 10;

console.log(x);  // 10

x = 15;
console.log(x);  // 15
```

### const

While declaring variables using const,

- Initialization is mandatory
- Once a value is initialized, then it can't be reassigned

Without Initialization:

```Javascript
const x;

x = 7;  // SyntaxError {"Const declarations require an initialization value (1:21)"}
```

Reassignment

```Javascript
const x = 7;

x = 9;  // TypeError {"Assignment to constant variable."}
```

#### Mutating Object properties

```Javascript
const car = {
 color : "blue",
 brand : "Audi"
};
car.color = "red";

console.log(car.color);  // red
```

But objects can't be reassigned.

```Javascript
const car = {
 color : "blue",
 brand : "Audi"
};
car.color = "red";

car = {};  // TypeError {"Assignment to constant variable."}
```

# Prototypal Inheritance

## Built-in Constructor Functions

These are the built-in constructor functions provided by JavaScript.

- function Array()
- function Function()
- function Promise()
- function Object()
- function String()
- function Number(), etc.

## Built-in Array Constructor Function

### Default Properties and Methods

Properties:

- constructor
- length
- prototype, etc.

Methods:

- push()
- pop()
- shift()
- splice()
- unshift(), etc.

### Creating an Array with the `new` Operator (Older way of writing)

**Syntax:** `let myArray = new Array(item1, item2, ...);`

```Javascript
let myArray = new Array("a", 2, true);
myArray.push("pen");

console.log(myArray);  // Array (4)["a", 2, true, "pen"]
console.log(myArray.length);  // 4
```

## Prototype Property

The Prototype property will be `shared` across all the `instances` of their constructor function.

### Accessing the Prototype of a Constructor Function

```Javascript
console.log(Array.prototype);
```

### Accessing the shared Prototype of an Instance

```Javascript
let myArray = new Array("a", 2, true);
console.log(Object.getPrototypeOf(myArray));
```

### Prototypal Inheritance

On calling the new() operator, all the properties and methods defined on the prototype will become accessible to the instance objects. This process is called Prototypal Inheritance.

## Built-in Function Constructor Function

### Default Properties and Methods

**Properties:**

- name
- length
- constructor
- prototype, etc.

**Methods:**

- apply()
- bind()
- call()
- toString(), etc.

### Creating a Function with the new Operator (Older way of writing)

**Syntax:** `let myFunction = new Function("param1, param2, ...", function body);`

```Javascript
let Car = new Function("color, brand",
  `this.color = color;
   this.brand = brand;
   this.start = function() {
     console.log("started");
  };`);

console.log(Function.prototype);
```

## Instance Specific and Prototype Properties

### Prototype Properties/ Methods

The Prototype Properties/ Methods are the properties or methods common across the instance objects.

Examples:

- calculateAge
- displayGreetings
- displayProfileDetails
- calculateIncome

#### Adding a Method to the prototype

```Javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.displayFullName = function() {
  return this.firstName + " " + this.lastName;
};

let person1 = new Person("Virat", "Kohli");
let person2 = new Person("Sachin", "Tendulkar");

console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));
```

### Instance Specific Properties/ Methods

The Instance Specific Properties/ Methods are the properties or methods specific to the instance object.

Examples:

- gender
- yearOfBirth
- friendsList
- name

```Javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.displayFullName = function() {
  return this.firstName + " " + this.lastName;
};

let person1 = new Person("Virat", "Kohli");
console.log(Object.getOwnPropertyNames(person1));
```

# JS Classes

## Class

The `class` is a special type of function used for creating multiple objects.

### Constructor Method

The constructor method is a special method of a class for creating and initializing an object of that class.

**Syntax**

```Javascript
class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }
  method1() { ... }
  method2() { ... }
}
```

#### Creating a Single Object

**Syntax :**

````Javascript
class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }
  method1() { ... }
  method2() { ... }
}
let myObject = new MyClass(property1, property2);```
````

```Javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
 }
 displayFullName() {
   return this.firstName + " " + this.lastName;
 }
}
let person1 = new Person("Virat", "Kohli");

console.log(person1);  // Person {...}
```

#### Creating Multiple Objects

```Javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
let person1 = new Person("Virat", "Kohli");
let person2 = new Person("Sachin", "Tendulkar");

console.log(person1);  // Person {...}
console.log(person2);  // Person {...}
```

## Prototype property of a Class

```Javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayFullName() {
   return this.firstName + " " + this.lastName;
  }
}
let person1 = new Person("Virat", "Kohli");

console.log(Person.prototype);  // Person {...}
```

### Prototype of an Instance

The Instance Prototype refers to the prototype object of the constructor function.

```Javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayFullName() {
   return this.firstName + " " + this.lastName;
  }
}
let person1 = new Person("Virat", "Kohli");

console.log(Object.getPrototypeOf(person1));  // Person {...}
```

<b>Note :</b> The Type of a class is a function

## Inheritance in JS Classes

The Inheritance is a mechanism by which a class inherits methods and properties from another class.

### Extends

The `extends` keyword is used to inherit the methods and properties of the superclass.

### Super

Calling `super()` makes sure that `SuperClass constructor()` gets called and initializes the instance.

**Syntax**

```Javascript
class SuperClass {
}
class SubClass extends SuperClass{
  constructor(property1, property2){
    super(property1);
    this.property2 = property2;
  }
  method1() {  }
}
let myObject = new SubClass(property1, property2);
```

Here, `SubClass` inherits methods and properties from a `SuperClass`.

### Method Overriding

Here the constructor method is overridden. If we write the `SuperClass` methods in `SubClass`, it is called method overriding.

**Syntax:**

```Javascript
class SuperClass {
}
class SubClass extends SuperClass{
  constructor(property1, property2){
    super(property1);
    this.property2 = property2;
  }
}
let myObject = new SubClass(property1, property2);
```

```Javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return `${this.name} is eating`;
  }
  makeSound() {
    return `${this.name} is shouting`;
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sniff() {
    return `${this.name} is sniffing`;
  }
}
class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  knead() {
    return `${this.name} is kneading`;
  }
}
let animal1 = new Animal("gorilla");
let someDog = new Dog("someDog", "German Shepherd");
let persianCat = new Cat("someCat", "Persian Cat");

console.log(animal1);  // Animal {...}
console.log(animal1.eat());  // gorilla is eating

console.log(someDog);  // Dog {...}
console.log(someDog.eat());  // someDog is eating
console.log(someDog.sniff());  // someDog is sniffing

console.log(persianCat);  // Cat {...}
console.log(persianCat.knead());  // someCat is kneading
console.log(persianCat.eat());  // someCat is eating
console.log(persianCat.makeSound());  // someCat is shouting
```

## this in Classes

### Super Class

In class, `this` refers to the instance object.

```Javascript
class Animal {
  constructor(name) {
    this.name = name;
 }
 eat() {
   return this;
 }
 makeSound() {
   return `${this.name} is shouting!`;
 }
}
let animal1 = new Animal("dog");

console.log(animal1.eat());  // Animal {...}
```

Here `this` refers to the `animal1`.

### Sub Class

```Javascript
class Animal {
    constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sniff() {
    return this;
  }
}
let dog = new Dog("dog", "german Shepherd");

console.log(dog.sniff());  // Dog {...}
```

# JS Promises

## Synchronous Execution

**Example**

```Javascript
alert("First Line");
alert("Second Line");
alert("Third Line");
```

The code executes line by line. This behavior is called synchronous behavior, in JS alert works synchronously.

## Asynchronous Execution

```Javascript
const url = "https://apis.ccbp.in/jokes/random";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    //statement-1
    console.log(jsonData); // Object{ value:"The computer tired when it got home because it had a hard drive" }
  });

//statement-2
console.log("fetching done"); // fetching done
```

In the above example, the second statement won’t wait until the first statement execution. In JS, fetch() works asynchronously.

## JS Promises

- Promise is a way to handle Asynchronous operations.

- A promise is an object that represents a result of operation that will be returned at some point in the future.

```Javascript
const url = "https://apis.ccbp.in/jokes/random";
let responseObject = fetch(url);

console.log(responseObject); // Promise{ [[PromiseStatus]]:pending, [[PromiseValue]]:undefined }
console.log("fetching done"); // fetching done
```

<b>Note</b>
A promise will be in any one of the three states:

- Pending : Neither fulfilled nor rejected
- Fulfilled : Operation completed successfully
- Rejected : Operation failed

### Resolved State

When a Promise object is Resolved, the result is a value.

```Javascript
const url = "https://apis.ccbp.in/jokes/random";
let responsePromise = fetch(url);

responsePromise.then((response) => {
  console.log(response); // Response{ … }
});
```

### Rejected State

Fetching a resource can be failed for various reasons like:

- URL is spelled incorrectly
- Server is taking too long to respond
- Network failure error, etc.

```Javascript
const url = "https://a.ccbp.in/random";
let responsePromise = fetch(url);

responsePromise.then((response) => {
  return response;
});
responsePromise.catch((error) => {
  console.log(error); // TypeError{ "Failed to fetch" }
});
```

### Promising Chaining

Combining multiple .then()s or .catch()s to a single promise is called promise chaining.

**Syntax:**

```Javascript
const url = "INCORRECT_RESOURCE_URL";
let responsePromise = fetch(url);

responsePromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### OnSuccess Callback returns Promise

Here, log the response in JSON format.

```Javascript
const url = "RESOURCE_URL";
let responsePromise = fetch(url);

responsePromise.then((response) => {
  console.log(response.json());
});
```

#### Chaining OnSuccess Callback again

```Javascript
const url = "https://apis.ccbp.in/jokes/random";
let responsePromise = fetch(url);

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

### Fetch with Error Handling

Check the behavior of code with valid and invalid URLs.

```Javascript
const url = "https://apis.ccbp.in/jokes/random";
let responsePromise = fetch(url);

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); // Object { value: "They call it the PS4 because there are only 4 games worth playing!"
  })
  .catch((error) => {
    console.log(error);
  });
```

# JS Promises

## Asynchronous JS Code Style

There are two main types of asynchronous code style you'll come across in JavaScript:

- Callback based

  Example : `setTimeout()`, `setInterval()`

- Promise based

  Example : `fetch()`

## Creating your own Promises

Promises are the new style of async code that you'll see used in modern JavaScript.

```Javascript
const myPromise = new Promise((resolveFunction, rejectFunction) => {
      //Async task
});
```

In the above syntax:

- The Promise constructor takes a function (an executor) that will be executed immediately and passes in two functions: resolve, which must be called when the Promise is resolved (passing a result), and reject when it is rejected (passing an error).
- The executor is to be executed by the constructor, during the process of constructing the new Promise object.
- resolveFunction is called on promise fulfilled.
- rejectFunction is called on promise rejection.

**Example**

```Javascript
const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

console.log(myPromise());
```

### Accessing Arguments from Resolve

When `resolve()` is excuted, callback inside `then()` will be executed.

```Javascript
const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 1000);
  });
};

myPromise().then((fromResolve) => {
  console.log(fromResolve); // Promise Resolved
});
```

### Accessing Arguments from Reject

When `reject()` is excuted, callback inside `catch()` will be executed.

```Javascript
const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise Rejected");
    }, 2000);
  });
};

myPromise()
  .then((fromResolve) => {
    console.log(fromResolve);
  })
  .catch((fromReject) => {
    console.log(fromReject); // Promise Rejected
  });
```

## Async/Await

- The Async/Await is a modern way to consume promises.
- The Await ensures processing completes before the next statement executes.

**Syntax**

```Javascript
const myPromise = async () => {
  let promiseObj1 = fetch(url1);
  let response1 = await promiseObj1;
  let promiseObj2 = fetch(url2);
  let response2 = await promiseObj2;
};

myPromise();
```

<b>Note</b>

- Use async keyword before the function only if it is performing async operations.
- Should use await inside an async function only.

### Fetch with Async and Await

```Javascript
const url = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = async () => {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
};

doNetworkCall();
```

### Error Handling with Async and Await

```Javascript
const url = "https://a.ccbp.in/jokes/random";

const doNetworkCall = async () => {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
};

doNetworkCall();
```

### Async Function always returns Promise

```Javascript
const url = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = async () => {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
};

const asyncPromise = doNetworkCall();
console.log(asyncPromise);
```

## String Manipulations

There are methods and properties available to all strings in JavaScript.

| String Methods                       | Functionality                     |
| ------------------------------------ | --------------------------------- |
| toUpperCase(), toLowerCase()         | Converts from one case to another |
| includes(), startsWith(), endsWith() | Checks a part of the string       |
| split()                              | Splits a string                   |
| toString()                           | Converts number to a string       |
| trim(), replace()                    | Updates a string                  |
| concat(), slice(), substring()       | Combines & slices strings         |
| indexOf()                            | Finds an index                    |

### trim()

The `trim()` method removes whitespace from both ends of a string.

**Syntax :** `string.trim()`

```Javascript
const greeting = "   Hello world!  ";
console.log(greeting);
console.log(greeting.trim());
```

### slice()

The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.

**Syntax :** `string.slice(start, end)`

```Javascript
const text = "The quick brown fox";
console.log(text.slice(0, 3)); // The
console.log(text.slice(2, 3)); // e
```

### toUpperCase()

The `toUpperCase()` method converts a string to upper case letters.

**Syntax :** `string.toUpperCase()`

```Javascript
const text = "The quick brown fox";
console.log(text.toUpperCase()); // THE QUICK BROWN FOX
```

### toLowerCase()

The `toLowerCase()` method converts a string to lower case letters.

**Syntax :** `string.toLowerCase()`

```Javascript
const text = "Learn JavaScript";
console.log(text.toLowerCase()); // learn javascript
```

### split()

The `split()` method is used to split a string into an array of substrings and returns the new array.

**Syntax :** `string.split(separator, limit)`

```Javascript
const str = "He-is-a-good-boy";
const words = str.split("-");

console.log(words); // ["He", "is", "a", "good", "boy"]
```

### replace()

The `replace()` method searches a string for a specified value, or a regular expression, and returns a new string where the specified value is replaced.

**Syntax :** `string.replace(specifiedvalue, newvalue)`

```Javascript
const str = "Football is a popular sport. Many countries play Football. Football tournaments are watched worldwide. Football fans are everywhere.";
const words = str.replace("Football", "Soccer");

console.log(words); // Soccer is a popular sport. Many countries play Football. Football tournaments are watched worldwide. Football fans are everywhere.
```

### includes()

- The includes() method determines whether a string contains the characters of a specified string.

- It returns true if the string contains the value, otherwise it returns false.

**Syntax :** `string.includes(searchvalue, start)`

```Javascript
const str = "Learn 4.0 Technologies";
const word = str.includes("Tech");
const number = str.includes("5.0");

console.log(word); // true
console.log(number); // false
```

### concat()

The `concat()` method is used to join two or more strings.

**Syntax :** `string.concat(string1, string2, ..., stringX)`

```Javascript
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(str2)); // HelloWorld
console.log(str1.concat(" Pavan", ". Have a nice day.")); // Hello Pavan. Have a nice day.
```

### indexOf()

The `indexOf()` method returns the position of the first occurrence of a specified value in a string.

**Syntax :** `string.indexOf(searchvalue, start)`

```Javascript
const str = "Building Global Startups";
console.log(str.indexOf("Global")); // 9
console.log(str.indexOf("up")); // 21
```

### startsWith()

The `startsWith()` method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

**Syntax :** `string.startsWith(searchvalue, start)`

```Javascript
const str = "World-class Products";
console.log(str.startsWith("rld")); // false
console.log(str.startsWith("World")); // true
```

### endsWith()

The `endsWith()` method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

**Syntax :** `string.endsWith(searchvalue, length)`

```Javascript
const str = "How are you?";
console.log(str.endsWith("you?")); // true
console.log(str.endsWith("re")); // false
```

### toString()

The `toString()` method returns the value of a string object.

**Syntax :** `string.toString()`

```Javascript
const number = 46;
const newNumber = number.toString();

console.log(newNumber); // 46
console.log(typeof newNumber); // string
```

### substring()

The `substring()` method returns the part of the string between the start and end indexes, or to the end of the string.

**Syntax :** `string.substring(start, end)`

```Javascript
const str = "I am learning JavaScript";
console.log(str.substring(2, 9)); // am lear
console.log(str.substring(6)); // earning JavaScript
```

### Length

The `length` property returns the length of a string (number of characters).

**Syntax :** `string.length`

```Javascript
const str = "Upgrade to CCBP Tech 4.0 Intensive";
console.log(str.length); // 34
```

# More JS Concepts

## Scoping

The Scope is the region of the code where a certain variable can be accessed.

In JavaScript there are two types of scope:

- Block scope
- Global scope

### Block Scope

If a variable is declared with const or let within a curly brace ({}), then it is said to be defined in the Block Scope.

- if..else
- function (){}
- switch
- for..of, etc.

```Javascript
let age = 27;
if (age > 18) {
  let x = 0;
  console.log(x); // 0
}
console.log(x); //  ReferenceError{"x is not defined"}
```

### Global Scope

- If a variable is declared outside all functions and curly braces ({}), then it is said to be defined in the Global Scope.
- When a variable declared with let or const is accessed, Javascript searches for the variable in the block scopes first followed by global scopes.

```Javascript
const x = 30;
function myFunction() {
  if (x > 18) {
    console.log(x); // 30
  }
}

myFunction();
```

# Hoisting

## Function Declarations

Hoisting is a JavaScript mechanism where function declarations are moved to the top of their scope before code execution.

```Javascript
let x = 15;
let y = 10;
let result = add(x, y);
console.log(result); // 25

function add(a, b) {
  return a + b;
}
```

## Function Expressions

Function expressions in JavaScript are not hoisted.

```Javascript
myFunction();
let myFunction = function () {
  let x = 5;
  console.log(x); // ReferenceError{"Cannot access 'myFunction' before initialization"}
};
```

## Arrow Functions

Arrow Functions in JavaScript are not hoisted.

```Javascript
myFunction();
let myFunction = () => {
  let x = 5;
  console.log(x); // ReferenceError{"Cannot access 'myFunction' before initialization"}
};
```

# More Array Methods

The `map()`, `forEach()`, `filter()` and `reverse()` are some of the most commonly used array methods in JavaScript.

### Map()

1. The map() method creates a new array with the results of calling a function for every array element.
2. The map() method calls the provided function once for each element in an array, in order.

**Syntax :** `array.map(callback(currentValue, index, arr))`

1. Here the callback is a function that is called for every element of array.
2. currentValue is the value of the current element and index is the array index of the current element. Here index and arr are optional arguments.

```Javascript
const numbers = [1, 2, 3, 4];
const result = numbers.map((number) => number * number);

console.log(result); // [1, 4, 9, 16]
```

### forEach()

The `forEach()` method executes a provided function once for each array element. It always returns undefined.

**Syntax :** `array.forEach(callback(currentValue, index, arr))`

Here index and arr are optional arguments.

```Javascript
let fruits = ["apple", "orange", "cherry"];

fruits.forEach((fruit) => console.log(fruit));
```

### filter()

1. The filter() method creates a new array filled with all elements that pass the test (provided as a function).

2. A new array with the elements that pass the test will be returned. If no elements pass the test, an empty array will be returned.

**Syntax :** `array.filter(function(currentValue, index, arr))`

Here index and arr are optional arguments.

```Javascript
const numbers = [1, -2, 3, -4];
const positiveNumbers = numbers.filter((number) => number > 0);

console.log(positiveNumbers); // [1, 3]
```

### reduce()

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

**Syntax :** `array.reduce(function(accumulator, currentValue, index, arr), initialValue)`

Here accumulator is the initialValue or the previously returned value of the function and currentValue is the value of the current element, index and arr are optional arguments.

```Javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer)); // 10
```

### every()

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

**Syntax :** `array.every(function(currentValue, index, arr))`

Here index and arr are optional arguments.

```Javascript
let array1 = [32, 33, 16, 20];
const result = array1.every((array1) => array1 < 40);

console.log(result); // true
```

### some()

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

**Syntax :** `array.some(function(currentValue, index, arr))`

Here index and arr are optional arguments.

```Javascript
const myAwesomeArray = ["a", "b", "c", "d", "e"];
const result = myAwesomeArray.some((alphabet) => alphabet === "d");

console.log(result); // true
```

### reverse()

The `reverse()` method reverses the order of the elements in an array.The first array element becomes the last, and the last array element becomes the first.

**Syntax :** `array.reverse()`

```Javascript
const myArray = ["iBHubs", "CyberEye", "ProYuga"];
const reversedArray = myArray.reverse();

console.log(reversedArray); // ["ProYuga", "CyberEye", "iBHubs"]
```

### flat()

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Syntax :** `let newArray = arr.flat([depth]);`

```Javascript
const arr1 = [0, 1, 2, [3, 4]];
const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr1.flat()); // [ 0,1,2,3,4 ]
console.log(arr2.flat(2)); // [0, 1, 2, [3, 4]]
```

## Mutable & Immutable methods

Mutable methods will change the original array and Immutable methods won't change the original array.

| Mutable methods | Immutable methods |
| --------------- | ----------------- |
| shift()         | map()             |
| unshift()       | filter()          |
| push()          | reduce()          |
| pop()           | forEach()         |
| sort()          | slice()           |
| reverse()       | join()            |
| splice(), etc.  | some(), etc.      |
