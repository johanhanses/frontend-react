import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from "./common/form"

class Report extends Form {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         questions: [],
    //         kmom: props.match.params.kmom
    //     };
    // }

    // componentDidMount() {
    //     let that = this;
    //     fetch("https://me-api.jsramverk.me/reports/" + this.state.kmom)
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(result) {
    //         that.setState({
    //             questions: result.data
    //         });
    //     });
    // }

    render() {
        // const renderedQuestions = this.state.questions.map((question, index) => {
            return (
                <React.Fragment>
                    <div> 
                        {/* className="question" key={index}>
                        <p><strong>{ question.question }</strong></p>
                        <p>{ question.answer }</p> */}
                        <h2>Reports</h2>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/week/1">Week 1</Link></li>
                            <br />
                            <li><Link to="/week/2">Week 2</Link></li>
                        </ul>
                    </div>
                </React.Fragment>
            )
        // });

        // return (
        //     <main>
        //         <h2>{ this.state.kmom }</h2>
        //         { renderedQuestions }
        //     </main>


        // );
    }
}

export default Report;