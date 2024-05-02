import React, { createContext, useState, useContext } from 'react';
import config from '../Config/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (userData) => {
        console.log('userData==> ', userData);
        try {
            const payload = {
                email: userData.email,
                password: userData.password,
            };

            let loginResponse = await fetch(config.cobrowseUserLoginUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            let user = await loginResponse.json();
            if (loginResponse.status === 200) {
                console.log('login success', user);

                setUser(user);
                localStorage.setItem('authUser', JSON.stringify(userData));
                return true;
            } else {
                console.log('loginResponse===> ', user);
                return false;
            }
        } catch (error) {
            console.log('Login Error ===> ', error);
            // throw new Error(error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authUser');
    };

    const isAuthenticated = () => {
        const storedUser = localStorage.getItem('authUser');
        console.log('storedUser------> ',storedUser);
        if (storedUser) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
