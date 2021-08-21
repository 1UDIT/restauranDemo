import React from "react";
import Footer from "./Footer";

const Aboutus = () => {
    return (
        <>
            <div className="container pt-5">
                <h2 className="text-center">About-Us</h2>

                <div className="row">
                    <div className="col-sm  MenuImage">
                    </div>
                    <div className="col-sm-1 pt-4"> </div>
                    <div className="col-sm cornerRound pr-5">
                         <p className="text-justify font-weight-light px-5 pt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Aboutus;