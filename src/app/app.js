import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('jquery'); // 必须引入，不然webpack不会bundle的
require('../lib/jquery.easing.min'); // animate动画效果插件
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory, browserHistory} from 'react-router';
import "../css/all.scss"

import IndexCarousel from '../components/IndexCarousel/IndexCarousel';
import BitOperator from '../components/Monday/BitOperator'

class App extends Component {
    render() {
        return (
            <div className="hp-100">
                {this.props.children}
            </div>
        )
    }
}

class Monday extends Component {
    render() {
        return (
            <div className="full-screen">
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={IndexCarousel} />
            <Route path="monday" component={Monday}>
                <Route path="bitOperator" component={BitOperator} />
            </Route>
        </Route>
    </Router>,
    document.getElementById("appContainer")
);

