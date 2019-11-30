import React, {Component} from 'react';
import autoBind from "react-autobind/src/autoBind";
import styled from "styled-components";

const ProfileStyle = styled.div`
    span {
        color: white;
    }
`;

const LoginContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 6px 0;
    
    .tag {
        color: gray;    
    }
    
    .name {
        color: white;
    }
`;


class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: 'Guest'
        };

        autoBind(this);
    }

    componentDidMount() {
        const rememberMe = localStorage.getItem('remember') === 'true';
        const user = rememberMe ? localStorage.getItem('user') : this.state.user;
        this.setState({ user });
    }

    render() {
        return (
            <ProfileStyle>
                <LoginContainer>
                    <div className='tag'>Logged In as : &nbsp;</div><div className='name'>{this.state.user}</div>
                </LoginContainer>
            </ProfileStyle>
        )
    }
}

export default UserProfile;