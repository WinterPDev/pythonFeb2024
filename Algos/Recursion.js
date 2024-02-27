
/*
💭 What is Recursion?
    - Recursion is a technique where a function calls itself.
    - The technique is used to break down larger problems into smaller ones that can be more managable.

How does it work?!

1. Base Case:
Every recursive function needs a "base case". 
It's the condition that escapes the recursion/tells it when to stop running.
When the base case is reached, that's when the function stops calling itself and starts to unravel the "stack" of nested calls.
Example: Counting down from 5, the base case is when you hit 1 or 0. 

2. Smaller Subproblems:
Recursion breaks down a big problem into smaller subproblems.
Each recursive call works on a simpler version of the overall problem.

3. Stack of Calls:
When a function calls itself, it gets added to a stack of calls.
The computer keeps track of all these nested calls.
Once the base case is reached, it starts popping calls off the stack. 
The stacks are popped in "FILO" first in, last out.


But...why Recursion?
    - It elegantly solves problems with repetitive structures (Such as Trees, Graphs, or Nested Data)
    - Dividing and Conquering more complex tasks.


Be careful! Recursive functions can also lead to a "stack overflow" if not handled properly.
The number of possible stacks can range depending (mostly) on the hardware that is executing the code. 
Stack overflow is when a threshold is met of memory commited to the stack, and then once it overflows, it destroys the stack of calls.

In Summary: Recursion is a way to break down larger problems into smaller steps, and can lead to more elegant solutions.

*/