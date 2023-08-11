import "./App.css";
import { useState, useEffect } from "react";
import AddLineForm from "./components/AddLineForm";
import ActiveLines from "./components/ActiveLines";
import InactiveLines from "./components/InactiveLines";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { supabase } from "./supabaseClient";

function App() {
  // const [activeLinesData, setActiveLinesData] = useState(activeLinesArr);
  // const [inactiveLinesArr, setInactiveLinesArr] = useState([]);

  const [lines, setLines] = useState([]);

  useEffect(() => {
    addLine();
  }, []);

  const addLine = async () => {
    try {
      let { data, error } = await supabase.from("lines").select("*");

      if (error) throw error;
      if (data !== null) {
        setLines(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // const removeActive = async () => {
  //   try {
  //     let { data, error } = await supabase
  //       .from("lines")
  //       .delete()
  //       .eq("id", lines.id)

  //     if (error) throw error;
  //     window.location.reload();
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // // change button to make inactive instead of delete, rename add to make active (with make active function, reverse of makeinactive)
  // const makeInactive = (index) => {
  //   setInactiveLinesArr([...inactiveLinesArr, activeLinesArr[index]]);
  // };

  // // delete inactive lines
  // const handleDeleteInactiveLines = (lineIndex) => {
  //   setInactiveLinesArr((prev) =>
  //     prev.filter((line, index) => index !== lineIndex)
  //   );
  // };

  // const reactivate = (lineIndex) => {
  //   setActiveLinesData([
  //     ...activeLinesData,
  //     (prev) => prev.filter((line, index) => index === lineIndex),
  //   ]);
  //   setInactiveLinesArr((prev) =>
  //     prev.filter((line, index) => index !== lineIndex)
  //   );
  // };

  // const deleteActive = (lineIndex) => {
  //   setActiveLinesData((prev) =>
  //     prev.filter((line, index) => index !== lineIndex)
  //   );
  // };

  // const addNew = () => {
  //   setActiveLinesData([...activeLinesData, addLines]);
  // };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new" element={<AddLineForm />} />
        <Route
          path="/active"
          element={
            // props reads name on lhs
            <ActiveLines lines={lines} />
          }
        />
        <Route path="/inactive" element={<InactiveLines />} />
      </Routes>
      <div className="App"></div>
    </>
  );
}

export default App;
