import React from "react";

export default function Joke({ setup, punchline, num }) {
  return (
    <div className="joke">
        <span>{num}</span>
      {setup && <p>{setup}</p>}
      <h1>{punchline}</h1>
    </div>
  );
}
