import React, {Component} from 'react';
import './Jobs.css';
import JobsListItem from './JobsListItem.js';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Job from './Job.js';

class Jobs extends Component {

    constructor() {
        super();
        this.state = {
            jobs: []
        }
    }
//using axios library to trigger a GET request. When the response comes back from the server, we're updating this Component's state to now contain the list of jobs
componentWillMount() {
    axios.get('/api/jobs')
        .then(({ data }) => { this.setState({ jobs: data}) })
}

    render() {

        let jobsJSX = this.state.jobs.map((job, index) => {return <JobsListItem key={index} {...job}/>})
        //this line above is trying to take every job and spit out a visual jobs. Returning into an array of JSX. This way we can refer to it as JobsJSX. Could split this up into multiple lines to help. Our job is to return a <jobslistitem /> for every job in the array

        return(
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Jobs In Atlanta</h1>
                        <p className="App-subtitle">Click to explore jobs!</p>
                    </header>
                </div>
                <div className="Jobs">
                    <Switch>
                        <Route exact path="/jobs" render={ () => jobsJSX } />
                        <Route path="/jobs/:id" component={ Job }/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Jobs;