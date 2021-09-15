import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <img
        src="https://drive.google.com/thumbnail?id=1Lhc5ZCSFmFZTWStIvi5tm2L8T5cF3ELA"
        alt="pic"
      ></img>
      {showLogin ? <Login /> : <Register loginToggle={setShowLogin} />}
    </div>
  );
}

export default App;
