/////////////////useState/////////////////

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import InputHook from "../components/InputHook.js";

const NameTest = () => {
  const [name, setName] = useState([
    { id: uuidv4(), name: "Hasibul", email: "demo@gmail.com" },
    { id: uuidv4(), name: "Hasan", email: "demo@gmail.com" },
    { id: uuidv4(), name: "Shanto", email: "demo@gmail.com" },
    { id: uuidv4(), name: "Abir", email: "demo@gmail.com" },
    { id: uuidv4(), name: "Ahmed", email: "demo@gmail.com" },
  ]);
  // const [name2, setName2] = useState("");
  const [name2, setName2, clearName] = InputHook("");
  const [email, setEmail, clearEmail] = InputHook("");
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    e.preventDefault();
    setName([...name, { id: uuidv4(), name: name2, email: email }]);
    clearName();
    clearEmail();
  };

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {name.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleChange}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={name2}
            onChange={setName2}
            placeholder="Add member"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={setEmail}
            placeholder="Add Email"
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Add" />
        </div>
      </form>
      <button
        type="submit"
        className="btn btn-info"
        onClick={() => setCount(count + 1)}
      >
        Count
      </button>
    </>
  );
};
export default NameTest;
