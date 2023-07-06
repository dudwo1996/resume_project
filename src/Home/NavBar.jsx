/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NavBar.css';
import { useState } from 'react';
import userIcon from '../image/user.png';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
    const navigate = useNavigate();
    const [isDropDown, setIsDropDown] = useState(false);
    const { memberInfo } = props;
    return (
        <nav className="nav-bar-container">
            <div
                style={{ color: '#ffffff', marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => navigate('/home/appbody')}
            >
                CYJ's Resume Project
            </div>
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
