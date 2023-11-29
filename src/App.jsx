import { useState } from "react";
import caesarCipher from "./cipher";
import "./App.css";

function App() {
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [shift, setShift] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(false);

  const handleEncrypt = (event) => {
    event.preventDefault();
    setIsShown(true);
    let cipher;
    cipher = caesarCipher(plainText, shift);
    setCipherText(cipher);
    setPlainText("");
    setShift(0);
  };

  const handleDecrypt = (event) => {
    event.preventDefault();
    setIsShown(true);
    setIsDecrypted(true);
    let cipher = caesarCipher(plainText, -shift + 26);
    setCipherText(cipher);
    setPlainText("");
    setShift(0);
  };

  const handleClear = () => {
    setPlainText("");
    setShift(0);
    setIsShown(false);
  };

  return (
    <div className="App">
      <h1>Tugas Kriptografi</h1>
      <div className={isDecrypted ? "formContainer decrypt" : "formContainer"}>
        <h2>Caesar Cipher {isDecrypted ? "Decryptor" : "Encryptor"}</h2>

        <div className="swithcer">
          <h3>Switch</h3>
          <label className="switch">
            <input
              type="checkbox"
              checked={isDecrypted}
              onChange={() => setIsDecrypted(!isDecrypted)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div>
          <form
            onSubmit={isDecrypted ? handleDecrypt : handleEncrypt}
            className="form"
          >
            <label htmlFor="pText">Masukkan Text</label>
            <input
              type="text"
              id="pText"
              value={plainText}
              onChange={(event) => {
                setPlainText(event.target.value);
              }}
              autoComplete="off"
            />
            <label htmlFor="shift">Masukkan Jumlah Shift</label>
            <input
              type="number"
              id="shift"
              min={0}
              value={shift}
              onChange={(e) => setShift(parseInt(e.target.value))}
              autoComplete="off"
            />
            <div className="button">
              {isDecrypted ? (
                <button className="reset" type="submit">
                  Decrypt
                </button>
              ) : (
                <button type="submit" className="submit">
                  Encrypt
                </button>
              )}
            </div>
          </form>
        </div>

        {isShown ? (
          <>
            <h2>{cipherText}</h2>
            <button className="reset" onClick={handleClear}>
              Reset
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;

// const handleEncrypt = (e) => {
//   e.preventDefault();
//   console.log(plainText, shift);
// };
// const handleClear = () => {
//   setPlainText("");
//   setShift(0);
//   setIsShown(false);
// };
/* <table>
          <tbody>
            <tr className="header">
              {upCase?.map((n, index) => (
                <td key={index}>{index}</td>
              ))}
            </tr>
            <tr className="table">
              {upCase?.map((n, index) => (
                <td key={index}>{n}</td>
              ))}
            </tr>
          </tbody>
        </table> */
