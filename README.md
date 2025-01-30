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

# Object And Array

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
