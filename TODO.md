## To Do Log for BOTCT Companion App

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

### 8/21/2022

1. useContext cont... undefined is rendering in NumberRandomizer page. Need to figure out how to get the appropriate inputs to show up.

### 8/25/2022

- Re-created the Home page code w/ a better useContext structure. AddInputs is returning undefined. players = the index. I need to get players to return input fields with the indexes tied to that. I might try putting the AddInput function inside the onChange or an onClick. Also, I could maybe try and set up the useRef and pass in the persisted data into AddInputs.

### 8/30/2022

- State is not getting passed into the .map. Going to try to place all functions within parent and attempt to get new inputs returned onChange.
- [9:54 PM] All attempts have failed. .map() does not return input fields. I may need to start a new branch and rebuild using reducers and/or a state manager like Redux or Zustand. The code in Players.tsx is very messy from attempts, I no longer think I can get it to work with the current useContext setup I have.

### 8/31/2022

- Rebuild is helping get back on track. I got something to show up as context in NumberRandomizer. It is not what I want but it isn't "undefined". The state of the generated inputs still does not want to carry over to the other component. I may still use Zustand, but I want to make sure i've exhausted my options with this progress i've made. I think it's that the value of the provider is just useState([]) so its passing an empty array state instead of the set state given. So I need to try and create a context that has the value of the previous state or current state and then wrap the _app with that.

### 09/02/2022

- I will try using react-router useHistory or Next useRouter to maybe be able to move the input result to the other page. If these attempts fail, I will just have the generated inputs remain on the same page and then start working on number randomizing and adding game data.

### 09/04/2022

- I am restarting from the beginning. I am going to approach the player input differently then I originally intended to. I am going to start building the back end and worry about the player names and the "randomizer" after I have the game data ready.

- Tomorrow I will set up MongoDB and begin creating game data and class data.

### 09/20/2002
- Need to get MongoDB connected to express and Next. Difficulty blending all three technologies. Mongo server is created, once everything connects w/o errors then I can begin adding game data.

### 10/12/2002
- Connecting mongo and express in a Next app is proving to be challenging for my skill level. I am going to try and rewriting the server code again and see if I can get it working. I cannot seem to find a blog or a post that helps in the entirety of what I need, just fragments, that don't seem to want to go together even though they are related in some way. 