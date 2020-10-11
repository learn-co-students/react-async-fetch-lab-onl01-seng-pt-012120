import React, { Component } from 'react';

class App extends Component {
    state = {data: null, error: false}

    componentDidMount() {
        const url = 'http://api.open-notify.org/astros.json'
        fetch(url).then(resp => resp.json())
                    .then(result => this.setState({data: result.people}))
                    .catch(() => this.setState({error: true}))
    }

    displayData() {
        let content;
        if (this.state.error) {
            content = <h1>Error while fetching the data, please try again</h1>
        } else if(this.state.data) {
            content = this.state.data.map(person => (
                <div>
                    <h2>Name: {person.name}</h2>
                    <h2>Craft: {person.craft}</h2>
                </div>
            ))
        } else {
            content = <h2>There's nobody currently in space.</h2>
        };
        return content
    }
    render() {
        
        return (
            <div>
                <h1>List of People Currently in Space:</h1>
                {this.displayData()}
            </div>
        );
    }
}

export default App;

