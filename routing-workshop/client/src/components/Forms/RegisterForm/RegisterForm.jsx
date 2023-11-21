import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";
import useForm from "../../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

const RegisterForm = () =>
{
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(
        {
            [RegisterFormKeys.Email]: '',
            [RegisterFormKeys.Password]: '',
            [RegisterFormKeys.ConfirmPassword]: '',
        }, registerSubmitHandler)

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id={RegisterFormKeys.Email}
                        name="email"
                        placeholder="maria@email.com"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Email]} />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name={RegisterFormKeys.Password}
                        id="register-password"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Password]} />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name={RegisterFormKeys.ConfirmPassword}
                        id="confirm-password"
                        onChange={onChange}
                        value={values[RegisterFormKeys.ConfirmPassword]} />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default RegisterForm;