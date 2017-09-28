import React, {Component} from 'react';

class DocTextLevel1 extends Component {
    render() {
        return (
            <span className="doc__text_level1">
                {this.props.children}
            </span>
        )
    }
}

export default DocTextLevel1;