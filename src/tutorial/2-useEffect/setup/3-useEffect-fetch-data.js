import React, { useState, useEffect } from "react";
// lesson 50 useEffect fetch data

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users)
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  },[]); // tu musi byc array bo inaczej bedzie loop

  return (
    <>
      <h3>gitHub user</h3>
      <ul className="users">
      {users.map((user)=>{
        const {id,login,avatar_url,html_url,type} = user
        return <li key={id}>
          <img src={avatar_url} alt={login}/>
          <div>
            <h4>{login}</h4>
            <a href={html_url}>profile</a>
            <h4>{type}</h4>
          </div>

        </li>
        
      })}
      </ul>

    </>
  );
};

export default UseEffectFetchData;
