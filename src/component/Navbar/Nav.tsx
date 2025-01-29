import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import arrow from "@/assets/arrow.svg";
import Image from 'next/image';

export default function Nav({ showBrand = true, showLoginButton = true }) {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        {showBrand && (
                            <a className="navbar-brand" href="/">Eva-DigitalHuman</a>
                        )}
                    </div>
                    <div className="justify-center align-items-center hidden lg:flex ">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active d-flex align-items-center" aria-current="page" href="/">
                                    <span className="me-2">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About_us">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-end">
                        {showLoginButton && (
                            <a href="/login" className="btn custom-btn d-flex align-items-center">
                                <span>Login</span>
                                <Image src={arrow} alt="Arrow icon" width={10} height={10} className="ms-2" /> 
                            </a>
                        )}
                    </div>
                </div>
            </nav>
        
    );
}
