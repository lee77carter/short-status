import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="status-update">
        <h1>Super Short Status!</h1>
        <p>Tell us how you are doing in 60 characters or less!</p>
        <form>
          <textarea placeholder="What's good?" />
          <button type="submit">Tell the world!</button>
        </form>
      </div>
    </div>
  );
}