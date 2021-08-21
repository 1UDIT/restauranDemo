import React from "react";
import point from "../Image/pointSave.png"
import Contactform from "./Contactform";
import Footer from "./Footer";

const Contactus = () => {
    return (
        <>
            <div className="container text-center pt-5 textcolorBlue">
                <h2>CONTACT</h2>
            </div>
            <div className="container pt-2">
                <p className="text-center"> <img src={point} alt="point" style={{ width: '114px' }} /></p>
            </div>
            <div className="container text-center pt-3 textcolorBlue">
                <h6>Send us a message and we’ll get back to you as soon as possible. Looking forward to hearing from you.</h6>
            </div>
          <div className="container pt-4">
                <Contactform />
            </div>
            <Footer />


        </>
    )
}
export default Contactus;