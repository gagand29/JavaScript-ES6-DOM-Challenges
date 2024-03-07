# JavaScript-ES6-DOM-Challenges

This repository contains a collection of JavaScript coding challenges focusing on ES6 features and DOM manipulation. Each challenge is accompanied by its solution, organized neatly into folders for easy reference.

**JavaScript Variables Exercise**
Welcome to the JavaScript Variables Exercise! Before we dive into the challenges, let's have a quick overview of JavaScript and its fundamental concepts.

**What is JavaScript?**
JavaScript is a powerful programming language commonly used for web development. It adds interactivity and behavior to websites, allowing developers to create dynamic and engaging user experiences.

**How is JavaScript Helpful in Adding Behavior to Websites?**
JavaScript enables developers to manipulate the content and behavior of web pages in real-time. It can be used to handle user interactions, validate forms, create animations, fetch and display data dynamically, and much more. In essence, JavaScript empowers developers to bring websites to life by making them interactive and responsive.

**Data Types and Variables**
In JavaScript, data is categorized into various types, such as numbers, strings, booleans, arrays, objects, etc. Variables are used to store and manipulate this data. They act as containers that hold values that can be accessed and modified throughout the execution of a program.

Now that we have a basic understanding of JavaScript, let's jump into our first challenge!

**Challenge 1 - variable swapping**

Certainly! Here's a revised version of the challenge question to provide a different perspective:

Challenge 1: Variable Swapping
Consider the following scenario:

You have two variables, a and b, each initialized with a string value.

Your task is to write JavaScript code to swap the values of these variables so that:

Variable a holds the value "3". (a=3)
Variable b holds the value "2". (b=2)
Upon running the code, it should output:
a is 2
b is 3
**---------**
Variables and Naming: Utilized to store and manipulate data, such as the current age and calculated time left.
Basic Arithmetic Operations: Employed to calculate the remaining time in terms of days, weeks, and months.
String Concatenation: Used to construct the output message by combining strings with calculated values.

**Challenge 2 - Time Left Calculation**
Imagine you're planning a long-term project that will take several years to complete. You want to know how much time you have left to work on it if you live until 80 years old.

Write a JavaScript function that takes your current age as input and calculates how many days, weeks, and months you have left until you turn 80 years old. The function should output a message in the following format:

You have x days, y weeks, and z months left.

Assume there are 365 days in a year, 52 weeks in a year, and 12 months in a year.

For example, if you are currently 40 years old, the function should output:

You have 14600 days, 2080 weeks, and 480 months left.

**----------------------------------------------------------------**

Functions in JavaScript: Utilized to encapsulate BMI calculation logic, improving code organization and reusability.
Mathematical Operations: Involves arithmetic operations like division and exponentiation to compute the BMI.

**Challenge 3: Discount Calculator**
Create a JavaScript function that calculates the final price after applying a discount to an original price.

Your task is to write a function that takes the original price and discount percentage as inputs and returns the discounted price. The output should be rounded to the nearest whole number.

For example, if the original price is $100 and the discount percentage is 20%, the function should return $80.

Write the function without using any alerts, prompts, or console logs. Your code should only contain the function, and the result has to be returned by the function. You do not need to call the function.

output must be like this :
Original Price: $100
Discount Percentage: 20%
Discounted Price: $80

**--------------------------------------------------------**
**Challenge 4: Leap Year Checker**

Write a program that determines whether a given year is a leap year. A normal year has 365 days, while leap years have 366, with an extra day in February. The concept of leap years is fascinating, and you can learn more about it in this video.

To determine if a particular year is a leap year:

A year is a leap year if it is evenly divisible by 4.
However, if the year is also evenly divisible by 100, it is not a leap year, unless...
The year is also evenly divisible by 400, in which case it is a leap year.
For example, let's analyze whether the year 2000 is a leap year:

2000 ÷ 4 = 500 (Leap)

2000 ÷ 100 = 20 (Not Leap)

2000 ÷ 400 = 5 (Leap!)

So, the year 2000 is a leap year.

However, the year 2100 is not a leap year because:

2100 ÷ 4 = 525 (Leap)

2100 ÷ 100 = 21 (Not Leap)

2100 ÷ 400 = 5.25 (Not Leap)

**----------------------------------------------------------------**
**Challenge 5: Activity Coordinator**

