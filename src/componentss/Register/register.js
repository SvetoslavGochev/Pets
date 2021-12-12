
import { useNavigate } from "react-router";

import * as authServise from '../../Service/authService';


import { useAuthContext } from "../../context/AuthContext";

const Register = () => {
    const navigate = useNavigate();
    const { login } =useAuthContext();

    const registerSubmitHandler = (e) => {
       e.preventDefault();

       let { email, password } = Object.fromEntries(new FormData(e.currentTarget));
       
       authServise.register(email, password)
       .then(authData => {
           login(authData);

           navigate('/dashboard');
       })

   }

    return(
<section id="register-page" class="register">
            <form id="register-form" action="" method="" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}

export default Register;