import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick/lib';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NEWS_DATA from "../../MockData/NewsMock";

const NewsCompenent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 4px;
    background: white;
    width: 300px;
    height: 250px;
    position: fixed;
    right: 0;
    margin-right: 45px;
    z-index: -1;
    
    .topic {
        border-bottom: 1px solid #ffeaea;
        font-size: 18px;
        font-weight: bold;
        padding: 10px 0;
        margin-bottom: 4px;
        cursor: default;
        background: -webkit-linear-gradient(#a50000,#f00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const NewsContainer = styled.div`
    display: flex !important;
    flex-direction: column;
    padding: 16px 32px;
    height: 150px;
    justify-content: space-between;
    
    &:focus {
        outline: none;
    }
    
    .description {
        text-align: start;
        font-size: 14x;
        opacity: 0.87;
        line-height: 1.45;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        word-wrap: break-word;
    }
    
    .author {
        text-align: end;
        font-size: 12px;
        opacity: 1;
        line-height: 1.55;
        overflow: hidden;
        word-wrap: break-word;
        color: blue;
        font-weight: bold;
    }
`;


export const News = () => {

    const settings = {
        infinite: true,
        speed: 2500,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
        centerPadding: '30px',
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        focusOnSelect: false,
        dots: true
    };

    let     NewsToShow = NEWS_DATA.newsList.map(news => {
        return (
            <NewsContainer key={news.id}>
                <div className='description'>{news.description}</div>
                <div className='author'>{news.author}</div>
            </NewsContainer>
        )
    });

    console.log("News : ", NewsToShow);

    return (
        <React.Fragment>
            {NewsToShow.length > 0 &&
                <NewsCompenent>
                    <div className='topic'> News </div>
                    <Slider {...settings}> {NewsToShow} </Slider>
                </NewsCompenent>
            }
        </React.Fragment>
    )

};