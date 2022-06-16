import React from 'react';
import Header from './header'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <main>{children}</main>
            </div>
        </React.Fragment>
    );
};

export default Layout;