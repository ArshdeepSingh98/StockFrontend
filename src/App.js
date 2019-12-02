import React, {Component} from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StockHome from './Components/StockHome/StockHome';
import About from './Components/About/About';
import {NoMatch} from "./Components/NoMatch/NoMatch";
import {Layout} from "./Layouts/Layout";
import {Navigationbar} from "./Components/NavigationBar/NavigationBar";
import {Jumbotron} from "./Components/Jumbotron/Jumbotron";
import autoBind from "react-autobind/src/autoBind";
import {FAB} from "./Components/FloatingButton/FAB";
import ChatMini from './Components/Chat/ChatMini/ChatMini';
import UserProfile from "./Components/Profile/UserProfile";
import AuthenticationPopUp from "./Components/Authentication/AuthenticationPopUp";
import {News} from "./Components/News/News";
import RecommenderCarousel from "./Components/Recommender/RecommenderCarousel/RecommenderCarousel";

class App extends Component {
    constructor() {
        super();

        this.state = {
            showChat: false,
            showPopUp: localStorage.getItem('popupShown') ? (localStorage.getItem('popupShown') !== 'true') : true
        };

        autoBind(this);
    }

    handleChatMini() {
        this.setState({ showChat: !this.state.showChat })
    }

    handleShowPopUp(popup) {
        if (!popup) {
            localStorage.setItem('popupShown', 'true');
        }
        this.setState({showPopUp: popup })
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
          <React.Fragment>
            <Jumbotron />
            <Router>
              <Navigationbar />
              <Layout>
                <Switch>
                  <Route exact path='/' render={() => <StockHome/>} />
                  <Route path='/about' render={() => <About/>} />
                  <Route path='/profile' render={() => <UserProfile />} />
                  <Route component={NoMatch} />
                </Switch>
              </Layout>
            </Router>
            {this.state.showChat ? <ChatMini showChat={this.state.showChat} handleClose={this.handleChatMini}/> : null}
            {this.state.showPopUp ? <AuthenticationPopUp handleShowPopUp={this.handleShowPopUp}/> : null}
            <News/>
            <RecommenderCarousel/>
            <FAB handleChat={this.handleChatMini}/>
          </React.Fragment>
        );
    }
}

export default App;
