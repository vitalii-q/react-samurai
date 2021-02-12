//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom"; // пакет роутеров

import './css/main-style.css';
import './css/owl.carousel.css';
import './css/style.css';
import './css/style_custom.css';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Posts from "./components/Posts/Posts";
import PostPage from "./components/Post/Post";
import Dialogs from "./components/Dialogs/Dialogs";
import {updateNewPostText} from "./redux/state";

const App = (props) => {
  return (
    <div className="app-wrapper">
        <Header />
        <div className="blog-content pt60">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        {/*<Route path='/blog' component={PostPage} />*/}
                        {/*<Posts />*/}

                        <Route path='/profile' render={ () => <Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />
                        } />
                        <Route path='/friends' render={ () => <Friends state={props.state.friendsPage} />} />
                        <Route path='/messages' render={ () => <Dialogs
                            state={props.state.messagesPage}
                            addMessage={props.addMessage}
                            updateNewMessageText={props.updateNewMessageText}
                        />} />
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default App;
