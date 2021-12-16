import React from 'react';

import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import TableMovies from './TableMovies';
import Footer from './Footer';

export default function ContentWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <TableMovies />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}