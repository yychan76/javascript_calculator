# Javascript Calculator Project

Javascript calculator project from Frontend Masters [Intro to Web Dev V2 course by Brian Holt](https://frontendmasters.com/courses/web-development-v2/).

The original example from the class is [here](https://btholt.github.io/intro-to-web-dev-v2/calculator.html).

The original project from the class was meant to implement a simple version of the calculator from iOS. As I do not have access to an iPhone, this implementation was based on the behavior of the Windows 10 calculator with operator precedence, ie multiplication and division over addition and subtraction. 2 + 3 x 6 would result in 20, as opposed to 30 that is the result of not having multiplication (3 x 6) be calculated before addition.

This is a fun exercise as calculators are so ubiquitous in our lives that we don't normally think about them. But after implementing one, I realise there are subtle behaviours that if not implemented well, makes the calculator a frustrating experience. For example, after the user presses the equal (=) button to get a result, if the user presses another number, the calculator should clear previous values to prepare for the new calculation. However, if the user presses another operator (+-x÷) button, the calculator should continue calculations based on the last result.

This calculator can be viewed [here](https://yychan76.github.io/javascript_calculator/).
