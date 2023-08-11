import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
// import AddLineForm from "./AddLineForm";
// import ActiveLines from "./ActiveLines";
// import InactiveLines from "./InactiveLines";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";

const Dashboard = () => {
  const [numActiveLines, setNumActiveLines] = useState("");

  useEffect(() => {
    setNum();
  }, []);

  const setNum = async () => {
    try {
      let { count, error } = await supabase
        .from("lines")
        .select("*", { count: "exact" });

      if (error) throw error;
      if (count != null) {
        setNumActiveLines(count);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // const activeLinesNo = props.activeLinesData.length;
  // const inactiveLinesNo = props.inactiveLinesArr.length;
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
              <th>Active Lines</th>
              <td>{numActiveLines}</td>
            </tr>
            <tr>
              <th>Inactive Lines</th>
              <td>2</td>
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
