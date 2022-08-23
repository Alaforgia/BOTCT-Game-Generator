/**
 * 
 * @param currentPlayerIdsInGame - array of numbers, currently in the game
 * @returns 
 */
const useNumberRandomizer = (currentPlayerIdsInGame: number[]): number => {
  // function to generate a random number
  const randomNumberGenerator = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // initial random number
  let randomNumber = randomNumberGenerator(1, 10);

  // Check if the random number is already in the array
  while (currentPlayerIdsInGame.includes(randomNumber)) {
    randomNumber = randomNumberGenerator(1, 10);
  }

  return randomNumber;
};

export default useNumberRandomizer;
