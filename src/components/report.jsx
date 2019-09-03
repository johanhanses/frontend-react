import React from 'react';
import { Link } from 'react-router-dom';
import Form from "./common/form";
import authService from "../services/authService"

class Report extends Form {
    state = {}

    componentDidMount() {
        const user = authService.getCurrentUser();
        this.setState({ user });
    }

    render() {
        return (
            <React.Fragment>
                <div> 
                    <h2>Reports</h2>
                </div>
                <div>
                    <ul>
                        {this.state.user && (
                        <li>
                            <Link to="/new"><span>Add a new report</span></Link>
                        </li>)}
                        <br />
                        <br />
                        <li>
                            <Link to="/week/1">Week 1</Link>
                        </li>
                        {this.state.user && (
                        <li>
                            <Link to="/edit/1"><span>Edit</span></Link>
                        </li>
                        )}
                        <br />
                        <li>
                            <Link to="/week/2">Week 2</Link>
                        </li>
                        {this.state.user && (
                        <li>
                            <Link to="/edit/2"><span>Edit</span></Link>
                        </li>
                        )}
                        <br />
                        <li>
                            <Link to="/week/3">Week 3</Link>
                        </li>
                        {this.state.user && (
                        <li>
                            <Link to="/edit/3"><span>Edit</span></Link>
                        </li>
                        )}
                        <br />
                        <li>
                            <Link to="/week/4">Week 4</Link>
                        </li>
                        {this.state.user && (
                        <li>
                            <Link to="/edit/4"><span>Edit</span></Link>
                        </li>
                        )}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Report;