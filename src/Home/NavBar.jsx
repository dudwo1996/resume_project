/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './NavBar.css';
import userIcon from '../image/user.png';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';

const NavBar = (props) => {
    const navigate = useNavigate();
    const [isList, setIsList] = useState(false);
    const { memberInfo } = props;
    // eslint-disable-next-line no-unused-vars
    const [cookies, removeCookie] = useCookies(['id']);
    const { getAll, deleteRecord } = useIndexedDB('member');

    const logOut = async () => {
        await removeCookie('id', { Path2D: '/' });
        await navigate('/signin');
    };
    const handleEvent = () => {
        history.pushState(null, '', location.href);
        if (confirm('로그아웃 하시겠습니까?')) {
            logOut();
        } else {
            return;
        }
    };

    const membershipWithdrawal = async () => {
        const getAllRes = await getAll();
        const memberDetail = getAllRes.filter((x) => x.id === cookies.id)[0];
        const idCheck = prompt('정말 탈퇴하시려면 당신의 아이디를 입력하세요.');
        if (idCheck === memberDetail.id) {
            const pwCheck = prompt('비밀번호를 입력하세요.');
            if (pwCheck === memberDetail.password) {
                await deleteRecord(memberDetail.id);
                await alert('회원탈퇴 처리되었습니다.');
                navigate('/');
            }
        } else {
            alert('일치하지 않습니다.');
            return;
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.userInfo-div') === null) {
                setIsList(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <nav className="nav-bar-container">
            <div
                style={{ color: '#ffffff', marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => navigate('/home/appbody')}
            >
                CYJ's Resume Project
            </div>
            <div className="userInfo-div" onClick={() => setIsList(!isList)}>
                <div style={{ display: 'flex' }}>
                    <img src={userIcon} />
                    <button className="unser-info-button">{memberInfo.nickname}</button>
                </div>
                {isList ? (
                    <>
                        <button className="menu-list" onClick={handleEvent}>
                            로그아웃
                        </button>
                        <button className="menu-list2" onClick={membershipWithdrawal}>
                            회원탈퇴
                        </button>
                    </>
                ) : null}
            </div>
        </nav>
    );
};

export default NavBar;
