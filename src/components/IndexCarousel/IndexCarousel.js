import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

import carouselImg1 from '../../images/carousel1.jpg';
import carouselImg2 from '../../images/carousel2.jpg';
import carouselImg3 from '../../images/carousel3.jpg';
import carouselImg4 from '../../images/carousel4.jpg';
import carouselImg5 from '../../images/carousel5.jpg';
let carouselImgArr = [carouselImg1,carouselImg2,carouselImg3,carouselImg4,carouselImg5];
let windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


class CarouselLeft extends Component {
    render() {
        let liArr = [];
        for(let index in carouselImgArr) {
            let liTemp = <li className="carousel__lun-item">
                <img className="carousel__lun-img_l"
                     src={carouselImgArr[index]} alt=""/>
            </li>;
            liArr.push(liTemp);
        }
        let renderStyle = {
            top: -windowH*this.props.currentIndex + 'px'
        };
        return (
            <div className="carousel__l">
                <ul className="carousel__lun_l" style={renderStyle}>
                    {liArr}
                </ul>
            </div>
        )
    }
}

class CarouselRight extends Component {
    render() {
        let liArr = [];
        for(let index in carouselImgArr) {
            let liTemp = <li className="carousel__lun-item">
                <img className="carousel__lun-img_r"
                     src={carouselImgArr[index]} alt=""/>
            </li>;
            liArr.push(liTemp);
        }
        let renderStyle = {
            top: -windowH*this.props.currentIndex + 'px'
        };
        return (
            <div className="carousel__r">
                <ul className="carousel__lun_r" style={renderStyle}>
                    {liArr}
                </ul>
            </div>
        )
    }
}

class CarouselMenu extends Component {
    render() {
        return (
            <ul className="carousel__menu">
                <li className="carousel__child-menu carousel__child-menu_active">Home</li>
                <li className="carousel__child-menu">About</li>
                <li className="carousel__child-menu">Capabilities</li>
                <li className="carousel__child-menu">Our Work</li>
                <li className="carousel__child-menu">Clients</li>
                <li className="carousel__child-menu">Careers</li>
                <li className="carousel__child-menu">Contact</li>
            </ul>
        )
    }
}

class CarouselMenuIcon extends Component {
    openMenu = () => {
        document.querySelector('.indexMenu').style.right = '0';
    }
    render() {
        return (
            <div className="carousel__menu-icon"
                 onClick={this.openMenu}
            >

            </div>
        )
    }
}

class CarouselPagination extends Component {
    render() {
        let liArr = [];
        for(let index in carouselImgArr) {
            let nowClassName = 'carousel__circle';
            if(index == this.props.currentIndex) {
                nowClassName += ' carousel__circle_active';
            }
            let liTemp = <li className={nowClassName}
            onClick={this.props.changeIndex.bind(this, index)}></li>;
            liArr.push(liTemp);
        }
        return (
            <ul className="carousel__pagination">
                {liArr}
            </ul>
        )
    }
}
import musicIcon from '../../images/music/wave.gif';
class IndexMusicIcon extends Component {
    constructor() {
        super();
        this.songLoad = this.songLoad.bind(this);
        this.switchSong = this.switchSong.bind(this);
    }
    songLoad() {
        this.refs.myAudio.play();
        this.refs.myAudio.volume = 0.5;
        this.props.changeLoading();
    }
    switchSong() {
        if(this.refs.myAudio.paused) {
            this.refs.myAudio.play();
        } else {
            this.refs.myAudio.pause();
        }
    }
    render() {
        let audioUrl = 'http://ovegl1dz1.bkt.clouddn.com/music/song1.mp3';
        return (
            <div className="carousel__music-icon" onClick={this.switchSong}>
                <img src={musicIcon} alt=""/>
                <audio src={audioUrl}
                       ref="myAudio"
                       loop
                       onCanPlay={this.songLoad}
                       id="myAudio"
                ></audio>
            </div>
        )
    }
}

import FullScreenLoading from '../Loading/FullScreenLoading';

