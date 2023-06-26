// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../Loding/Loading';
import MenuBar from './MenuBar';
import NavBar from './NavBar';
import AppBody from './AppBody';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <div className="home-container">
                <NavBar />
                <MenuBar />
                <AppBody />
            </div>
        );
    }
};

export default Home;
