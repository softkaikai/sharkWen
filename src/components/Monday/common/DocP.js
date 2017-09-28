import React, {Component} from 'react';

class DocP extends Component {
    render() {
        return (
            <p className="doc__p">
                {this.props.children}
            </p>
        )
    }
}

export default DocP;