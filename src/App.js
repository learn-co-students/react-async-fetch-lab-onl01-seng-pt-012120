import React, {Component} from 'react';

export default class App extends Component {
    state = {}
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(json => this.setState(json));
    }
    render() {
    return (<div></div>)
    }
}