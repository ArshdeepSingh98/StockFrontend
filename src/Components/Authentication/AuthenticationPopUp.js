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
    z-index: 2;
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

const Checkbox = styled.input`
    height: fit-content;
    margin: 3px;
`;

const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 14px;
    font-size: 14px;
    color: #272727;
`;

const Submit = styled.button`
    background-color: #222;
    color: white;
    border-radius: 24px;
    padding: 8px 16px;
    margin: 6px 0 0 0;
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
            name: '',
            email: '',
            remember: false
        };

        autoBind(this);
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleChange(e) {
        const input = e.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({[input.name]:value})
    }

    handleFormSubmit = () => {
        const { name, remember } = this.state;
        localStorage.setItem('remember', remember);
        localStorage.setItem('user', remember ? name : 'Guest');
        this.props.handleShowPopUp(false);
    };

    render() {
        return (
            <div>
                <Background>
                    <PopUp>
                        <Close onClick={() => this.props.handleShowPopUp(false)}>+</Close>
                        <img src={'https://www.gravatar.com/avatar/00000000000000000000000000000' + this.getRandomIntInclusive(0, 999)+ '?d=retro&f=y'} alt=""/>
                        <form action="" onSubmit={this.handleFormSubmit}>
                            <Info type="text" name='name' onChange={this.handleChange} placeholder="Name"/>
                            <Info type="text" name='email' onChange={this.handleChange} placeholder="E-Mail"/>
                            <Label><Checkbox type="checkbox" name='remember' onChange={this.handleChange} checked={this.state.remember}/>Remember Me</Label>
                            <Submit>Submit</Submit>
                        </form>
                    </PopUp>
                </Background>
            </div>
        )
    }
}

export default AuthenticationPopUp;