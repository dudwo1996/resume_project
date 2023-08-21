// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css';
import { useEffect } from 'react';
import NavBar from './NavBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useIndexedDB } from 'react-indexed-db';
import { useState } from 'react';
// import arrowBottomIcon from '../image/arrow-bottom.png';

const Home = () => {
    const navigate = useNavigate();
    const userId = useCookies(['id'])[0].id;
    const { getByIndex } = useIndexedDB('member');
    const [memberInfo, setMemberInfo] = useState([]);

    useEffect(() => {
        navigate('/home/appbody');
        getByIndex('id', userId).then((data) => {
            setMemberInfo(data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="home-container">
            <NavBar memberInfo={memberInfo} />
            <div
                style={{
                    width: '100%',
                    minHeight: '70%',
                }}
            >
                <Outlet context={{ memberInfo }} />
            </div>
            <footer className="footer">
                <div className="footer-wrap">
                    <div>wo_123@naver.com</div>
                    <div>https://github.com/dudwo1996</div>
                    <div style={{ marginBottom: '8px' }}>010-4283-7204</div>
                    <div style={{ fontSize: '0.8rem' }}>copyrightⓒResumeProject. All Rights Reserved.</div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
