// create your App component here
import React, {Component } from 'react';

class App extends Component {

    state = {
        peopleSpaceArr: []
    }

    render() {
        return (
            <div><br/>
                {this.state.peopleSpaceArr.map(person=>person.name)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response=> response.json())
        .then(data=> {
           this.setState({ 
            peopleSpaceArr: data.people
            
             })
             console.log(data)
        })
    }


}

export default App;