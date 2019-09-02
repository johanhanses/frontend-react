import React, { Component } from 'react';
import httpService from "../services/httpService"

const apiUrl = "https://me-api.johanhanses.me";

class Main extends Component {
    state = {
        content: ""
    };

    async componentDidMount() {
        const result = await httpService.get(apiUrl);
        const { content } = result.data.home[0]
        this.setState({ 
            content
        })
    }

    render() { 
        return ( 
            <div>
                <h2>Home</h2>
                <p>{ this.state.content }</p>
            </div>
        );
    }
}

export default Main;