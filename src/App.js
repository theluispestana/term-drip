import React from "react";
import termcolors from "termcolors";
import "./App.css";

class App extends React.Component {
  state = {
    promptItems: [],
    fileURL: "",
    fileName: "",
    colors: {
      background: "",
      foreground: "",
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
    },
  };

  handleChange = (e) => {
    const target = e.target;
    this.setState({
      colors: { ...this.state.colors, [target.name]: target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const colors = termcolors.json.import(JSON.stringify(this.state.colors));
    console.log("colors: ", colors);

    const iterm = termcolors.iterm.export(colors);
    console.log("conversion from json to iterm", iterm);

    const file = new Blob([iterm], {
      type: "text/plain",
    });
    const fileURL = URL.createObjectURL(file);
    const fileName = "this is the best theme of all time.itermcolors";
    console.log("this is a test file url: ", fileURL);
    this.setState({ fileURL: fileURL, fileName: fileName });
  };

  handleCheckbox = (e) => {
    const target = e.target;
    const promptItems = this.state.promptItems;

    if (promptItems.some((item) => item.type === target.name)) {
      this.removePromptItem(target.name);
    } else {
      this.addPromptItem(target.name);
    }
  };

  removePromptItem = (type) => {
    const promptItems = this.state.promptItems.filter((i) => i.type !== type);
    this.setState({ promptItems });
  };

  addPromptItem = (type) => {
    this.setState({
      promptItems: this.state.promptItems.concat({ type }),
    });
  };

  parsePromptItems = () => {
    let prompt = "";
    const promptItems = this.state.promptItems;
    promptItems.forEach((item) => {
      if (item.type === "username") {
        prompt += "%n";
      } else if (item.type === "date") {
        prompt += "%W";
      } else if (item.type === "time") {
        prompt += "%T";
      }
    });

    return `PROMPT="${prompt}"`;
  };

  render() {
    return (
      <div className="App">
        <h1>Create A Theme</h1>
        <form onChange={this.handleChange}>
          <label htmlFor="background">Background:</label>
          <input
            type="text"
            name="background"
            value={this.state.colors.background}
          ></input>
          <br />

          <label htmlFor="foreground">Foreground:</label>
          <input
            type="text"
            name="foreground"
            value={this.state.colors.foreground}
          ></input>
          <br />

          <label htmlFor="0">Black:</label>
          <input type="text" name="0" value={this.state.colors[0]}></input>
          <br />

          <label htmlFor="1">Red:</label>
          <input type="text" name="1" value={this.state.colors[1]}></input>
          <br />

          <label htmlFor="2">Green:</label>
          <input type="text" name="2" value={this.state.colors[2]}></input>
          <br />

          <label htmlFor="3">Yellow:</label>
          <input type="text" name="3" value={this.state.colors[3]}></input>
          <br />

          <label htmlFor="4">Blue:</label>
          <input type="text" name="4" value={this.state.colors[4]}></input>
          <br />

          <label htmlFor="5">Magenta:</label>
          <input type="text" name="5" value={this.state.colors[5]}></input>
          <br />

          <label htmlFor="6">Cyan:</label>
          <input type="text" name="6" value={this.state.colors[6]}></input>
          <br />

          <label htmlFor="7">White:</label>
          <input type="text" name="7" value={this.state.colors[7]}></input>
          <br />

          <label htmlFor="8">Bright-Black:</label>
          <input type="text" name="8" value={this.state.colors[8]}></input>
          <br />

          <label htmlFor="9">Bright-Red:</label>
          <input type="text" name="9" value={this.state.colors[9]}></input>
          <br />

          <label htmlFor="10">Bright-Green:</label>
          <input type="text" name="10" value={this.state.colors[10]}></input>
          <br />

          <label htmlFor="11">Bright-Yellow:</label>
          <input type="text" name="11" value={this.state.colors[11]}></input>
          <br />

          <label htmlFor="12">Bright-Blue:</label>
          <input type="text" name="12" value={this.state.colors[12]}></input>
          <br />

          <label htmlFor="13">Bright-Magenta:</label>
          <input type="text" name="13" value={this.state.colors[13]}></input>
          <br />

          <label htmlFor="14">Bright-Cyan:</label>
          <input type="text" name="14" value={this.state.colors[14]}></input>
          <br />

          <label htmlFor="15">Bright-White:</label>
          <input type="text" name="15" value={this.state.colors[15]}></input>
          <br />

          <button onClick={this.handleSubmit}>Create File</button>
        </form>
        {this.state.fileURL ? (
          <a href={this.state.fileURL} download={this.state.fileName}>
            Download Theme
          </a>
        ) : null}
        <h1>Create A Prompt</h1>
        <form onClick={this.handleCheckbox}>
          <label for="username">Username</label>
          <input type="checkbox" name="username" />
          <br />

          <label for="date">Date</label>
          <input type="checkbox" name="date" />
          <br />

          <label for="time">Time</label>
          <input type="checkbox" name="time" />
          <br />
        </form>
        <input type="text" name="prompt" value={this.parsePromptItems()} />
      </div>
    );
  }
}

export default App;
