import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './MyApp.css';
import Login from './Pages/Login';
import SignUpPage from './Pages/SignUpPage';

function MyApp() {
    return (
        <div className='MyApp'>
            <div className='Main-app'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/signUp' element={<SignUpPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default MyApp;
