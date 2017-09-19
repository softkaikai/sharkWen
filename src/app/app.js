import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory, browserHistory} from 'react-router';
import "../css/all.scss"

import IndexCarousel from '../components/IndexCarousel/IndexCarousel';

class App extends Component {
    render() {
        return (
            <div className="hp-100">
                {this.props.children}
            </div>
        )
    }
}


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={IndexCarousel} />
        </Route>
    </Router>,
    document.getElementById("appContainer")
);

