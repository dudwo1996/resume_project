/* eslint-disable react/no-unescaped-entities */
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
    const [isDropDown, setIsDropDown] = useState(false);
    useEffect(() => {
        getByIndex('id', userId).then((data) => {
            setMemberInfo(data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        console.log(isDropDown);
    }, [isDropDown]);
    return (
        <nav className="nav-bar-container">
            <div style={{ color: '#ffffff', marginLeft: '10px' }}>CYJ's Resume Project</div>
            <div className="userInfo-div">
                <img src={userIcon} style={{ marginRight: '5px' }} />
                <div className="user-nick" onClick={() => setIsDropDown(!isDropDown)}>
                    {memberInfo.nickname}
                </div>
                {/* <div className="dropdown" style={isDropDown ? { display: 'block' } : { display: 'none' }}>
                    <div className="dropdown-item">로그아웃</div>
                </div> */}
            </div>
        </nav>
    );
};

export default NavBar;
