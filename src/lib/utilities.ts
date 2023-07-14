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