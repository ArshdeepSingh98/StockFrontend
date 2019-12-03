import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick/lib';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RECOMMENDER_DATA from "../../../MockData/RecommenderMock";
import autoBind from "react-autobind/src/autoBind";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const RecComponent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 4px;
    background: #222;
    width: 15%;
    height: 360px;
    position: absolute;
    left: 0;
    top: 310px;
    margin-left: 1%;
    z-index: 0;
    
    @media (min-width: 1700px) {
        margin-left: 2.5%;
    }
    
    @media (max-width: 1600px) {
        display: none;
    }
    
    .topic {
        font-size: 18px;
        color: #d8d8d8;
        font-weight: bold;
        padding: 10px 0;
        margin-bottom: 4px;
        cursor: default;
    }
    
    .nav-tabs {
        border-bottom: 0;
    }
    
    .nav-tabs .nav-link {
        width: 50%;
        color: #7e8388;
    }
    
    .nav-tabs .nav-link.active {
        border: 0;
        border-radius: 0;
        color: #0e437b;
        font-weight: bold;
    }
    
    .tab-content {
        background: white;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    
    .rec-slider {
        margin: 10px;
    }
    
    .slick-track {
        height: 255px;
    }
`;

const RecContainer = styled.div`
    display: flex !important;
    flex-direction: column;
    height: 250px;
    justify-content: center;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0px 2px 3px #000000c7
    
     &:focus {
        outline: none;
    }
    
    .image-container {
        height: 250px;
        background: black;
    }
    
    .image {
        height: 100%;
        width: 100%;
    }
    
    .name {
        text-align: left;
        color: #0e437b;
        font-weight: bold;
    }
    
    .action {
        text-align: center;
        border-radius: 2px;
        background: #0e437b;
        color: white;
        cursor: pointer;
    }
`;

class RecommenderCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "users"
        };
        autoBind(this);
    }

    handleTabSelect(key) {
        this.setState({activeTab: key})
    }

    render() {

        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 1.4,
            slidesToScroll: 1,
            initialSlide: 0,
            centerMode: false,
            swipeToSlide: true,
            autoplay: false,
            arrows: true,
            focusOnSelect: false,
            dots: true
        };

        let targetList = this.state.activeTab === 'users' ? RECOMMENDER_DATA.userList : RECOMMENDER_DATA.orgList;
        let RecommendationsToShow = targetList.map(rec => {
            return (
                <RecContainer key={rec.id}>
                    <div className='image-container'><img className='image' src={rec.image} alt=""/></div>
                    <div className='name'>{rec.name}</div>
                    <div className='action'>{rec.followed ? 'Unfollow' : 'Follow'}</div>
                </RecContainer>
            )
        });

        return (
            <React.Fragment>
                {RecommendationsToShow.length > 0 &&
                    <RecComponent>
                        <div className='topic'> Recommendations </div>
                        <Tabs defaultActiveKey='users' id='rec-tabs' onSelect={this.handleTabSelect}>
                            <Tab eventKey="users" title="Users">
                                <Slider className='rec-slider' {...settings}> {RecommendationsToShow} </Slider>
                            </Tab>
                            <Tab eventKey="orgs" title="Organizations">
                                <Slider className='rec-slider' {...settings}> {RecommendationsToShow} </Slider>
                            </Tab>
                        </Tabs>

                    </RecComponent>
                }
            </React.Fragment>
        )
    }
}

export default RecommenderCarousel;