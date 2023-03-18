import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/images", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        img: img,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Completed");

    setImg("");
    setTitle("");
    return res;
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title..."
      />
      <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="img"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default App;
