# SIMON: A Memory Game
---
*Created by: RJ Sausa*

### History
>Simon is an electronic game of short-term memory skill invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates,with software programming by Lenny Cope.

>The device creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails or the time limit runs out, the game is over. The original version was manufactured and distributed by Milton Bradley and later by Hasbro after it took over Milton Bradley. Much of the assembly language code was written by Charles Kapps,who taught computer science at Temple University and also wrote one of the first books on the theory of computer programming. Simon was launched in 1978 at Studio 54 in New York City and was an immediate success, becoming a pop culture symbol of the 1970s and 1980s.
*excerpt taken from Wikipedia*


### How to Play
To enjoy this game, simply press the "POWER/ON" button.
Copy the buttons that flash. It starts with one, then two, then three all the way up to ten.

If you complete ten rounds without any mistakes, you won the game! (This parameter can be changed)


### Development
In this project, a digital version of SIMON was created using HTML, CSS and Javascript.

The programming logic is as follows:
- Once the app is opened, a sequence of random numbers (from 1-4) is created and stored in an array. Each number represents one of the four colored buttons.
- The app then flashes the corresponding button according to the sequence stored in the array, and matches this with the player's selection, which is also stored in an array.

Adjustable parameters:
- Number of rounds (default: 10)
- Amount of time between flashing buttons. (default: 800ms)


### Notes:
This program was created as part of the requirements for General Assembly's Cohort # SEIR0725.