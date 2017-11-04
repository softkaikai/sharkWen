import React, {Component} from 'react';

class DocTextHeavy extends Component {
    render() {
        return (
            <span className="doc__text_heavy">
                {this.props.children}
            </span>
        )
    }
}

export default DocTextHeavy;