let gradientArr = ['red-gradient','pink-gradient','orange-gradient','yellow-gradient','green-gradient','blue-gradient','purple-gradient',];
let menus = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let menuIcons = ['indexMenu__icon-text','indexMenu__icon-table','indexMenu__icon-setting','indexMenu__icon-internation','indexMenu__icon-game','indexMenu__icon-picture','indexMenu__icon-star'];
let childMenu = [
    {
        title: 'js位运算符妙用☺',
        url: '/monday/bitOperator'
    },
    {
        title: '2008年北京奥运会',
        url: '/monday/1'
    },
    {
        title: '2008年北京奥运会',
        url: '/monday/2'
    },
    {
        title: '2008年北京奥运会',
        url: '/monday/3'
    },
    {
        title: '2008年北京奥运会',
        url: '/monday/4'
    },
    {
        title: '2008年北京奥运会',
        url: '/monday/5'
    },
    {
        title: '2008年北京奥运会',
        url: '/monday/6'
    }
];
import DataLoading from '../Loading/DataLoading';
class IndexMenu extends Component {
    closeMenu = () => {
        document.querySelector('.indexMenu').style.right = '100%';
    }
    render() {
        let indexGradient = 'indexMenu ';
        indexGradient += gradientArr[this.props.currentMenu || 0];
        let menuItem = [];
        for(let [index, val] of menus.entries()) {
            let tempClassName = 'indexMenu__menu-item';
            let tempMenu = '';
            if(this.props.currentMenu === index) {
                tempClassName += ' indexMenu__menu-item_active';
                tempMenu = <div className={tempClassName}
                                     onClick={this.props.changeMenu.bind(this, index)}
                >
                    {val}
                    <div className={menuIcons[this.props.currentMenu]}></div>
                </div>;
            } else {
                tempMenu = <div className={tempClassName}
                                    onClick={this.props.changeMenu.bind(this, index)}
                >
                    {val}
                </div>;
            }

            menuItem.push(tempMenu)
        }
        let childMenuDivs = childMenu.map((value, index) => {
            return <div className='indexMenu__childMenu' key={value.url}>
                <div className="indexMenu__childMenu-number">{index + 1}</div>
                <div className="indexMenu__childMenu-week">{menus[this.props.currentMenu]}</div>
                <div className="indexMenu__childMenu-title">{value.title}</div>
                <Link to={value.url}>
                    <div className="indexMenu__childMenu-mask">
                        <DataLoading loadingColor="#fff" />
                    </div>
                </Link>
            </div>
        });


        return (
            <div className={indexGradient}>
                <div className="indexMenu__l">
                    <div className="indexMenu__logo">
                        <div className="indexMenu__down"
                             onClick={this.closeMenu}
                        >

                        </div>
                    </div>
                    <div className="indexMenu__menu-box">
                        {menuItem}
                    </div>
                </div>
                <div className="indexMenu__r">
                    <div className="indexMenu__childMenu-box">
                        {childMenuDivs}
                    </div>
                </div>
            </div>
        )
    }
}
class IndexCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            currentMenu: 0,
            showLoading: true
        };
        this.changeIndex = this.changeIndex.bind(this);
        this.changeLoading = this.changeLoading.bind(this);
        this.changeMenu = this.changeMenu.bind(this);
    }
    changeIndex(index) {
        this.setState({
            currentIndex: index
        })
    }
    changeMenu(index) {
        this.setState({
            currentMenu: index
        })
    }
    changeLoading() {
        this.setState({
            showLoading: false
        });
    }
    render() {
        return (
            <div className="carousel">
                <CarouselLeft currentIndex={this.state.currentIndex} />
                <CarouselRight currentIndex={this.state.currentIndex} />
                <CarouselMenu />
                <CarouselMenuIcon />
                <CarouselPagination currentIndex={this.state.currentIndex}
                                    changeIndex={this.changeIndex} />
                <IndexMusicIcon changeLoading={this.changeLoading} />
                <FullScreenLoading showLoading={this.state.showLoading} />
                <IndexMenu currentMenu={this.state.currentMenu} changeMenu={this.changeMenu} />
            </div>
        )
    }
}


export default IndexCarousel;