import React, {Component} from 'react';

import loadingImg from '../../images/loading/load.gif';
class FullScreenLoading extends Component {
    render() {
        let styleData = {
            display: this.props.showLoading ? 'block':'none'
        };
        return (
            <div className="fullLoading" style={styleData}>
                <div className="fullLoading__img">
                    <img src={loadingImg} alt=""/>
                </div>
            </div>
        )
    }
}

export default FullScreenLoading;

