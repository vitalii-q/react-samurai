import React from "react";

const Sidebar = () => {
    return <div>
        <div className="uou-sidebar">
            <div className="search-widget">
                <form className="search-form-widget" action="#">
                    <input type="text" className="search-input" placeholder="Search ..."/>
                    <input type="submit" value=""/>
                </form>
            </div>

            <h5 className="sidebar-title">Categories</h5>

            <div className="list-widget">
                <ul>
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Mulitmedia</a></li>
                    <li><a href="#">Offtopic</a></li>

                </ul>
            </div>


            <h5 className="sidebar-title">About Us</h5>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed,
                lacinia in, mi.</p>


            <h5 className="sidebar-title">Connect With Us</h5>

            <div className="social-widget">
                <div className="uou-block-4b">

                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>

                </div>
            </div>

            <h5 className="sidebar-title">Popular Posts</h5>

            <div className="latest-post-widget">
                <div className="post-single">
                    <img src="img/p-post-1.png" alt=""/>
                        <p className="meta">January 12, 2015</p>
                        <p className="meta">Design</p>
                        <h6 className="post-title"><a href="#">Pariatur Vellit Corrupti Goes Into 2 Lines</a></h6>

                </div>

                <div className="post-single">
                    <img src="img/p-post-2.png" alt=""/>
                        <p className="meta">January 12, 2015</p>
                        <p className="meta">Design</p>
                        <h6 className="post-title">
                            <a href="#">Pariatur Vellit Corrupti Goes Into 2 Lines</a>
                        </h6>

                </div>

                <div className="post-single">
                    <img src="img/p-post-3.png" alt=""/>
                        <p className="meta">January 12, 2015</p>
                        <p className="meta">Design</p>
                        <h6 className="post-title">
                            <a href="#">Pariatur Vellit Corrupti Goes Into 2 Lines</a>
                        </h6>

                </div>
            </div>


            <h5 className="sidebar-title">Tag Cloud</h5>

            <div className="widget-tag">
                <div className="tag-cloud">
                    <a className="btn btn-primary" href="#">User Experience</a>
                    <a className="btn btn-primary" href="#">HTML 5</a>
                    <a className="btn btn-primary" href="#">Css 3</a>
                    <a className="btn btn-primary" href="#">web design</a>
                    <a className="btn btn-primary" href="#">social media</a>
                    <a className="btn btn-primary" href="#">web development</a>
                    <a className="btn btn-primary" href="#">print design</a>
                    <a className="btn btn-primary" href="#">e-commerce</a>
                    <a className="btn btn-primary" href="#">java script</a>
                </div>

            </div>

            <h5 className="sidebar-title">Archive</h5>

            <div className="list-widget">
                <ul>
                    <li><a href="#">May 2015</a></li>
                    <li><a href="#">April 2015</a></li>
                    <li><a href="#">July 2015</a></li>
                    <li><a href="#">Frbruary 2015</a></li>
                    <li><a href="#">January 2015</a></li>

                </ul>
            </div>


        </div>
    </div>
}

export default Sidebar;