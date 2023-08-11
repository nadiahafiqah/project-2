import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Dashboard = () => {
  const [numActiveLines, setNumActiveLines] = useState("");

  useEffect(() => {
    setNum();
  }, []);

  const setNum = async () => {
    try {
      let { data, count, error } = await supabase
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
