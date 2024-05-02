import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './MyApp.css';
import Login from './Pages/Login';
import SignUpPage from './Pages/SignUpPage';
import { useAuth } from '../../contexts/AuthContext';
import ParentComponentTest from '../Test/ParentComponentTest';

function MyApp() {
    const { isAuthenticated } = useAuth();

    const PrivateRoute = ({ element }) => {
        return isAuthenticated() ? element : <Navigate to='/login' />;
    };

    return (
        <div className='MyApp'>
            <div className='Main-app'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        {/* <Route path='/signup' element={<SignUpPage />} /> */}
                        {/* <Route path='/' element={<ParentComponentTest />} /> */}
                        <Route
                            path='/'
                            element={<PrivateRoute element={<ParentComponentTest />} />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default MyApp;
