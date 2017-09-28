import React, {Component} from 'react';

class DocTitleLevel1 extends Component {
    render() {
        return (
            <h2 className="doc__title_level1">
                {this.props.title}
            </h2>
        )
    }
}

export default DocTitleLevel1;