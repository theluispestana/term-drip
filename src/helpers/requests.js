// // urls
const baseUrl = "http://localhost:3000";
const themeUrl = `${baseUrl}/themes/`;

// headers --> use these at your own discretion
const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
};

// parse incoming data
const parseData = (response) => response.json();
// error handler
const catchError = (error) => console.log(`%c${error}`, "color: red;");
