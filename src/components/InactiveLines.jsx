const InactiveLines = (props) => {
  // const inactiveLinesList = inactiveLines.map((item, index) => {
  //   const handleDelete = () => {
  //     console.log("delete");
  //   };
  //   const handleAdd = () => {
  //     console.log("add");
  //   };
  const inactiveLinesList = props.inactiveLinesArr.map((item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>{item.desc}</td>
        <td>{item.species}</td>
        <td>
          <button onClick={() => props.reactivate(index)}>Reactivate</button>
        </td>
        <td>
          <button onClick={() => props.handleDeleteInactiveLines(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="inactivelines">
      <h4>Inactive Lines</h4>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Type</th>
            <th>Name</th>
            <th>Funtion/Description</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>{inactiveLinesList}</tbody>
      </table>
    </div>
  );
};

export default InactiveLines;
