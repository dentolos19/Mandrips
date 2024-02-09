/**
 * This function takes an object of CSS styles as input and returns a function
 * that conditionally constructs a space-separated list of CSS classes.
 *
 * @param styles An object of styles, where the keys are style names in the CSS and the values are class names.
 * @returns A function that takes any number of arguments and returns a space-separated list of CSS classes.
 */
export function generateStyler(styles: { [key: string]: string } = {}) {
  const parseStyle = (value: string) => {
    return styles.hasOwnProperty(value) ? styles[value] : value;
  };

  const parseValue = (value: any) => {
    var output = "",
      temp;
    if (typeof value === "string") {
      const values = value.split(" ");
      if (values.length > 1) {
        values.forEach((element) => {
          if ((temp = parseStyle(element))) {
            output && (output += " ");
            output += temp;
          }
        });
      } else {
        if ((temp = parseStyle(value))) {
          output && (output += " ");
          output += temp;
        }
      }
    } else if (Array.isArray(value)) {
      for (let index = 0; index < value.length; index++) {
        const element = value[index];
        if (!element) continue;
        if ((temp = parseValue(element))) {
          output && (output += " ");
          output += temp;
        }
      }
    } else {
      for (const key in value) {
        if (!value.hasOwnProperty(key)) continue;
        const condition = value[key];
        if (!condition) continue;
        if ((temp = parseStyle(key))) {
          output && (output += " ");
          output += temp;
        }
      }
    }
    return output;
  };

  /**
   * It takes any number of arguments and returns a space-separated list of
   * class names. Each argument is parsed for class names conditionally.
   *
   * @param args Any number of arguments to be parsed for class names.
   * @returns A space-separated list of class names.
   */
  return function (...args: any[]) {
    var output = "",
      temp;
    for (let index = 0; index < args.length; index++) {
      const value = args[index];
      if (!value) continue;
      if ((temp = parseValue(value))) {
        output && (output += " ");
        output += temp;
      }
    }
    return output;
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
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
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