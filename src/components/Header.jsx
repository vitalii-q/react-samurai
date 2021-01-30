import React from "react";

const Header = () => {
    return <div>
        <div class="toolbar">
            <div class="uou-block-1a blog">
                <div class="container">
                    <div className="search"><a href="#" className="toggle fa fa-search"></a>
                        <form action="#">
                            <input type="text" className="search-input" placeholder="Search ..."/>
                                <input type="submit" value=""/>
                        </form>
                    </div>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                    </ul>
                    <ul class="authentication">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                    <div class="language">
                        <a href="#" className="toggle">
                            <img src="images/flags/32/US.png" alt=""/> ENG
                        </a>

                        <ul>
                            <li><a href="#"><img src="images/flags/32/PT.png" alt=""/> PT</a></li>
                            <li><a href="#"><img src="images/flags/32/FR.png" alt=""/> FR</a></li>
                            <li><a href="#"><img src="images/flags/32/ES.png" alt=""/> ES</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="box-shadow-for-ui">
            <div class="uou-block-2b">
                <div class="container">
                    <a href="#" class="logo">
                        <img src="images/logo.png" alt=""/>
                    </a>
                    <a href="#" class="mobile-sidebar-button mobile-sidebar-toggle"><span></span></a>
                    <nav class="nav">
                        <ul class="sf-menu">
                            <li><a href="index.html"><i class="fa  fa-home"></i></a></li>
                            <li> <a href="listing-filter.html">Professionals</a> </li>
                            <li> <a href="index.html">Pages</a>
                                <ul>
                                    <li><a href="profile_company.html">Profile Company</a></li>
                                    <li><a href="profile_company-no-tabs.html">Profile Company No Tabs</a></li>
                                    <li><a href="user-dashboard(connections)(hotkeys-disabled).html">User Dashboard 1</a></li>
                                    <li><a href="user-dashboard(connections)(hotkeys-enabled).html">User Dashboard 2</a></li>
                                    <li><a href="user-dashboard(followers).html">User Dashboard 3</a></li>
                                    <li><a href="user-dashboard(following).html">User Dashboard 4</a></li>
                                    <li><a href="blog-post.html">Blog Post</a></li>
                                </ul>
                            </li>
                            <li> <a href="user-profile(layout-1).html">User Profile</a></li>
                            <li class="active"><a href="blog.html">Blog</a></li>
                            <li><a href="gui-kit.html">GUI KIT</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>


        {/*SUB Banner*/}
        <div class="profile-bnr sub-bnr user-profile-bnr">
            <div class="position-center-center">
                <div class="container">
                    <h2>Our Blog</h2>
                </div>
            </div>
        </div>
    </div>
}

export default Header;