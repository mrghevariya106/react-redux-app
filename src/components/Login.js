import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "May Patel",
              age: 25,
              email: "may.patel@mail.com",
              password: "mayPatel107",
            })
          );
        }}
      >
        Login
      </button>
      <span></span>
      <span></span>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
