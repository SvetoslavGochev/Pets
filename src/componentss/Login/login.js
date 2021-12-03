import { useNavigate } from "react-router-dom";

import * as authServise from "../../Service/authService";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const onLoginHendlar = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");

    let password = formData.get("password");
    // vzima napisanoto v ;oleto email
    console.log(formData.get("email"));
    console.log('asdasd');

    authServise.login(email, password)
         .then((authData) => {
 
             onLogin(authData);
             
             navigate('/');
         })
         .catch(err => {
          console.log(err);
         })


  };

  return (
    <section id="login-page" class="login">
      <form id="login-form" onSubmit={onLoginHendlar} method="POST">
        <fieldset>
          <legend>Login Form</legend>
          <p class="field">
            <label for="email">Email</label>
            <span class="input">
              <input type="text" name="email" id="email" placeholder="Email" />
            </span>
          </p>
          <p class="field">
            <label for="password">Password</label>
            <span class="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </span>
          </p>
          <input class="button submit" type="submit" value="Login" />
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
