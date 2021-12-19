import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import { Alert } from "react-bootstrap";
import "./login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [todoList, setTodoList] = useState(true);
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("myPassword").replace(/"/g, "");
    let mail = localStorage.getItem("myEmail").replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!email || !password) {
      setError(true);
    } else if (password !== pass || email !== mail) {
      setError(true);
    } else {
      setError(false);
      setTodoList(!todoList);
    }
  };

  return (
    <>
      {todoList ? (
        <form className="login-con" onSubmit={handleLogin}>
          <h3>Login</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Password"
              name="name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              name="name"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          {error && (
            <Alert color="primary" variant="warning">
              Fill correct Info please
            </Alert>
          )}
        </form>
      ) : (
        <TodoList />
      )}
    </>
  );
}
