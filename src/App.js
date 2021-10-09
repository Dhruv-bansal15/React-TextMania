import "./App.css";
import About from "./Componenets/About";
import Navbar from "./Componenets/Navbar";
import TextForm from "./Componenets/TextForm";
import React, { useState } from "react";
import Alert from "./Componenets/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    if(cls!=='null'){
      document.body.classList.add('bg-'+ cls);
    }
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "Success: ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success: ");
    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextMania" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm
              showAlert={showAlert}
              heading="Try TextMania - Word/Char Counter | Remove Extra Spaces & Flip the Case"
              mode={mode}
            />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
