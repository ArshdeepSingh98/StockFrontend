import React from 'react';
import styled from 'styled-components';
import Like from '../../../Assets/Feed/thumb_up-24px.svg';
import Comment from '../../../Assets/FAB/chat_icon.svg';

const FeedStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px;
    border-radius: 8px;
    color: white;
    box-shadow: 1px 2px 4px #00000091;
    margin: 8px;
    
    .description {
        font-size: 14px;
        background-color: #282828;
        padding: 8px 16px;
        white-space: pre-wrap;
    }
    
    .feed_actions {
        display: flex;
        background: #1e1e1e;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        
        .action {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            
            .action_icon {
                padding: 3px 0 6px 0;
            }
            
            .action_text {
                padding: 6px;
                font-size: 16px;
            }
            
            &: hover {
                background: #3e3e3e;
                cursor: pointer;
            }
        }
    }
`;

const TitleBox = styled.div`
    display: flex;
    background-color: #2b2b2b;
    color: white;
    padding: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    justify-content: space-between;
    align-items: center;
    
    .profile {
        display: flex;
        align-items: center;
        margin: 2px 4px;
            
        .profile_image {
            border-radius: 100%;
            border: 1px solid #222;
            box-shadow: 0px 1px 6px #000000c7;
        }
        
        .profile_name {
            font-size: 18px;
            margin-left: 10px;
            color: #f1f1f1;
        }   
    }
    
    .date_time {
        font-size: 12px;
        color: #d4d4d4;
    }
`;

const ProfileImage = styled.img`
    border-radius: 100%;    
    height: 35px;
    width: 35px;
`;

const ActionImage = styled.img`
    height: 20px;
    filter: invert(${props => props.invert || 0})
`;

const FeedDetails = styled.div`
    display: flex;
    padding: 2px 8px;
    background: #1e1e1e;
        
    .details_item {
        width: 50%;
        font-size: 12px;
        padding: 2px 8px;
    }
`;

export const FeedItem = (props) => {
    const {profile: {name, image}, date, time, description, action_details: {like, comment}} = props.feed

    return (
        <FeedStyle>
            <TitleBox>
                <div className='profile'>
                    <div className='profile_image'><ProfileImage src={image} alt=""/></div>
                    <div className='profile_name'>{name}</div>
                </div>
                <div className='date_time'>{date} at {time}</div>
            </TitleBox>
            <div className='description'>{description}</div>
            <FeedDetails>
                <div align='left' className='details_item'>{like}&nbsp;likes</div>
                <div align='right' className='details_item'>{comment}&nbsp;comments</div>
            </FeedDetails>
            <div className='feed_actions'>
                <div className='action'>
                    <div className='action_icon'><ActionImage invert={0.95} src={Like} alt=""/></div>
                    <div className='action_text'>Like</div>
                </div>
                <div className='action'>
                    <div className='action_icon'><ActionImage invert={0.95} src={Comment} alt=""/></div>
                    <div className='action_text'>Comment</div>
                </div>
            </div>
        </FeedStyle>
    )
};