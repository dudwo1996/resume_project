// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Signin.css';
import resumeLogo from '../image/curriculum.png';
import { Link, useNavigate } from 'react-router-dom';
import { useIndexedDB } from 'react-indexed-db';
import { useCookies } from 'react-cookie';
import arrowBottomIcon from '../image/arrow-bottom.png';

const Signin = () => {
    const { getAll } = useIndexedDB('member');
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookies, removeCookie] = useCookies(['id']);
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [db, setDb] = useState();
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        getAll().then((dbData) => {
            setDb(dbData);
        });
        if (cookies) {
            removeCookie('id');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signin = (e) => {
        e.preventDefault();
        const verifyId = db.filter((x) => x.id === id);
        if (verifyId.length === 0) {
            alert('존재하지 않는 아이디입니다.');
        } else if (db.filter((x) => x.id === id)[0].password !== password) {
            alert('비밀번호가 일치하지 않습니다.');
        } else {
            setCookies('id', id);
            navigate('/home');
        }
    };

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        setScroll(value);
        console.log(scroll);
    });
    const style = scroll > 250 ? { opacity: '1', transition: '2s' } : { opacity: '0', transition: '1s' };

    return (
        <div className="signin-container">
            <section>
                <div className="signin-title">Resume Project</div>
                <div className="signin-desc">
                    이 프로젝트는 이력서를 작성하고 PC로 다운로드 할 수 있는 기능을 구현한 프로젝트입니다.
                </div>
                <div className="scroll-text">
                    <img src={arrowBottomIcon} />
                    <div>밑으로 스크롤하세요.</div>
                </div>
            </section>
            <div className="signin-box">
                <div className="signin-logo" style={style}>
                    <Link to="/intro">
                        <img src={resumeLogo} />
                    </Link>
                </div>
                <form style={style} className="signin-format" onSubmit={signin}>
                    <h1>로그인</h1>
                    <div className="signin-input-wrap">
                        <div className="id-input">
                            <input
                                className="signin-input"
                                type="text"
                                placeholder="아이디를 입력해주세요."
                                onChange={(e) => setId(e.target.value)}
                            />
                        </div>
                        <div className="password-input">
                            <input
                                className="signin-input"
                                type="password"
                                placeholder="패스워드를 입력해주세요."
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="signin-button">
                        <button className="signin-button" type="submit">
                            로그인
                        </button>
                    </div>
                    <div className="signup-button">
                        <Link className="signup-link" to="/signup">
                            회원가입
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;
