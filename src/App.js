import "./App.css";
import { useState, useEffect } from "react";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./supabaseClient";
import AddLineForm from "./components/AddLineForm";
import ActiveLines from "./components/ActiveLines";
import InactiveLines from "./components/InactiveLines";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
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

  // const [session, setSession] = useState(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });

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

  //   return () => subscription.unsubscribe();
  // }, []);

  // if (!session) {
  //   return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  // } else {
  //   return <div>Logged in!</div>;
  // }

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
