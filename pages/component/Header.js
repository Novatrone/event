import React from 'react'

export default function Header() {
    return (
        <>
            <header className="header fixed">
                <div className="container">
                    <div className="logo"><a href="index.html"><img src="images/logo.png" alt="Eventox" className="img-responsive" /></a>
                    </div>
                    <div className="navigation clearfix">
                        <nav className="main-nav">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="mega-menu-open">About</a>
                                </li>
                                <li>
                                    <a href="#">Sponsor</a>
                                </li>
                                <li>
                                    <a href="#">Samiti</a>
                                </li>
                            </ul>
                        </nav>
                        <a href="#" className="button">Buy Ticket</a>
                    </div>
                    <div id="shopping-cart" className="header-dropdown">
                        <div className="arrow"></div>
                        <div className="top clearfix">
                            <h6>Your Cart</h6>
                            <a href="#" className="close-dropdown">Close<i className="fa fa-close"></i></a>
                        </div>
                        <div className="body">
                            <div className="item clearfix">
                                <a href="#"><img src="images/cart01.jpg" alt="cart" /></a>
                                <a href="#" className="title">Shop Title in two lines Goes Here</a>
                                <a href="#" className="remove"><i className="fa fa-times-circle"></i></a>
                                <div className="price">$640</div>
                                <input type="number" value="1" />
                            </div>
                            <div className="item clearfix">
                                <a href="#"><img src="images/cart02.jpg" alt="cart" /></a>
                                <a href="#" className="title">Shop Title in two lines Goes Here</a>
                                <a href="#" className="remove"><i className="fa fa-times-circle"></i></a>
                                <div className="price">$640</div>
                                <input type="number" value="1" />
                            </div>
                            <div className="item clearfix">
                                <a href="#"><img src="images/cart03.jpg" alt="cart" /></a>
                                <a href="#" className="title">Shop Title in two lines Goes Here</a>
                                <a href="#" className="remove"><i className="fa fa-times-circle"></i></a>
                                <div className="price">$640</div>
                                <input type="number" value="1" />
                            </div>
                            <div className="totals clearfix">
                                <div className="title">Total:</div>
                                <div className="total">$3840</div>
                            </div>
                            <div className="button-row clearfix">
                                <a href="#" className="button green"><i className="fa fa-arrow-circle-left"></i>Continue Shopping</a>
                                <a href="#" className="button blue right">Proceed to Checkout<i
                                    className="fa fa-shopping-basket"></i></a>
                            </div>
                        </div>
                    </div>
                    <div id="search" className="header-dropdown">
                        <div className="arrow"></div>
                        <div className="top clearfix">
                            <h6>Search</h6>
                            <a href="#" className="close-dropdown">Close<i className="fa fa-close"></i></a>
                        </div>
                        <div className="body">
                            <form className="searchform">
                                <input type="text" placeholder="Search" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div id="features" className="mega-menu">
                        <div className="arrow"></div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="icon orange"><i className="fa fa-bicycle"></i></div>
                                <h6>Some Title Goes Here</h6>
                                <p>Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.</p>
                                <a href="#">Read More</a>
                            </div>
                            <div className="col-sm-3">
                                <div className="icon blue"><i className="fa fa-bookmark-o"></i></div>
                                <h6>Some Title Goes Here</h6>
                                <p>Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.</p>
                                <a href="#">Read More</a>
                            </div>
                            <div className="col-sm-3">
                                <div className="icon green"><i className="fa fa-hand-rock-o"></i></div>
                                <h6>Some Title Goes Here</h6>
                                <p>Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.</p>
                                <a href="#">Read More</a>
                            </div>
                            <div className="col-sm-3">
                                <div className="icon red"><i className="fa fa-paperclip"></i></div>
                                <h6>Some Title Goes Here</h6>
                                <p>Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
