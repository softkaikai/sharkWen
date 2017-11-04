import React, {Component} from 'react';

class DocLink extends Component {
    render() {
        return (
            <a className="doc__link" href={this.props.to} target="_blank">
                {this.props.children}
            </a>
        )
    }
}

export default DocLink;