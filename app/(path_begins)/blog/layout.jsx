import React, { Fragment } from 'react';

export default function RootLayout({ children }) {
    return (
        <Fragment>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </Fragment>
    );
}
