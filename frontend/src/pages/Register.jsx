import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, {
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          toast("Successfully registered");
        })
        .catch((err) => {
          toast(err.response.data.error);
        });
    } else {
      toast("Please specify both email and password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <label htmlFor='email'>
        Email:
        <input
          type='email'
          name='email'
          id='email'
          placeholder='test@blabla.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor='password'>
        Password:
        <input
          type='password'
          name='password'
          id='password'
          placeholder='***********'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <input type='submit' value='Login' />
    </form>
  );
}

export default Register;
