import "./App.css";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";
import { useState } from "react";
import Modal from "./components/Modal.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [chartData, setChartData] = useState([]);

  return (
    <div>
      <Header setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} setChartData={setChartData} chartData={chartData}/>
      <MainGrid chartData={chartData} />
    </div>
  );
}

export default App;