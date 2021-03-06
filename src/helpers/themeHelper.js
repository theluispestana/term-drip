import termcolors from "termcolors";

// label colors
export const colorLabels = [
  "Black:",
  "Red:",
  "Green:",
  "Yellow:",
  "Blue:",
  "Magenta:",
  "Cyan:",
  "White:",
  "Bright-Black:",
  "Bright-Red:",
  "Bright-Green:",
  "Bright-Yellow:",
  "Bright-Blue:",
  "Bright-Magenta:",
  "Bright-Cyan:",
  "Bright-White:",
  "Background:",
  "Foreground:",
];

// import colors object and export valid theme data in specified format
export const createTheme = (colors, format) => {
  const colorObj = termcolors.json.import(JSON.stringify(colors));
  // console.log("colors: ", colorObj);
  // console.log("termcolors function: ", termcolors[format]);
  return termcolors[format].export(colorObj);
};

// create file and return URL
export const createFile = (themeObj) => {
  const file = new Blob([themeObj], {
    type: "text/plain",
  });
  return URL.createObjectURL(file);
};

export const createThemeAndFile = (colors, format) => {
  const theme = createTheme(colors, format);
  return createFile(theme);
};

// takes array of colors from db and returns a color object that can be used with react components
export const createColorObj = (colorArr) => {
  const colorObj = {};
  colorArr.forEach((color) => (colorObj[color.color_type] = color.color));
  return colorObj;
};
