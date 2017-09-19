import React, {Component} from 'react';

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

class IndexCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {currentIndex: 0};
        this.changeIndex = this.changeIndex.bind(this);
    }
    changeIndex(index) {
        this.setState({
            currentIndex: index
        })
    }
    render() {
        return (
            <div className="carousel">
                <CarouselLeft currentIndex={this.state.currentIndex} />
                <CarouselRight currentIndex={this.state.currentIndex} />
                <CarouselMenu />
                <CarouselPagination currentIndex={this.state.currentIndex}  changeIndex={this.changeIndex} />
            </div>
        )
    }
}


export default IndexCarousel;