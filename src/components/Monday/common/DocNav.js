import React, {Component} from 'react';
const $ = require('jquery');

class DocNav extends Component {
    changeNav = (index, id) => {
        let Objs = $('.doc__nav-a');
        Objs.removeClass('doc__nav-a_active');
        Objs.eq(index).addClass('doc__nav-a_active');
        $('.doc__content').animate({
            scrollTop: $(id).offset().top
        }, 1200, 'easeOutCubic');
    }
    render() {
        let liArr = '';
        if(this.props.nav && this.props.nav.length) {
            liArr = this.props.nav.map((val, index) => {
                let activeName = 'doc__nav-a';
                if(index === 0) {
                    activeName += ' doc__nav-a_active'
                }
                return (
                    <li className="doc__nav-item" key={val.id}>
                        <a className={activeName}
                           onClick={this.changeNav.bind(this, index, val.id)}
                        >{val.name || '传的啥子鸡婆数据哦！'}</a>
                    </li>
                )
            });
        } else {
            let tempLi = <li className="doc__nav-item">
                <a className="doc__nav-a">传的啥子鸡婆数据哦！</a>
            </li>;
            liArr.push(tempLi);
        }

        return (
            <ul className="doc__nav">
                {liArr}
            </ul>
        )
    }
}

export default DocNav;