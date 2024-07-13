import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text cleared", "success");
  };
  const handleCoClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text copied", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <form>
          <div className="form-group">
            <h2>{props.heading}</h2>

            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
        </form>

        <div className="my-3 ">
          <button className="btn btn-primary me-2" onClick={handleUpClick}>
            {" "}
            Convert To Upper Case <span>&#8593;</span>{" "}
          </button>
          <button className="btn btn-primary me-2" onClick={handleLoClick}>
            {" "}
            Convert To lower Case <span>&#8595;</span>{" "}
          </button>
          <button className="btn btn-danger me-2" onClick={handleClClick}>
            {" "}
            Clear text{" "}
          </button>
          <button className="btn btn-success me-2" onClick={handleCoClick}>
            {" "}
            Copy{" "}
          </button>
        </div>
        <div className="container mt-3">
          <h2> Your Text Summary </h2>
          <p>
            {" "}
            Words: {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}, Characters: {text.length}
          </p>
          <p> Minutes: {0.008 * text.split(` `).length} </p>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Enter your text to view"} </p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string };
