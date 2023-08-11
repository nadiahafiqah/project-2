import { supabase } from "../supabaseClient";

const ActiveLines = (props) => {
  const activeLinesList = props.lines.map((item, index) => {
    const removeActive = async (props) => {
      try {
        let { error } = await supabase.from("lines").delete().eq("id", item.id);

        if (error) throw error;
        window.location.reload();
      } catch (error) {
        alert(error.message);
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

        <td>
          <button
            key={index}
            onClick={() => {
              removeActive();
            }}
          >
            Deactivate
          </button>
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
    </div>
  );
};

export default ActiveLines;
