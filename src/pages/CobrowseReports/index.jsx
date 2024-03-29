import React from 'react';
// import ParentComponentTest from '../../Components/Test/ParentComponentTest';
import MyApp from '../../Components/LoginComponents/MyApp';
import WidgetApiProvider from '../../contexts/WidgetApiContext';
import './style.css';

const CobrowseReports = ({ interactionId }) => {
    return (
        <WidgetApiProvider interactionId={interactionId}>
            <div className='cobrowse-reports-widget-container'>
                {/* <ParentComponentTest /> */}
                <MyApp/>
            </div>
        </WidgetApiProvider>
    );
};

export default CobrowseReports;
