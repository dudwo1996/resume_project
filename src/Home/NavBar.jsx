// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NavBar.css';
import { useCookies } from 'react-cookie';
import { useIndexedDB } from 'react-indexed-db';
import { useEffect } from 'react';
import { useState } from 'react';
import userIcon from '../image/user.png';

const NavBar = () => {
    const userId = useCookies(['id'])[0].id;
    const { getByIndex } = useIndexedDB('member');
    const [memberInfo, setMemberInfo] = useState([]);
    useEffect(() => {
        getByIndex('id', userId).then((data) => {
            setMemberInfo(data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <nav className="nav-bar-container">
            <div className="userInfo-div">
                <img src={userIcon} style={{ marginRight: '5px' }} />
                <div value={memberInfo.nickname}>{memberInfo.nickname}</div>
            </div>
        </nav>
    );
};

export default NavBar;
