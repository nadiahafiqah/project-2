import { useState } from "react";
import { supabase } from "../supabaseClient";

const AddLineForm = (props) => {
  const [type, setType] = useState("Wild type");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("Mice/rat");

  const addNewLine = async () => {
    try {
      let { error } = await supabase
        .from("lines")
        .insert({
          name: name,
          type: type,
          description: desc,
          species: species,
        })
        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="addlineform">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="Wild type">Wild type</option>
          <option value="Mutant">Mutant</option>
          <option value="Transgenic line">Transgenic line</option>
          <option value="Mutant with transgenic line">
            Mutant with transgenic line
          </option>
        </select>

        <label>Function/Description</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        ></textarea>

        <label>Species</label>
        <select
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        >
          <option value="Mice/rat">Mice/rat</option>
          <option value="Zebrafish">Zebrafish</option>
          <option value="Medaka">Medaka</option>
          <option value="Fruit Fly">Fruit fly</option>
          <option value="Pig">Pig</option>
          <option value="Primates">Primates</option>
        </select>
        <button type="submit" onClick={() => addNewLine()}>
          Add line
        </button>
      </form>
    </div>
  );
};

export default AddLineForm;
