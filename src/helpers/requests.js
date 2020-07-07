// // urls
const baseURL = "http://localhost:3000";
const loginURL = `${baseURL}/login/`;
const themeURL = `${baseURL}/themes/`;

// headers --> use these at your own discretion
const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
};

const headersWithAuth = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

// parse incoming data
const parseData = (response) => response.json();
// error handler
const catchError = (error) => console.log(`%c${error}`, "color: red;");

// create new user session
export const loginUser = (username, password) =>
  fetch(loginURL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user: { username: username, password: password } }),
  })
    .then(parseData)
    .catch(catchError);

// fetch all themes, returns promise
export const fetchThemes = () =>
  fetch(themeURL).then(parseData).catch(catchError);

// fetch to theme show route, return promise
export const fetchTheme = (id) =>
  fetch(themeURL + id)
    .then(parseData)
    .catch(catchError);

export const postTheme = (name, terminalColors, promptItems) => {
  console.log(localStorage.getItem("token"));
  fetch(themeURL, {
    method: "POST",
    headers: headersWithAuth,
    body: JSON.stringify({
      theme: {
        name: name,
        terminal_colorscheme: terminalColors,
        prompt: promptItems,
      },
    }),
  })
    .then(parseData)
    .catch(catchError);
};
