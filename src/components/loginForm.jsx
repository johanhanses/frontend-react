import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import Joi from "joi-browser";

import Form from './common/form';
import authService from "../services/authService";

class LoginForm extends Form {
    state = {
        data: { email: "", password: "" },
        errors: {}
    }

    schema = {
        email: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            const response = await authService.login(data.email, data.password);
            console.log(response);
            // const { state } = this.props.location;
            // window.location = state ? state.from.pathname : "/";
            window.location = "/";
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
                console.log(this.state.errors);
            }
        }
    }

    render() { 
        if (authService.getCurrentUser()) return <Redirect to="/" />

        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    { this.renderInput("email", "Username", "email") }
                    { this.renderInput("password", "Password", "password") }
                    { this.renderButton("Login") }
                </form>
            </div>
        )
    }
}
 
export default LoginForm;