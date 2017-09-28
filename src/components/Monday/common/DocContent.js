import React, {Component} from 'react';

class DocContent extends Component {
    render() {
        return (
            <div id={this.props.docId} className="doc__content-field">
                {this.props.children}
            </div>
        )
    }
}

export default DocContent;