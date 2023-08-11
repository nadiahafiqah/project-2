import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
// import AddLineForm from "./AddLineForm";
// import ActiveLines from "./ActiveLines";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";

const Dashboard = () => {
  const [numActiveLines, setNumActiveLines] = useState("");
  const [numInactiveLines, setNumInactiveLines] = useState("");

  useEffect(() => {
    setActiveNum();
    setInactiveNum();
  }, []);

  const setActiveNum = async () => {
    try {
      let { count, error } = await supabase
        .from("lines")
        .select("status", { count: "exact" })
        .eq("status", "Active");

      if (error) throw error;
      if (count != null) {
        setNumActiveLines(count);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const setInactiveNum = async () => {
    try {
      let { count, error } = await supabase
        .from("lines")
        .select("status", { count: "exact" })
        .eq("status", "Inactive");

      if (error) throw error;
      if (count != null) {
        setNumInactiveLines(count);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {/* <Navbar />
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
      </Routes> */}
      <div className="dashboard">
        <h2>Welcome back user!</h2>
        <p>Here is a summary of your data:</p>
        <table>
          <tbody>
            <tr>
              <th>Number of active lines</th>
              <td>{numActiveLines}</td>
            </tr>
            <tr>
              <th>Numer of inactive lines</th>
              <td>{numInactiveLines}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/new">
          <button>Add new line</button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
