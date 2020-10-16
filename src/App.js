// create your App component here
import React from 'react';

class App extends React.Component {


    
    render() {
        
    }

    componentDidMount() {
        const url =  'http://api.open-notify.org/astros.json'

        fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }



}
export default App;