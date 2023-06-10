# Learn Grammar

## Objective

As an ex-English teacher, I know how difficult it is to learn grammar.
In fact, I didn't understand it until I was being paid to teach it!
While I was teaching, I wanted so badly to tranfer my knowledge to my students.
However, traditional teaching methods bored them beyond their attention spans,
and all of the best software that taught grammar well were behind big pay walls that our school could not afford.

I want to fix that with this project. Bringing my knowledge of grammar and programming together, I aim to make learning grammar both fun and free!

## Technology Used Thus Far

- React
- React Router
- MUI React Component Library

## Inspiration

The biggest source of inspiration I have for this project so far is Flexbox Zombies.
I like the simplicity of Flexbox Zombies page structure. It has a simple nav menu on the lefthand side and a game/learning area on the righthand side.

![Flexbox Zombies Photo](/ProgressPictures/FBZombies.png "Flexbox Zombies Photo")

I aim to keep the focus on the game/learning area as much as possible similar to Flexbox Zombies.

## Progress Screenshots

### 6/10/2023

![Progress Picture 6/10/2023](/ProgressPictures/Progress%206-10-2023.png "Progress Picture 6/10/2023")

## Development Phases

### Phase 1 - Layout (Complete)

The first phase is all about getting the layout infrastructure prepared for development of the learning games.
This requres:
1. Setting up the navigation menu
- There needs to be a home button at the top of the navigation menu.
- There needs to be a chapter select button and an account button.
- The navigation menu should expand to show chapters and levels.
- The game will be split into chapters. There will be levels within those chapters.
- The levels should be nested inside its chapter accordion drop down.

2. Handling navigation menu routes using React Router
- Each page on the navigation menu should have its own route.
- These routes will be individual components in the project file structure.
- The way these routes are organized needs to be done very carefully because this could cause frustration in the future.

### Phase 2 - Build Game Mode Components
- Each game mode should be packaged into its own component. This will allow a game like "Identify the Noun" to be easily converted to "Identify the Verb" by simply passing different props to the same component.
- Since this will be the bulk of development work, phase 2 will be broken down into sub-phases that correspond to game modes.

### Game Modes

***Catch the Word***

This game mode will use a mario pipe type object to catch specified types of words that fall from the top of the screen. For example, the player must catch all nouns and avoid all other words from other parts of speech families.

*Features/Requirements*

- There needs to be a screen that teaches the grammatical concept before the gameplay begins.
- This can simply be a text screen to begin, but it will become interractive later.

- The mario pipe will be controlled with their mouse/track pad.
- Words will fall from the top of the screen.
- There will need to be a collision system to determine when a word has touched the top of the mario pipe.
- The player will accumulate points.
- If the word is correct, there will be a green indication on the score.
- If the word is incorrect, there will be a red indication on the score.
- The player will get a multiplier if they are on a streak.
- Over time, the words will fall from the top of the screen faster and faster.
- The end of the game will be triggered by a time limit.
