import React from "react";

const Header = (props) => {

    // Parte Logica del component
    const numerito = Math.random() * 8;

    // Parte visual (UI) del componente
    return (<header className="mb-auto col-8 mx-auto">
        <div className="container mx-auto" >
            <h3 className="float-md-start mb-0">{props.appTitle}</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link fw-bold mx-1 py-1 px-0 active text-white" aria-current="page" href="#">Home</a>
                <a className="nav-link fw-bold mx-1 py-1 px-0 text-white" href="#">Features</a>
                <a className="nav-link fw-bold mx-1 py-1 px-0 text-white" href="#">Contact</a>
            </nav>
        </div>
    </header>)
};

export default Header;