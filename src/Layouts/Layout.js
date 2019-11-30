import React from "react";
import { Container } from 'react-bootstrap';
import "./Layout.css";


export const Layout = (props) => (
    <Container className='layout-container'>
        {props.children}
    </Container>
)

