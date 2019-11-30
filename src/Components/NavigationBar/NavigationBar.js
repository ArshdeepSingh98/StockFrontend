import React from "react";
import styled from 'styled-components';
import {Nav, Navbar} from 'react-bootstrap';
import searchIcon from '../../Assets/Navbar/search-24px.svg';

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

export const Navigationbar = () => (
    <Styles>
        <Navbar fixed='top' bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand href='/'>Stock Application</Navbar.Brand>
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
                    <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/profile'>Profile</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);

