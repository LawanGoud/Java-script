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
