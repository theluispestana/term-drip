import React from "react";

const Theme = (props) => {
  return (
    <div>
      <h1>Create A Theme</h1>
      <form onChange={props.handleChange}>
        <label htmlFor="background">Background:</label>
        <input
          type="text"
          name="background"
          value={props.colors.background}
        ></input>
        <br />

        <label htmlFor="foreground">Foreground:</label>
        <input
          type="text"
          name="foreground"
          value={props.colors.foreground}
        ></input>
        <br />

        <label htmlFor="0">Black:</label>
        <input type="text" name="0" value={props.colors[0]}></input>
        <br />

        <label htmlFor="1">Red:</label>
        <input type="text" name="1" value={props.colors[1]}></input>
        <br />

        <label htmlFor="2">Green:</label>
        <input type="text" name="2" value={props.colors[2]}></input>
        <br />

        <label htmlFor="3">Yellow:</label>
        <input type="text" name="3" value={props.colors[3]}></input>
        <br />

        <label htmlFor="4">Blue:</label>
        <input type="text" name="4" value={props.colors[4]}></input>
        <br />

        <label htmlFor="5">Magenta:</label>
        <input type="text" name="5" value={props.colors[5]}></input>
        <br />

        <label htmlFor="6">Cyan:</label>
        <input type="text" name="6" value={props.colors[6]}></input>
        <br />

        <label htmlFor="7">White:</label>
        <input type="text" name="7" value={props.colors[7]}></input>
        <br />

        <label htmlFor="8">Bright-Black:</label>
        <input type="text" name="8" value={props.colors[8]}></input>
        <br />

        <label htmlFor="9">Bright-Red:</label>
        <input type="text" name="9" value={props.colors[9]}></input>
        <br />

        <label htmlFor="10">Bright-Green:</label>
        <input type="text" name="10" value={props.colors[10]}></input>
        <br />

        <label htmlFor="11">Bright-Yellow:</label>
        <input type="text" name="11" value={props.colors[11]}></input>
        <br />

        <label htmlFor="12">Bright-Blue:</label>
        <input type="text" name="12" value={props.colors[12]}></input>
        <br />

        <label htmlFor="13">Bright-Magenta:</label>
        <input type="text" name="13" value={props.colors[13]}></input>
        <br />

        <label htmlFor="14">Bright-Cyan:</label>
        <input type="text" name="14" value={props.colors[14]}></input>
        <br />

        <label htmlFor="15">Bright-White:</label>
        <input type="text" name="15" value={props.colors[15]}></input>
        <br />

        <button onClick={props.handleSubmit}>Create File</button>
      </form>
      {props.fileURL ? (
        <a href={props.fileURL} download={props.fileName}>
          Download Theme
        </a>
      ) : null}
    </div>
  );
};

export default Theme;
