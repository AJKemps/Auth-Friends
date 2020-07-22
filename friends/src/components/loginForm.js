import React, { useState } from "react";

const initialCredentials = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [formValues, setFormValues] = useState(initialCredentials);

  const handleChanges = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="loginForm">
      <form>
        <input onChange={handleChanges} type="text"></input>
        <input onChange={handleChanges} type="password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
