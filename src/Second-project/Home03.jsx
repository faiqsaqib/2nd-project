import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function Home03() {
  const [text, setText] = useState("");
  // onchange
  const onchange = (a) => {
    setText(a.target.value);
  };
  // Clear Text
  const clearText = () => {
    setText("");
    toast.success("Text Cleared", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  //Uppercase
  const Uppercase = () => {
    const text02 = text.toUpperCase();
    setText(text02);
    toast.success("Converted To Upper-case", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  //LOWERcase
  const Lowercase = () => {
    const text03 = text.toLowerCase();
    setText(text03);
    toast.success("Converted To lower-case", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  // COPY
  const copytext = () => {
    navigator.clipboard.writeText(text);
    toast.success("Text Copied", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  // RemoveSpc
  const RemoveSpc = () => {
    const txt = text.split(/[  ]+/);
    setText(txt.join(" "));
    toast.success("Extra Spaces Re", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };
  return (
    <>
      <div className="container ">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Your Text
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            // placeholder="Enter Your Text Here"
            value={text}
            onChange={onchange}
          ></textarea>
        </div>
        <button className="btn btn-primary mr-2" onClick={clearText}>
          Clear Text
        </button>

        <button className="btn btn-primary mr-2" onClick={Uppercase}>
          Upper-Case
        </button>
        <button className="btn btn-primary mr-2" onClick={Lowercase}>
          Lowercase
        </button>

        {/* <button
          className="btn btn-primary mr-2"
          onClick={() => {
            toast.success("Alert is working!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
            );
          }}
        >
          Alert
        </button> */}

        <button className="btn btn-primary mr-2" onClick={copytext}>
          Copy text
        </button>

        <button className="btn btn-primary mr-2" onClick={RemoveSpc}>
          Remove Spc
        </button>
        <h1>Text Counter</h1>
        <p>
          {
            text.split(" ").filter((f) => {
              return f.length !== 0;
            }).length
          }
          Words
          {text.length} Characters
        </p>
        <h1>Read Time</h1>
        <p>
          {0.008 *
            text.split(" ").filter((f) => {
              return f.length != 0;
            }).length}
          Minutes
        </p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Write Something"}</p>
      </div>

      <ToastContainer />
    </>
  );
}

export default Home03;
