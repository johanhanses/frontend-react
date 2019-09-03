import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService';
// import authService from "../services/authService";
import { toast } from "react-toastify";

// import httpService from "../services/httpService";
// import jwtDecode from "jwt-decode";


class RegisterForm extends Form {
    state = {
        data: {
            email: "",
            password: "",
            name: "",
            birthdate: ""
        },
        errors: {},
    }

    schema = {
        email: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name"),
        birthdate: Joi.date()
            .required()
            .label("Birth date")
    };

    doSubmit = async () => {
        try {
            // const response = 
            await userService.register(this.state.data);
            console.log(this.state.data.name);
            toast(`User ${this.state.data.name} is created and can now log in,`);

            // authService.loginWithJwt(response.headers["x-auth-token"]);
            // window.location = "/";
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    render() { 
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email", "Username", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderInput("birthdate", "Birth date", "date")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}
 
export default RegisterForm;