You are tasked with writing a function that will randomly select a person from a list of names to coordinate and organize an activity for the group. The selected person will be responsible for planning and executing the activity for everyone.

Instructions:
Write a function that selects a random name from the provided list of names and returns the name of the person selected as the activity coordinator. The function should not display the output using `alert`, `prompt`, or `console.log`. Instead, the output should be returned directly from the function.

Important Note:
The output of your function should match the example output exactly, including capitalization and punctuation.

**Example Input**
["Gagan", "Shreyas", "Shashank", "Adi", "Anshu"]

**----------------------------------------------------------------**

**Challenge 6: Fibonacci Sequence Generator**

Fibonacci was an Italian mathematician who introduced the Fibonacci sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

In this challenge, you're tasked with creating a function that generates the Fibonacci sequence up to a given number of items.

Instructions:
Write a function called fibonacciGenerator(n) where n is the number of items in the sequence. The function should return an array containing the Fibonacci sequence.

Important Note:
The first two numbers in the sequence must be 0 and 1.

Example Usage:

javascript
Copy code
fibonacciGenerator(3); // Output: [0, 1, 1]

**----------------------------------------------------------------**

**Challenge 7: DOM Element Manipulation**

Objective: The objective of this challenge is to practice manipulating HTML elements using JavaScript and understanding the basics of the Document Object Model (DOM).

Instructions:

Toggle Element Visibility:

**Write a JavaScript function called toggleElementVisibility(elementId).**
This function should toggle the visibility of an HTML element with the given ID.
If the element is currently visible, it should be hidden, and vice versa.
Highlight Element:

**Write a JavaScript function called highlightElement(elementId).**
This function should add a CSS class to the HTML element with the given ID, making it stand out visually.
The added CSS class should be defined in your CSS file (e.g., highlight).
Update Element Content:

**Write a JavaScript function called updateElementContent(elementId, newContent).**
This function should update the text content of the HTML element with the given ID to the new content provided.
Example Usage:

Explanation:

The **HTML** section contains elements such as buttons and paragraphs that will be manipulated using JavaScript functions.
The **JavaScript** section defines the three functions required for element manipulation: toggleElementVisibility, highlightElement, and updateElementContent.
The **CSS** section defines a CSS class .highlight which will be applied to elements to highlight them visually.
Challenge Completion:

Implement the provided JavaScript functions in your project's JavaScript file.
Ensure that the provided HTML elements have the required IDs.
Optionally, define the CSS class .highlight in your project's CSS file for visual highlighting.

# ----------------------------------------------------------------

**Challenge 8:** Party Mode Button

Objective: In this challenge, you will implement a "Party Mode" button using JavaScript event listeners and DOM manipulation.

Instructions:

Create a Party Mode Button:

Instructions:

Create a Party Mode Button:

**Write a JavaScript function called partyModeButton(buttonId).**
This function should add a click event listener to the HTML button with the given ID.
When the button is clicked, it should change the background color of the page randomly, creating a fun and vibrant party atmosphere.

# ------------------------------------------------------------------

**Challenge 9: Higher Order Functions and Function Passing**

Objective: Demonstrate higher-order functions and function passing in JavaScript.

Instructions:

1. **Create a Higher Order Function:**

   Write a JavaScript function `higherOrderFunction(callbackFunction)` to invoke another function provided as `callbackFunction`.

2. **Implement Function Passing:**

   Write two functions:
   
   - **`sayHello(name)`**: Log a greeting message to the **console** with the given name.
   
   - **`sayGoodbye(name)`**: Log a farewell message to the **console** with the given name.

   Call `higherOrderFunction` twice, passing `sayHello` and `sayGoodbye` as arguments.

This challenge showcases:

- Higher-order functions understanding.
- Functions as first-class citizens in JavaScript.
- Function passing as arguments.

To complete:

1. Define `higherOrderFunction` to invoke the provided callback function.
2. Implement `sayHello` and `sayGoodbye` functions.
3. Call `higherOrderFunction` twice with appropriate functions.
4. Ensure correct function invocation with suitable arguments.
5. Test to confirm proper callback function execution.

**To check the output in the Chrome console, open the Developer Tools (`Ctrl + Shift + I` or `Cmd + Option + I`) and navigate to the "Console" tab.**