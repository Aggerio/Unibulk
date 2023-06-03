import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './styles.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState(false);

  const navigate = useNavigate();
  function routeChange(event) {
    event.preventDefault();
    // event.preventDefault();
    navigate('/home');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = '';
    try {
      // Make a request to Flask API to check if the user exists and the password is correct
      response = await axios.post('http://127.0.0.1:5000/users', {
        username,
        password
      });

      // User logged in successfully, do something here (redirect, show success message, etc.)
      console.log(response);
      navigate('/home');
    } catch (error) {
      // Handle login error (wrong credentials, server error, etc.)
      console.log(error);
      setFailed(true);
    }
  };
  return (
    <div className={"login"}>
      <section>
        <div className={"form-box"}>
          <div className={"form-value"}>
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className={"inputbox"}>
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" value={username} required onChange={(e) => setUsername(e.target.value)} />
                <label >Email</label>
              </div>
              <div className={"inputbox"}>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                <label>Password</label>
              </div>
              <div className="forget">
                <label ><a href="#">Forgot Password?</a></label>

              </div>
              <button type="submit">Log in</button>
              <div className={"register"}>
                <p>Don't have an account?<a href="#">Register</a></p>
              </div>

              <div className={"register"}>
                {(failed == true) ? <p> Invalid email or password</p> : <div></div>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div >
  )
}
