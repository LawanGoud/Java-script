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
