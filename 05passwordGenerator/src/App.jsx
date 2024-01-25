import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  let [length, setLength] = useState(8);
  let [numAllowed, setNumAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [pass, setPass] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "-=!@#$%^&*~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPass(pass);
  }, [length, numAllowed, charAllowed, setPass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-4xl mt-5 mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center text-3xl mb-5">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg text-xl overflow-hidden mb-5">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-3 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 text-white px-3 py-1 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-10">
          <div className="flex items-center text-xl gap-x-1">
            <input
              type="range"
              min={6}
              max={60}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex text-xl items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Include Number</label>
          </div>

          <div className="flex text-xl items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Include Character</label>
          </div>

          <div className="flex text-xl items-center gap-x-1">
            <button onClick={passwordGenerator}>New Password</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
