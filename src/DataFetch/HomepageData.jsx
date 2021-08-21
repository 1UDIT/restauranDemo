import React from "react";

const HomepageData = (props) => {
    return (
        <>
            <>
            <div className="card polycorner" style={{width:'18rem'}}>                
                <div className="card-body">
                    <h5 className="card-title">{ props.title}</h5>
                   
                </div>
            </div>
        </>
        </>
    )
};

export default HomepageData;