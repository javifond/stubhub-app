/**
 * Returns a number between the parameters received.
 * @param min
 * @param max
 * @returns a random number between min and max.
 */
export function getRandomUserId(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
