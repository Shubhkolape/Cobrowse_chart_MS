import React from 'react';
// import ParentComponentTest from '../../Components/Test/ParentComponentTest';
import MyApp from '../../Components/LoginComponents/MyApp';
import WidgetApiProvider from '../../contexts/WidgetApiContext';
import './style.css';

import { AuthProvider } from '../../contexts/AuthContext';

const CobrowseReports = ({ interactionId }) => {
    return (
        <WidgetApiProvider interactionId={interactionId}>
            <div className='cobrowse-reports-widget-container'>
                {/* <ParentComponentTest /> */}
                <AuthProvider>
                    <MyApp />
                </AuthProvider>
            </div>
        </WidgetApiProvider>
    );
};

export default CobrowseReports;
