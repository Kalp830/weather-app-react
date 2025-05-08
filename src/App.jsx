import { useState } from "react";
import "./App.css";
import ModelDialog from "./assets/component/ModelDialog";
import WeatherApp from "./assets/component/WeatherApp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <WeatherApp />
      <br />
      <ModelDialog open={open} handleCloseDialog={handleCloseDialog} />
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClickOpen}
      >
        Bootstrap Modal Test
      </button>
    </>
  );
}

export default App;
