import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form"
import { getReport, saveReport } from "../services/movieService";

class EditReport extends Form {
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
        id: Joi.number(),
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

    async populateReport() {
        try {
            const reportId = this.props.match.params.id;
            // if (reportId === "new") return;
            const { data: report } = await getReport(reportId);
            // console.log(report);
            this.setState({ data: this.mapToViewModel(report) });
            // console.log(this.state.data.week[0].id);

        }
        catch (ex) {
            if (ex.response && ex.response.status === 404) 
                this.props.history.replace("/not-found");
        }
    }

    async componentDidMount() {
        await this.populateReport();
    }

    mapToViewModel(report) {
        return {
            id: report.week[0].id,
            week: report.week[0].week,
            writer: report.week[0].writer,
            report: report.week[0].report
        };
    }

    doSubmit = async () => {
        // console.log(this.state.data)
        await saveReport(this.state.data);
        this.props.history.push("/report");
    }

    render() { 
        // console.log(this.state.errors);
        return (
            <div>
                <h2>Edit report</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="week">Week number</label>
                        <input 
                            type="text"
                            name="week"
                            id="week"
                            value={this.state.data["week"]}
                            onChange={this.handleChange} 
                        />
                        {this.state.errors["week"] && <div className="alert alert-danger">{this.state.errors["week"]}</div>}
                    </div>
                    <div>
                        <label htmlFor="writer">Author</label>
                        <input 
                            type="text"
                            name="writer"
                            id="writer"
                            value={this.state.data["writer"]}
                            onChange={this.handleChange} 
                        />
                        {this.state.errors["writer"] && <div className="alert alert-danger">{this.state.errors["writer"]}</div>}
                    </div>
                    <div>
                        <label htmlFor="report">Author</label>
                        <textarea 
                            rows="10"
                            cols="51"
                            type="text"
                            name="report"
                            id="report"
                            value={this.state.data["report"]}
                            onChange={this.handleChange} 
                        />
                        {this.state.errors["report"] && <div className="alert alert-danger">{this.state.errors["report"]}</div>}
                    </div>
                    <button 
                        // disabled={this.validate()}
                    >
                        Save changes 
                    </button>
                </form>
                {/* <form onSubmit={this.handleSubmit}>
                    {this.renderInput("week", "Week number")}
                    {this.renderInput("writer", "Author")}
                    {this.renderTextarea("report", "Report", "10", "49")}
                    {this.renderButton("Save changes")}
                </form> */}
            </div>
        );
    }
}

export default EditReport;