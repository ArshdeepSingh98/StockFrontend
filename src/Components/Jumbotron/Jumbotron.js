import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import bgImage from '../../Assets/Jumbotron/jumbotron_bg_image.jpeg';

const Styles = styled.div`
  .jumbo {
    background: url(${bgImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 225px;
    position: relative;
    z-index: -2;
    top: 55px;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"/>
      <Container>
        <h1>Welcome</h1>
        <p>Discuss and share your stock insights</p>
      </Container>
    </Jumbo>
  </Styles>
);