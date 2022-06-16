import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>  {
    return(
        <React.Fragment>
            <header>   
                <h1>Ticket Shop</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/ticket_types">Ticket Types</Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default Header;
