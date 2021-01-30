import React from "react";

const Content = () => {
    return <div className='content'>
        <article className="uou-block-7f blog-post-content">
            <img src="img/b-post-image.jpg" alt=""/>

                <div className="meta">
                    <span className="time-ago">3 days ago</span>
                    <span className="category">Posted in: <a href="#">Design</a></span>
                    <a href="#" className="comments">12 Comments</a>
                </div>

                <h1><a href="#">Perspiciatis Sint Pariatur Velit Corrupti</a></h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque
                    sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque
                    sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac
                    diam.
                    Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
                    Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
                    Phasellus pharetra nulla ac diam.
                    Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
                    Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque
                    sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac
                    diam.
                    Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
                    Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
                </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque
                    sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac
                    diam.
                    Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
                    Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.</p>


                <div className="uou-share-story clearfix">
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="sidebar-title">Share This Story</h5>

                        </div>
                        <div className="col-sm-9 ">
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
                        </div>
                    </div>
                </div>


                <a className="btn btn-primary " href="#">Back To Blog List</a>
        </article>


        <div className="uou-post-comment">
            <aside className="uou-block-14a">
                <h5 className="sidebar-title">Comments(<span>2</span>)</h5>
                <ul>
                    <li>
                        <article className="comment">
                            <img src="img/p-post-1.png" alt=""/>

                                <div>
                                    <header>
                                        <a href="#" className="user">Jessica Walsh -</a>

                                        <span className="time-ago">May 13, 2015(11.25)</span>
                                        <a href="#" className="reply">Reply</a>
                                    </header>

                                    <p>Veniam minus obcaecati, quos facere et quibusdam debitis iure voluptate libero
                                        voluptas dolorem praesentium rerum adipisci ad fuga, odio molestiae. Soluta quos
                                        vel pariatur nemo fugit repellat. nemo fugit repellat</p>
                                </div>
                        </article>
                    </li>


                    <li>
                        <article className="comment">
                            <img src="img/p-post-1.png" alt=""/>

                                <div>
                                    <header>
                                        <a href="#" className="user">Jessica Walsh -</a>

                                        <span className="time-ago">May 13, 2015(11.25)</span>
                                        <a href="#" className="reply">Reply</a>
                                    </header>

                                    <p>Veniam minus obcaecati, quos facere et quibusdam debitis iure voluptate libero
                                        voluptas dolorem praesentium rerum adipisci ad fuga, odio molestiae. Soluta quos
                                        vel pariatur nemo fugit repellat. nemo fugit repellat</p>
                                </div>
                        </article>
                    </li>

                </ul>
            </aside>

            <h4>Join Conversation</h4>

            <div className="uou-post-comment-form">
                <form role="form">
                    <div className="row">
                        <div className="col-sm-4">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="col-sm-4">
                            <input type="email" placeholder="E-mail"/>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" placeholder="Website"/>
                        </div>

                        <div className="col-sm-12">
                            <textarea placeholder="Your comment"></textarea>
                        </div>

                        <div className="col-sm-12">
                            <button className="btn btn-primary">Add Comment</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    </div>
}

export default Content;