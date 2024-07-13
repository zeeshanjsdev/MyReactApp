import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey";
      showAlert("Dark Mode Has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode Has been Enabled", "success");
    }
  };

  return (
    <>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
      <Alert alert={alert} />

    </>
  );
}

export default App;
