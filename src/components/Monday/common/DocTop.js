import React, {Component} from 'react';
const $ = require('jquery');

class DocTop extends Component {
    scrollToTop = (e) => {
        e.preventDefault();
        $('.doc__content').animate({
            scrollTop: 0
        }, 1200, 'easeOutCubic');
    }
    scrollToDown = () => {
        let h = $('.doc__content-main').outerHeight(true) - $('.doc__content').outerHeight(true);
        $('.doc__content').animate({
            scrollTop: h
        }, 1200, 'easeOutCubic');
    }
    render() {
        return (
            <div className="doc__top">
                <div className="doc__top-t"
                     onClick={this.scrollToTop}
                ></div>
                <div className="doc__top-b"
                     onClick={this.scrollToDown}
                >底</div>
            </div>
        )
    }
}

export default DocTop;