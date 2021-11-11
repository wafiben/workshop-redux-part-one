import "./App.css";
import { useDispatch} from "react-redux";
import React, { useState } from "react";
import { Add } from "./redux/Action";
import ListOfUsers from './ListOfUsers'

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  function handleChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value });
  }
  function onSubmit(event) {
    event.preventDefault();
    handleChange(event);
    dispatch(Add(user));
    setUser({ email: "", password: "" });
  }
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            value={user.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            value={user.password}
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ListOfUsers></ListOfUsers>
    </div>
  );
}

export default App;
