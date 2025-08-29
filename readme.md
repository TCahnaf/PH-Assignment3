Question 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
Ans: getElementById captures and returns an element by its ID in the DOM. getElementsByClassName returns an HTML collection of elements by their class name. querySelector returns the first element that matches a CSS selector and querySelectorAll returns all elements matching the selector.



Question 2: How do you create and insert a new element into the DOM?
Ans: you create HTML elements using the document.createElement() method and you can add the element to the DOM using the .appendChild() method.


Question 3: What is Event Bubbling and how does it work?
Ans:Event bubbling is when events on child elements bubble up to the parent elements in the DOM tree. For example, if we have click event listeners on the body, a div in the body, and  a button inside the div, clicking the button will cause the click events on the parent div and the body.



Question 4: What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is when we add a single event listener to a parent element instead of adding separate event listeners to each child element. It is useful as it works on dynamic elements and reduces the number of event listeners, helps with memory optimization and reduces the load on the DOM.


Question 5: What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stops the default behavior of an element. For example, using preventDefault() on a button click in a form prevents the page from reloading, which is the default action. The stopPropagation() method is a mechanism that helps prevent an event from propagating or bubbling to parent elements in the DOM. 
