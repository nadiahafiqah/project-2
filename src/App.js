import "./App.css";
import { useState, useEffect } from "react";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./supabaseClient";
import AddLineForm from "./components/AddLineForm";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
// import { Auth } from "@supabase/auth-ui-react";
import Lines from "./components/Lines";

// import {
//   // Import predefined theme
//   ThemeSupa,
// } from "@supabase/auth-ui-shared";

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

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userId, setUserId] = useState("");
  // const [loading, setLoading] = useState(false);

  // const getUser = async () => {
  //   try {
  //     setLoading(true);
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     if (user != null) {
  //       setIsLoggedIn(true);
  //       setUserId(user.id);
  //     } else {
  //       setIsLoggedIn(false);
  //       setUserId("");
  //     }
  //   } catch (e) {
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const signout = async () => {
  //   await supabase.auth.signOut();
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
      {/* <div>
        {isLoggedIn ? ( */}
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new" element={<AddLineForm />} />
          <Route
            path="/lines"
            element={
              // props reads name on lhs
              <Lines lines={lines} />
            }
          />
        </Routes>
        <div className="App"></div>
      </>
      {/* ) : null}
        {!isLoggedIn && !loading ? (
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        ) : null}
      </div> */}
    </>
  );
}

export default App;
