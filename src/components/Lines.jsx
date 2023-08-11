import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

const ActiveLines = (props) => {
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

    const deactivate = async () => {
      try {
        let { error } = await supabase
          .from("lines")
          .update({
            status: "Inactive",
          })
          .eq("id", item.id);

        if (error) throw error;
        window.location.reload();
      } catch (error) {
        alert(error.message);
      }
    };
    const activate = async () => {
      try {
        let { error } = await supabase
          .from("lines")
          .update({
            status: "Active",
          })
          .eq("id", item.id);

        if (error) throw error;
        window.location.reload();
      } catch (error) {
        alert(error.message);
      }
    };

    const changeState = (e) => {
      switch (e.detail) {
        case 1: {
          deactivate();
          break;
        }
        case 2: {
          activate();
          break;
        }
        default: {
        }
      }
    };
    return (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.species}</td>
        <td>{item.time}</td>
        <td>{item.status}</td>

        <td>
          <button
            key={index}
            onClick={() => {
              removeActive();
            }}
          >
            Delete
          </button>
          <button
            key={index}
            onClick={(e) => {
              changeState(e);
            }}
          >
            Inactivate
          </button>
        </td>
      </tr>
    );
  });

  // const [loader, setLoader] = useState(false);

  // const downloadPDF = () => {
  //   const capture = document.querySelector(".linesprint");
  //   setLoader(true);
  //   html2canvas(capture).then((canvas) => {
  //     const imgData = canvas.toDataURL("img/png");
  //     const doc = new jsPDF("l", "mm", "a4");
  //     const componentWidth = doc.internal.pageSize.getWidth();
  //     const componentHeight = doc.internal.pageSize.getHeight();
  //     doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
  //     setLoader(false);
  //     doc.save("activelines.pdf");
  //   });
  // };
  return (
    <>
      <div className="lines">
        {/* <div className="activelinesprint"> */}
        <h2>Your Lines</h2>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Type</th>
              <th>Name</th>
              <th>Funtion/Description</th>
              <th>Species</th>
              <th>Date added</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{activeLinesList}</tbody>
        </table>
        {/* </div> */}
        <Link to="/new">
          <button className="add">Add new line</button>
        </Link>
        {/* <button
          className="download"
          onClick={downloadPDF}
          disabled={!(loader === false)}
        >
          {loader ? "Downloading" : "Download"}
  </button>*/}
      </div>
    </>
  );
};

export default ActiveLines;
