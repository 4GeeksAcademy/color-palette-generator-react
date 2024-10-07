import React from "react";

const Hero = ({ details }) => {

    return (<main className="px-3 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        {
            details && <>
                <h1>{details.title}</h1>
                <p className="lead">{details.description}</p>
                <p className="lead">
                    <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">{details.action}</a>
                </p>
            </>
        }
        {
            !details && <>
                <h1>Loading...</h1>
                <button className="btn btn-info">
                    Try Again
                </button>
            </>
        }
    </main>
    )
};


export default Hero;