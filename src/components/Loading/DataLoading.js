import React, {Component} from 'react';

class DataLoading extends Component {
    render() {
        let styleObj = {
            backgroundColor: this.props.loadingColor || '#ccc'
        };
        return (
            <div className="spinner">
                <div className="rect1" style={styleObj}></div>
                <div className="rect2" style={styleObj}></div>
                <div className="rect3" style={styleObj}></div>
                <div className="rect4" style={styleObj}></div>
                <div className="rect5" style={styleObj}></div>
            </div>
        )
    }
}

export default DataLoading;