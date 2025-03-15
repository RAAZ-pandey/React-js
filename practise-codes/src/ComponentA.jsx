import { useState , useContext, createContext } from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();

function USeContext() {

  const [user, serUser] = useState("Godfather");

  return(
      <div className="box">
            <h1>Component A</h1>
            <h2>{`I am  ${user}`}</h2>
            <UserContext.Provider value ={user}>
            <ComponentB user = {user}/>
            </UserContext.Provider>
           
      </div>
  );
}

export default USeContext;