import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick/lib';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {isMobile} from "../../Utils/platformUtils";
import INTRO_DATA from "../../MockData/IntroData";
import left from "../../Assets/IntroCarousel/left.svg";
import right from "../../Assets/IntroCarousel/right.svg";

const IntroComponent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: ${isMobile() ? '98%' : '40%'};
    height: ${isMobile() ? '100%' : 'auto'};
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    right: 30%;
    left: ${isMobile() ? '0' : '30%'};
    right: 30%;
    top: ${isMobile() ? '0' : '20%'};
    z-index: ${isMobile() ? '1030' : '3'};
    
    .get_started {
        position: absolute;
        bottom: 20px;
        left: ${isMobile() ? '31%' : '39%'};
        display: flex;
        justify-content: center;
        height: 40px;
        align-items: center;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: black;
        background: white;
        margin: 20px;
        padding: 16px;
        border-radius: 4px;
        cursor: pointer;
        width: fit-content;
    }
    
    .slick-dots {
        bottom: ${isMobile() ? '80px' : '10px'};
    }
    
    .slick-dots li.slick-active button:before {
        opacity: 1;
        color: white;
    }
`;

const IntroContainer = styled.div`
    display: flex !important;
    flex-direction: column;
    padding: 32px;
    border-radius: ${isMobile() ? '0' : '20px'};
    justify-content: space-between;
    align-items: center;
    background: ${props => props.color} 
    height: ${isMobile() ? '100vh' : 'auto'};
    
    .img_container {
        margin: 10px;
    }
    
    .title {
        font-size: 30px;
        font-weight: 900;
        color: white;
        margin-top: 20px;   
    }
    
    .sub_title {
        font-size: 18px;
        color: white;
        margin-top: 10px;
    }
    
    .dummy {
        height: 40px;
        display: flex;
        margin: 10px 0 20px 0;
    }
`;

const Image = styled.img`
    height: 300px;
`;

const Overlay = styled.div`
    background-color: #000;
    opacity: 0.9;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
`;

const ArrowButton = styled.div`
    border-radius: 50%;
    padding: 8px;
    background: white;
    height: 54px;
    width: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 15px 32px 0 rgba(0, 0, 0, 0.1);
    
    position: absolute;
    padding: 0;
    right: ${props => props.direction === 'right' ? '-80px' : 'auto'};
    left: ${props => props.direction === 'right' ? 'auto' : '-80px'};
    line-height: 0;
    top: 50%;
    width: 54px;
    height: 54px;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    border: none;
    outline: 0;
    z-index: 1;
`;

const Arrow = styled.img`
    max-width: 24px;
    margin-right: 2.7px;
    margin-top: 3.3px;    
`;


export const IntroCarousel = (props) => {
    const NextArrow = ({onClick}) => (
        <div onClick={onClick}>
            <ArrowButton direction={'right'} className='slick-arrow'>
                <Arrow className='image' src={right} alt=""/>
            </ArrowButton>
        </div>
    );

    const PrevArrow = ({onClick}) => (
        <div onClick={onClick}>
            <ArrowButton direction={'left'} className='slick-arrow'>
                <Arrow className='image' src={left} alt=""/>
            </ArrowButton>
        </div>
    );

    const settings = {
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
        swipeToSlide: false,
        autoplay: false,
        arrows: !isMobile(),
        fade: true,
        focusOnSelect: false,
        dots: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

     let IntroToShow = INTRO_DATA.intro.map(help => {
        return (
            <IntroContainer color={help.color} key={help.id}>
                <div className='img_container'><Image src={help.image} alt=""/></div>
                <div className='title'>{help.title}</div>
                <div className='sub_title'>{help.sub_title}</div>
                <div className='dummy'/>
            </IntroContainer>
        )
    });

    return (
        <React.Fragment>
            <Overlay/>
            {IntroToShow.length > 0 &&
                <IntroComponent>
                    <Slider {...settings}> {IntroToShow} </Slider>
                    <div className='get_started' onClick={() => props.handleShowIntro(false)}>GET STARTED</div>
                </IntroComponent>
            }
        </React.Fragment>
    )

};