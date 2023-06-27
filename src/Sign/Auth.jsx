import { Outlet } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Auth = () => {
    return (
        <>
            <div className="AuthContainer">
                <Outlet />
            </div>
        </>
    );
};
