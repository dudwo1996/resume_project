// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './AppBody.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import homeImage from '../image/home_image1.jpg';

const AppBody = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [cookies, removeCookie] = useCookies(['id']);

    const toWriteResume = () => {
        navigate('/home/writeresume');
    };

    const toMyResume = () => {
        navigate('/home/myresume');
    };

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

    useEffect(() => {
        scrollTo(0, 0);
        window.addEventListener('popstate', handleEvent);
        return () => {
            window.removeEventListener('popstate', handleEvent);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="AppBody-container">
            <section className="appbody-top-section">
                <div>
                    <div className="appbody-text-box">
                        <div className="appbody-text">이력서를 작성하고 다운로드 해보세요.</div>
                        <div className="appbody-text2">Write and download your resume.</div>
                    </div>
                    <div className="button-container">
                        <button className="add-resume-btn" onClick={toWriteResume}>
                            <span className="write-resume-text">이력서 작성</span>
                        </button>
                        <button className="my-resume-btn" onClick={toMyResume}>
                            <span className="my-resume-text">내 이력서</span>
                        </button>
                    </div>
                </div>
                <img src={homeImage} style={{ width: '35%', height: '80%' }} />
            </section>
        </div>
    );
};
export default AppBody;
