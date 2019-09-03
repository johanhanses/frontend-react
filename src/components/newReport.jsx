import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form"
import { getMovie, saveReport } from "../services/movieService";

class NewReport extends Form {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                week: "",
                writer: "",
                report: ""
            },
            errors: {}
        }
    }
    schema = {
        week: Joi.number()
            .required()
            .label("Week number"),
        writer: Joi.string()
            .required()
            .label("Author"),
        report: Joi.string()
            .required()
            .label("Report")
    };

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

    // async componentDidMount() {
    //     await this.populateGenres();
    //     await this.populateMovie();
    // }

    // mapToViewModel(movie) {
    //     return {
    //         _id: movie._id,
    //         title: movie.title,
    //         genreId: movie.genre._id,
    //         numberInStock: movie.numberInStock,
    //         dailyRentalRate: movie.dailyRentalRate
    //     };
    // }

    doSubmit = async () => {
        console.log(this.state.data)
        await saveReport(this.state.data);
        this.props.history.push("/report");
    }

    render() { 
        return (
            <div>
                <h2>Movie form</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("week", "Week number")}
                    {/* {this.renderSelect("genreId", "Genre", this.state.genres)} */}
                    {this.renderInput("writer", "Author")}
                    {/* <textarea cols="30" rows="10"></textarea> */}
                    {this.renderTextarea("report", "Report", "10", "49")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default NewReport;