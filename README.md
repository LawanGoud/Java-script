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
