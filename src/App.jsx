import "./App.css";
import React, { useState } from 'react';


function App() {
  const[hello, setHello] = useState("Greeting Message")
  return (
    <div className="App">
      <div className="greeting-container">{hello}</div>

      <div className="buttons">
        <button onClick={()=>setHello("สวัสดี!")}>สวัสดี!</button>
        <button onClick={()=>setHello("Hi!")}>Hi!</button>
        <button onClick={()=>setHello("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;


