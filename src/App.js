import { Component } from "react";
// create your App component here
import React  from 'react';

class App extends Component {

    state = {
        them: [ ]
    }
    
        componentDidMount(){
            fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(info => this.setState({
                them: info.people
            }) )
                
            

        }
    
    render() {


        return ( <div>
          <p> {this.state.them.map(person => person.name)} </p>
          <h3> Hello All</h3>

        </div> );
    }
}
 
export default App;