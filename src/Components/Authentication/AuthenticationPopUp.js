import React, {Component} from 'react';
import autoBind from "react-autobind/src/autoBind";
import styled from 'styled-components';


const Background = styled.div` 
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PopUp = styled.div`
    width: 500px;
    height: fit-content;
    background-color: white;
    border-radius: 4px;
    text-align: center;
    padding: 20px;
    position: relative;
`;

const Info = styled.input`
    width: 50%;
    display: block;
    margin: 15px auto;
    height: 24px;
`;

const Submit = styled.button`
    background-color: #222;
    color: white;
    border-radius: 24px;
    padding: 8px 16px;
`;

const Close = styled.div`
    position: absolute;
    top: -8px;
    right: 10px;
    font-size: 42px;
    transform: rotate(45deg);
    cursor: pointer;
`;

class AuthenticationPopUp extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        autoBind(this);
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <div>
                <Background>
                    <PopUp>
                        <Close onClick={() => this.props.handleShowPopUp(false)}>+</Close>
                        <img src={'https://www.gravatar.com/avatar/00000000000000000000000000000' + this.getRandomIntInclusive(0, 999)+ '?d=retro&f=y'} alt=""/>
                        <form action="">
                            <Info type="text" placeholder="Name"/>
                            <Info type="text" placeholder="E-Mail"/>
                            <Submit href="">Submit</Submit>
                        </form>
                    </PopUp>
                </Background>
            </div>
        )
    }
}

export default AuthenticationPopUp;