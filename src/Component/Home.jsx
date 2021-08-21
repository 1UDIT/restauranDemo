import React from "react";
import logo from "../Image/Logo.png";
import HomepageData from "../DataFetch/HomepageData";
import homedata from "../DataFetch/homedata";
import point from "../Image/pointSave.png"
import Footer from "./Footer";



const Home = () => {
    return (
        <>
            <div className="container imgHome">
                <img src={logo} alt="Logo" width="100%" />
            </div>
            <div className="container pt-5">
                <div className="row ">
                    <div className="col-sm-4  textHome">
                        <h3>COMFORTS</h3>
                    </div>
                    <div className="col-sm-4  textHome1">
                        <h3>CLASSICS</h3>
                    </div>
                    <div className="col-sm-4 textHomeMark">
                        <h3>CURIOSITIES</h3>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm MenuImage"> </div>
                    <div className="col-sm-1 pt-4"> </div>
                    <div className="col-sm cornerRound pr-5">
                        <h3 className="text-center pt-4 font-weight-bold">OUR MENUS</h3>
                        <p className="text-justify font-weight-light px-5 pt-5">Our creative, elevated food and beverage program combines satisfying staples with imaginative twists. From boozy brunches and happy hours
                            to family dinners, special occasions and everything in between, The Original has something for everyone.</p>
                        <div className="px-5 pt-5">
                            <button type="submit" className="btn btn-primary font-weight-bold">View Menus</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5 containerColor">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="row pt-4 mx-5">
                                    {
                                        homedata.map((val, index) => {
                                            return <HomepageData key={index}
                                                title={val.title}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5 text-center" style={{ color: '#1C2C59' }}>
                <h5>Drawing inspiration from classic Americana, The Original reinvents the neighborhood eatery to create a timeless fusion of old and new,
                    blending familiar comforts with an inventive, playful modern flair.</h5>
            </div>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm cornerRound pr-5">
                        <h3 className="text-center pt-5 font-weight-bold">HAPPENINGS</h3>
                        <p className="text-justify font-weight-light px-5 pt-5">What's going on at The OG Denver?</p>
                        <div className="px-5 pt-5">
                            <button type="submit" className="btn btn-primary font-weight-bold">View HAPPENINGS</button>
                        </div>
                    </div>
                    <div className="col-sm-1 pt-4 "></div>
                    <div className="col-sm MenuImage2"> </div>

                </div>
            </div>

            {/* Parrallax */}

            <div className="container pt-5">
                <div className="parallax"></div>
            </div>

            {/* FOLLOW US */}

            <div className="container textcolorBlue text-center pt-5">
                <h2>FOLLOW US</h2>
            </div>
            <div className="container textcolorWhite text-center pt-1">
                <h2>@THEOGDENVER</h2>
            </div>

            <div className="container pt-2">
                <p className="text-center"> <img src={point} alt="point" style={{ width: '114px' }} /></p>
            </div>
            {/* Review */}
            <div className="container pt-2 ">
                <div className="row ImageRadius imageHeight"  >
                    <div className="col-sm reviewImg"  >
                    </div>
                    <div className="col-sm reviewImg">
                    </div>
                    <div className="col-sm reviewImg" >
                    </div>
                    <div className="col-sm reviewImg" >
                    </div>
                    <div className="col-sm reviewImg" >
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm reviewImg" >
                    </div>
                    <div className="col-sm reviewImg" >
                    </div>
                    <div className="col-sm reviewImg">
                    </div>
                    <div className="col-sm reviewImg">
                    </div>
                    <div className="col-sm reviewImg">
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}
export default Home;