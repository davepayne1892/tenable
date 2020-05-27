# Tenable
simple console game where you are asked a question and have to provide the ten answers that satisfy the question.

## How To Play
Games are invoked from the questions, which are stored under `./questions/{topic}/{questionNumber}.ts`. Frrom the root of the project run `ts-node questions/{topic}/{questionNumber}.ts` from the terminal and a game will start.

### Rules
You will be asked a question, answer via the terminal. 
Each answer you get correct adds a point to your score
You have two lives - you can answer incorrectly once and continue.
If you answer incorrectly again you lose the game and score no points.
At any point you can 'stick' and save your progress. The game will end and you will score however many points you currently have.

## How to add more questions
Each question file consists of three parts:
1. A string for the question
2. An 'answers' object, which is an array of correct answers to the question. Each answer is itself an array in case an alias could be provided (eg naming an individual by their surname, given name or full name).
3. Invocation of the tenable game.

To add another question, copy an existing question and change the questions and answers.
