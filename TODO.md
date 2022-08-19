## To Do List log for BOTCT Companion App

### <time datetime="8/14/2022">8/14/2022</time>

1. Build random number generator that assigns random number to a string in a form.
    - This should be very basic to start with. Don't worry about number of players or adding and subtracting forms. Start with a basic amount and continue from there.
    - [12:14 AM, 9/15/2022] I may need to take a step back from the inputs. Perhaps tomorrow I should build an input component that generates the player name inputs depending on the number entered in first input. Trying to get the individual state to work on each input is proving difficult, need to come back later.


### 8/15/2022
1. Build an input that takes in a number and generates inputs(players) based on that number.

### 8/18/2022
1. Build an input that takes in a number and generates inputs(players) based on that number (cont...)
   - Running into state issues and prop drilling. Will try React Hooks useContext or useReducer.card
2. Use useContext to get the inputs to appear on NumberRandomizer page.

### 8/19/2022
-[3:37 AM] Difficulties with useContext, I will have to try more after sleep. I think I need to make sure the context consumer is wrapping all of the JSX in PlayerInputGenerator.