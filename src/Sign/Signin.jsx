// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Signin.css';
import resumeLogo from '../image/curriculum.png';
import { Link, useNavigate } from 'react-router-dom';
import { useIndexedDB } from 'react-indexed-db';
import { useCookies } from 'react-cookie';

const Signin = () => {
    const { getAll } = useIndexedDB('member');
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookies] = useCookies(['id']);
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [db, setDb] = useState();
    useEffect(() => {
        window.indexedDB.open('MemberDB', 1);
        getAll().then((dbData) => {
            setDb(dbData);
        });
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

    return (
        <div className="signin-container">
            <div className="signin-logo">
                <Link to="/intro">
                    <img src={resumeLogo} />
                </Link>
            </div>
            <form className="signin-format" onSubmit={signin}>
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
    );
};

export default Signin;
