//import logo from './logo.svg';
//import './App.css';
import React from "react";

import './css/main-style.css';
import './css/owl.carousel.css';
import './css/style.css';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App = () => {
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
                        <Content />
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default App;
