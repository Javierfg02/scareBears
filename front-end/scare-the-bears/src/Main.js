
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import Gpt3 from "./Gpt3.js"
import './Main.css';

// When we write tests, we'll be searching using accessible names. So let's
// use the same constant identifier; that way if we decide to change the text
// in the app, it won't break our tests.
export const TEXT_try_button_accessible_name = "try your sequence";
export const TEXT_number_1_accessible_name = "first number in sequence";
export const TEXT_number_2_accessible_name = "second number in sequence";
export const TEXT_number_3_accessible_name = "third number in sequence";
export const TEXT_try_button_text = "Try it!";



// Remember that parameter names don't necessarily need to overlap;
// I could use different variable names in the actual function.
// interface ControlledInputProps {
//   value: string;
//   // This type comes from React+TypeScript. VSCode can suggest these.
//   //   Concretely, this means "a function that sets a state containing a string"
//   setValue: Dispatch<SetStateAction<string>>;
//   ariaLabel: string;
// }

// Input boxes contain state. We want to make sure React is managing that state,
//   so we have a special component that wraps the input box.
function ControlledInput({ value, setValue, ariaLabel }) {
  return (
    <input className="search" 
      placeholder="Type words to generate your scary story:"
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
      aria-label={ariaLabel}
    ></input>
  );
}

// We don't always need an interface for props; without one we need to use this
// syntax, which expects an object with a "guess" field of string[] type.
//   (This is NOT the same as accepting a string[]).

function OldRound({guess}) {
  const [data, setData] = useState ("");

  console.log("result is" + data)
  return (
    <div className={"guess-round-"} aria-label={"scary story"}>
      <p>{guess}</p>
    </div>
  );
}

// interface NewRoundProps {
//   addGuess: (guess: string[]) => any;
//   setNotification: Dispatch<SetStateAction<string>>;
// }
// You can also mix the interface (as type) with concrete field names, like this:
function NewRound({ addGuess}) {
  // Remember: let React manage state in your webapp. The current guesses are string fields.
  // You don't always need the <...> annotation, but I like to include it for clarity.
  const [value0, setValue0] = useState ("");
  return (
    <div className="searchBar" >
      <div className="Bar">
        {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
          braces, so that React knows it should be interpreted as TypeScript */}

        {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
          into a single unit, which makes it easier for screenreaders to navigate. */}
        <fieldset>
          {/* <legend>Type words to generate your scary story:</legend> */}
          <ControlledInput
            value={value0}
            setValue={setValue0}
            ariaLabel={TEXT_number_1_accessible_name}
          />
        </fieldset>
      </div>

      <div className="Button">
        <button
          onClick={() => {
            // if (!isNaN(value0)) {
              addGuess(value0);
              setValue0("");
            //   setNotification("");
            // } else {
            //   setNotification("Please provide at least one word");
            // }
          }}
          aria-label={TEXT_try_button_accessible_name}
        >
          {/* The text displayed on the button */}
          {TEXT_try_button_text}
        </button>
      </div>
      
    </div>
  );
}

export default function Main() {
  const [guess, setGuesses] = useState("");
  const [data, setData] = useState ("");

  return (
    <div className="App">
        <OldRound guess={data} />
      <NewRound
        addGuess={(guess) => {
          Gpt3(guess)?.then((r) => setData(r.data.choices[0].text))
          setGuesses(guess);
        }}
      />
    </div>
  );
}
