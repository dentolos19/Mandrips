/*
  this function takes in an dictionary of style names and returns a function
  that takes in an array of style names and returns a string of the matching
  style names from the style dictionary

  this is used for easily adding multiple styles to a component
*/
export function useStyles(styles: { [key: string]: string }) {
  return function (styleNames: string[]) {
    return styleNames
      .map((styleName) => {
        if (!styles[styleName]) {
          return styleName;
        }
        return styles[styleName];
      })
      .join(" ");
  };
}

export function shuffleArray(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // while there remain elements to shuffle
  while (currentIndex != 0) {
    // pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // and swap it with the current element
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}