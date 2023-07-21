import "./styles.css";
import { useState } from "react";
import UseFetch from "./UseFetch";

export default function App() {
  const { info } = UseFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <div className="App">
        {info.map((p) => (
          <>
            <p>{p.username}</p>
            <p>{p.email}</p>
          </>
        ))}
      </div>
    </>
  );
}
