import React, {Component} from 'react';

class DocImg extends Component {
    render() {
        return (
            <div className="doc__img">
                <img src={this.props.imgUrl} alt=""/>
            </div>
        )
    }
}

export default DocImg;