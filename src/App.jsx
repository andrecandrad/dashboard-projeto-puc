import "./App.css";
import Button from "@mui/material/Button";
import Chart from "./components/Chart";

function App() {
  return (
    <>
      <Button variant="outlined">Hello world</Button>
      <Chart />
      <h1 className="text-3xl font-bold underline text-red-500">Hello world!</h1>
    </>
  );
}

export default App;
