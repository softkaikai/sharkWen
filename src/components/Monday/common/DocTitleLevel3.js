import React, {Component} from 'react';

class DocTitleLevel3 extends Component {
    render() {
        return (
            <h3 className="doc__title_level3">
                {this.props.title}
            </h3>
        )
    }
}

export default DocTitleLevel3;