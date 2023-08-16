/**
 * This function takes in an dictionary of style names and returns a function
 * that takes in an array of style names and returns a string of the matching
 * style names from the style dictionary.
 *
 * This is used for easily adding multiple styles to an element.
 *
 * @param styles - A dictionary of style names and their corresponding CSS class names.
 * @returns A function that takes an array of style names and returns a string of space-separated CSS class names.
 */
export function useStyles(styles: { [key: string]: string }) {
  /**
   * This function takes an array of style names as input and returns a string of space-separated CSS class names.
   *
   * @param styleNames - An array of style names.
   * @returns A string of space-separated CSS class names.
   */
  return function (styleNames: string[]) {
    /*
      The map() method creates a new array with the results of calling a provided function on every element in the calling array.
      In this case, it maps each style name to its corresponding CSS class name in the styles dictionary.
    */
    return (
      styleNames
        .map((styleName) => {
          /*
            If the current style name does not exist in the styles object, return the original style name.
            This allows for adding custom styles that are not defined in the styles dictionary.
          */
          if (!styles[styleName]) {
            return styleName;
          }
          // If the current style name exists in the styles object, return the corresponding CSS class name.
          return styles[styleName];
        })
        // The join() method joins all elements of an array into a string.
        // In this case, it joins the array of CSS class names into a single string with spaces between each class name.
        .join(" ")
    );
  };
}

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 *
 * @param array The array to shuffle.
 * @returns The shuffled array.
 */
export function shuffleArray(array: any[]) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

/**
 * Returns a random set of elements from the given array.
 *
 * @param array The array to select elements from.
 * @param limit The length of the resultant set.
 * @returns A random set of elements from the given array.
 */
export function randomSet(array: any[], limit: number) {
  return shuffleArray(array).slice(0, limit);
}