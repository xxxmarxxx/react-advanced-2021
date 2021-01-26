import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// lesson 64/65 useReducer - useState Setup
// reducer function
const reducer = (state,action)=>{

}
const defaultState={
  people: data,
  isModalOpen:true,
  modalContent:'hello world'
}
const Index = () => {
  const [name, setName] = useState("");
  const [state,dispatch] = useReducer(reducer,defaultState)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      
    } else {
      
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}

          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person)=>{
        return <div key={personalbar.id}>
          <h4>{person.name}</h4>
        </div>
      })}
    </>
  );
};

export default Index;
