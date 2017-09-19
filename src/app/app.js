import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory, browserHistory} from 'react-router';

import "../css/all.scss"

class Test1 extends Component {
    render() {
        return (
            <div>
                <h1>kaikai</h1>
            </div>
        )
    }
}
class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Test1} />
        </Route>
    </Router>,
    document.getElementById("appContainer")
);

