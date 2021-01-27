import React, { useState, useContext } from "react";
import { data } from "../../../data";
// lesson 69
// more components
// fix - context api, redux (for more complex cases)

const PersonContex = React.createContext();
// two componets - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContex.Provider value={{ removePerson, people }}>
      <h3>Contex API / useContext</h3>
      <List />
    </PersonContex.Provider>
  );
};

const List = () => {
  const mainDate = useContext(PersonContex);
  console.log(mainDate);
  return (
    <>
      {mainDate.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContex);
  
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
