import React, {
  useState,
  useEffect
} from "react";

function App() {
  const [text, setText] =
    useState("");

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const timer =
      setTimeout(() => {
        setSearch(text);
      }, 500);

    return () =>
      clearTimeout(timer);
  }, [text]);

  return (
    <>
      <input
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
      />

      <h2>{search}</h2>
    </>
  );
}

export default App;
