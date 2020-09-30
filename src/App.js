import React from 'react';

export default class App extends React.Component {
    state = {
        peopleInSpace: [],
        numberInSpace: null
    }

    render() {
        return (
            <div>
                <p>There are {this.state.numberInSpace} people in space right now!</p>
                {this.state.peopleInSpace.map(p => <div>{p.name}</div>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people,
                    numberInSpace: data.number
                })
            })
    }
}