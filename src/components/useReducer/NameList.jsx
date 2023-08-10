import { useReducer } from "react";

const NameList = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return { ...state, names: [...state.names, state.name], name: "" };
      }
    },
    { names: [], name: "" }
  );

  return (
    <div>
      <div>
        {state.names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </div>
      <input
        type='text'
        value={state.name}
        onChange={(e) => {
          dispatch({ type: "SET_NAME", payload: e.target.value });
        }}
      ></input>
      <button onClick={() => dispatch({ type: "ADD_NAME" })}> Add Name</button>
    </div>
  );
};

export default NameList;
