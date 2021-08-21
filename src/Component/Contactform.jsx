import React from "react";


const Contactform = () => {
    return (
        <>
            <div className="container pt-4 ContactForm">
                <form action="">
                    <div>
                        <label htmlFor="Fullname">Fullname:</label>
                        <input type="Text" name="Fullname" id="Fullname" />
                    </div>
                    <div>
                        <label htmlFor="EmailId">Email-Id:</label>
                        <input type="Text" name="EmailId" id="EmailId" />
                    </div>
                    <div>
                        <label htmlFor="PhoneNo">Phone No.:</label>
                        <input type="Text" name="PhoneNo" id="PhoneNo" />
                    </div>
                    <div>
                        <label htmlFor="Message">Your Message:</label>
                        <textarea type="Text" name="Message" id="Message" />
                    </div>
                    <div className="buttonCenter ">
                        <input type="submit" value="Submit" className="btn btn-outline-primary" ></input>
                    </div>
                </form>
            </div>
        </>
    )
};
export default Contactform;