import React from "react";
import styled, {keyframes} from 'styled-components';
import {Nav, Navbar} from 'react-bootstrap';
import searchIcon from '../../Assets/Navbar/search-24px.svg';
import {Link} from "react-router-dom";
import Logo from '../../Assets/Navbar/trending_up-24px.svg';

const Styles = styled.div`
    .navbar {
        background-color: #222 !important;
    }
  
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        
        &:hover {
            color: white;
        }   
    }
    
    .search-icon {
        filter: invert(1);
    }
`;

const LinkStyles = styled.div`
    display: flex;
    
    .nav-item {
        margin: 7px;
    }
    
    a {
        text-decoration: none;
        
        &:hover {
            text-decoration: none;
        }
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const NavIcon = styled.img`
    filter: invert(1);
    margin: 0 8px 0 0;
    animation: ${rotate} 4s linear infinite;
`;

export const Navigationbar = () => (
    <Styles>
        <Navbar fixed='top' bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand href='/'>
                <NavIcon src={Logo} alt='' />
                Stock Application
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <form className="form-inline" action="/action_page.php">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" name="search"/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <img className="glyphicon glyphicon-search search-icon" src={searchIcon} alt=""/>
                                </button>
                            </div>
                        </div>
                    </form>
                    <LinkStyles>
                        <Nav.Item><Link to='/'>Home</Link></Nav.Item>
                        <Nav.Item><Link to='/profile'>Profile</Link></Nav.Item>
                        <Nav.Item><Link to='/about'>About</Link></Nav.Item>
                    </LinkStyles>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);

