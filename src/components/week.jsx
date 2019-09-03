import React, { Component } from 'react';
import httpService from "../services/httpService"

const apiUrl = "https://me-api.johanhanses.me/reports/week";

class Week extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            week: "",
            writer: "",
            report: "",
            created_at: ""
        }
    }
    
    reportUrl(id) {
        return `${apiUrl}/${id}`;
    }
    
    
    getReport(weekNum) {
        return httpService.get(this.reportUrl(weekNum));
    }

    async componentDidMount() {
        const result = await this.getReport(this.state.id);
        console.log(result);
        if (result.data.week.length !== 0) {
            const { week } = result.data.week[0];
            const { writer } = result.data.week[0];
            const { report } = result.data.week[0];
            const { created_at } = result.data.week[0];

            // console.log(report)
            this.setState({ 
                week,
                writer,
                report,
                created_at
            });
        } else {
            return null;
        }
    }

    render() { 
        return ( 
            <div>
                <h2>Week { this.state.week }</h2>
                <p>Author: { this.state.writer }</p>
                <p>{ this.state.created_at }</p>
                <br />
                <p>{ this.state.report }</p>

            </div>
        );
    }
}

export default Week;