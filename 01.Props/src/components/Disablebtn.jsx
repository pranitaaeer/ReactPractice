import React, { useState } from "react";

function Disablebtn() {
  const [text, setText] = useState("");

  const styles = {
    main: {
      padding: "20px",
      backgroundColor: "black",
      height: "100vh",
      color: "white"
    },

    input: {
      padding: "10px", 
      color:"white"
      
    },

    button: {
      backgroundColor: text.trim()
        ? "#C71585"
        : "pink",
      marginLeft: "10px",
      padding: "10px",
      border: "none",
      color: "white"
    }
  };

  return (
    <div style={styles.main}>
      <input
        type="text"
        value={text}
        style={styles.input}
        onChange={(e) =>
          setText(e.target.value)
        }
        placeholder="Enter text"
      />

      <button
        disabled={!text.trim()}
        style={styles.button}
      >
        Submit
      </button>
    </div>
  );
}

export default Disablebtn;
