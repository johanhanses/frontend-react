import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
// import * as userService from '../services/userService';
// import authService from "../services/authService";

class RegisterForm extends Form {
    state = {
        data: {
            username: "",
            password: "",
            name: "",
            birthdate: ""
        },
        errors: {},
    }

    schema = {
        username: Joi.string()
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


    async populateGenres() {
        // const { data: dates } = await getGenres();
        // this.setState({ dates });
    }

    // async populateMovie() {
    //     try {
    //         const movieId = this.props.match.params.id;
    //         if (movieId === "new") return;
    //         const { data: movie } = await getMovie(movieId);
    //         this.setState({ data: this.mapToViewModel(movie) });
    //     }
    //     catch (ex) {
    //         if (ex.response && ex.response.status === 404) 
    //             this.props.history.replace("/not-found");
    //     }
    // }

    async componentDidMount() {
        // await this.populateGenres();
        // await this.populateMovie();
    }

    doSubmit = async () => {
        // try {
        //     const response = await userService.register(this.state.data);
        //     authService.loginWithJwt(response.headers["x-auth-token"]);
        //     window.location = "/";
        // }
        // catch (ex) {
        //     if (ex.response && ex.response.status === 400) {
        //         const errors = { ...this.state.errors };
        //         errors.username = ex.response.data;
        //         this.setState({ errors });
        //     }
        // }
    }

    render() { 
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username", "email")}
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
