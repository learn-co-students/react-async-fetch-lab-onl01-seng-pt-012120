// create your App component here
import React, { Component } from 'react';

class App extends Component {

    state = {
       
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
    }

    render(){
        return( 
        <div>
        <h1>Async lab </h1>
        </div>
        )}
        
}
export default App;