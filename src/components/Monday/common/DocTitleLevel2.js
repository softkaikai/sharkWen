import React, {Component} from 'react';

class DocTitleLevel2 extends Component {
    render() {
        return (
            <h3 className="doc__title_level2">
                {this.props.title}
            </h3>
        )
    }
}

export default DocTitleLevel2;