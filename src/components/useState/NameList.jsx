import { useState } from "react";

function NameList() {
    const [list, setList] = useState(["rishabh", "mishra"]);
    const [name, setName] = useState(() => "rishabh");
  
    function AddName() {
      setList([...list, name]);
      setName("");
    }
    return (
      <div>
        <ul>
          {list.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <button onClick={AddName}>Add Name</button>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    );
  }


  export default NameList;
  