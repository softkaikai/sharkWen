import React, {Component} from 'react';

class DocCode extends Component {
    render() {
        return (
            <div className="doc__code">
                <pre>
                    {this.props.children}
                </pre>
            </div>
        )
    }
}

export default DocCode;