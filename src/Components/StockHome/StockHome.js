import React, {Component} from 'react';
import autoBind from "react-autobind/src/autoBind";
import styled from 'styled-components';
import {FeedItem} from "../Feed/FeedItem/FeedItem";
import FeedMock from '../../MockData/FeedMock';

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 4px 20px 4px;
    color: #e0e0e0;
    
    h2 {
        margin-left: 8px;
    }
`;

class StockHome extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        autoBind(this);
    }

    componentDidMount() {
    }

    render() {

        return (
            <HomeStyle>
                <h2>Feed</h2>
                {FeedMock.feedList.map(feed => {
                        return <FeedItem key={feed.id} feed={feed}/>
                    })
                }
            </HomeStyle>
        )
    }
}

export default StockHome;