import React from 'react'
import { Container, Button } from 'react-floating-action-button'
import ChatIcon from '../../Assets/FAB/chat_icon.svg';

const Styles = {
    container: {
      bottom: '11px',
      right: '11px'
    },
    button: {
        backgroundColor: '#222',
        color: 'white',
        border: '1px solid #2222225e'
    },
    image: {
        filter: 'invert(100%)',
        position: 'relative',
        bottom: '-2px',
        right: '0',
        zIndex: '2'
    }
};

export const FAB = (props) => {
    return (
        <Container styles={Styles.container}>
            {/*<Link href="#"*/}
            {/*    tooltip="Hi" />*/}
            <Button
                tooltip="Chat"
                rotate={true}
                styles={Styles.button}
                onClick={() => props.handleChat()} >
                <img style={Styles.image} src={ChatIcon} alt=""/>
            </Button>
        </Container>
    )
}