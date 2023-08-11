import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
// import { useState } from "react";

const ActiveLines = (props) => {
  // const promise1=  supabase.from("lines").delete().eq("id", item.id)
  // const promise2= supabase.from("inactive_lines")        .insert({
  //   name: name,
  //   type: type,
  //   description: desc,
  //   species: species,
  // })
  // .single();

  const activeLinesList = props.lines.map((item, index) => {
    const removeActive = async () => {
      try {
        let { error } = await supabase.from("lines").delete().eq("id", item.id);

        if (error) throw error;
        window.location.reload();
      } catch (error) {
        alert(error.message);
      }
    };

    // const editList = async () => {
    //   try {
    //     let { error } = await supabase
    //       .from("lines")
    //       .update({
    //         name: name,
    //         type: type,
    //         description: desc,
    //         species: species,
    //       })
    //       .eq("id", item.id);

    //     if (error) throw error;
    //     window.location.reload();
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // };

    return (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.species}</td>
        <td>{item.time}</td>

        <td>
          <button
            key={index}
            onClick={() => {
              removeActive();
            }}
          >
            Delete
          </button>
          {/* <button
            key={index}
            onClick={() => {
              editList();
            }}
          >
            Edit
          </button> */}
        </td>
      </tr>
    );
  });

  return (
    <div className="activelines">
      <h4>Active Lines</h4>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Type</th>
            <th>Name</th>
            <th>Funtion/Description</th>
            <th>Species</th>
            <th>Date added</th>
          </tr>
        </thead>
        <tbody>{activeLinesList}</tbody>
      </table>
      <Link to="/new">
        <button>Add new line</button>
      </Link>
    </div>
  );
};

export default ActiveLines;
