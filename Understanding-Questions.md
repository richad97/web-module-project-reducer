# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- We call on the dispatch function provided by useReducer hook, passing in our addOne action as the argument.
- This causes the reducer function to work based off of the object the action function returned. The action returns an object with a single key of type, and depending on the value of that key, the reducer will know what to do.
- TotalDisplay shows the total plus 1.
