# 4640_MT1

This project uses jquery and javascript to implement a functional calculator from a given UI

<img src="Images\Calculator UI.PNG"><img>

It was used in my web applications course as the first question on a midterm in my 5th year of engineering to be completed with another question in an hour time slot. 

Here is my completed solution.

## Idea
The solution leverages the organization of a state system to allow the buttons to have different functionality based on the current stage of the equation process.

It has an input handler that takes the input and cleans and interprets it, which passes the input off to the state that it is in to handle calculation and functionality.

This solution provides good modularity between the input handler and each state making it more managable and quite consice. It is also robust by being able to handle any input at any situation properly. 

My grade for this was an A+
