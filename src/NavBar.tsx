import React from "react";

export function NavBar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-dark border-bottom box-shadow mb-3 px-3">
                <a className="navbar-brand text-white" href="/">(Insert favicon here)</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <button className="nav-link text-white">Link 1</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-white">Link 1</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-white">Link 1</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
