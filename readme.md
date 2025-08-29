. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans.
The differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll in javaScript for DOM manupulation lie in their selection methods, return types.
getElementById: Select a single element by Id.
getElementsByClassNam: Select element based on their class.
querySelector: Select the first element that matches the provided CSS selector.
querySelectorAll:Select all elements that match the provided CSS selector, similar to querySelector.

2. How do you **create and insert a new element into the DOM**?
Ans:
To create and insert a new element into a DOM, there are two steps...
Firstly, we have to use document.createElement()
and after creating DOM it's need to be attached within an existing element of a DOM by
parentNode.appendChild(newElement)

3. What is **Event Bubbling** and how does it work?
Ans. 
Event Bubbling is the process where an event starts from the innermost element that triggered the event, and then propagates through its parent elements until it reaches the root.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans.
Event Delegation is a technique where instead of adding event listeners to multiple child elements, you add a single event listener to a parent element.
It is useful for less memory usages and Dynamic and easy to clean code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans.

preventDefault(): stops the browsers default behaviour for an event and does not bubbling.
stopPropagation(): stops the event from  propagating to parent elements and does not stop the default behavior.

