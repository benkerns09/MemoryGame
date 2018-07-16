import React, {Component} from 'react';
import './Jobs.css';
import JobsListItem from '../src/JobsListItem';
import axios from 'axios';

class Jobs extends Component {

    constructor() {
        super();
        this.state = {
            jobs: []
        };
    }
//using axios library to trigger a GET request. When the response comes back from the server, we're updating this Component's state to now contain the list of jobs
componentWillMount() {
    axios.get('/api/jobs')
        .then(({ data }) => { this.setState({ jobs: data}) });
}

    render() {

        let jobsJSX = this.state.jobs.map((job, index) => {return <JobsListItem key={index} {...job}/>})

        return(
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Jobs In Atlanta</h1>
                        <p className="App-subtitle">Click to explore jobs!</p>
                    </header>
                </div>
                { jobsJSX }
            </div>
        )
    }
}

export default Jobs;