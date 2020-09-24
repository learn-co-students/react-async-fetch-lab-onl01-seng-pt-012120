import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            people: []
        }
    }
    render() {
        return (
            <div>
                {this.state.people.map( p => <p>{p.name} - {p.craft}</p>)}
            </div>
        )
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    people: json.people
                })
            });

    }
}

export default App