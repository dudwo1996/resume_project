// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import addUserIcon from '../image/add-user.png';
import { useIndexedDB } from 'react-indexed-db';

const Signup = () => {
    const { add } = useIndexedDB('member');
    const navigate = useNavigate();
    const [nick, setNick] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [veriPassword, setVeriPassword] = useState('');

    const signup = () => {
        add({ nickname: nick, id: id, password: password }).then(
            () => {
                navigate('/signin');
                // alert('회원가입이 완료되었습니다. 로그인 후 이용해보세요.');
            },
            (err) => {
                console.log(err);
            }
        );
    };

    return (
        <form className="signup-container" onSubmit={signup}>
            <div className="signup-logo">
                <img className="" src={addUserIcon} />
            </div>
            <h1 style={{ textAlign: 'center' }}>회원가입</h1>
            <div className="nickname-div">
                <span style={{ marginBottom: '5px' }}>닉네임</span>
                <input
                    type="text"
                    placeholder="사용할 닉네임을 입력하세요."
                    onChange={(e) => setNick(e.target.value)}
                />
            </div>
            <div className="id-div">
                <span>아이디</span>
                <input type="text" placeholder="사용할 아이디를 입력하세요." onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="password-div">
                <span>비밀번호</span>
                <input
                    type="password"
                    placeholder="사용할 비밀번호를 입력하세요."
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="verifyPassword-div">
                <span>비밀번호 확인</span>
                <input
                    type="password"
                    placeholder="다시한번 비밀번호를 입력하세요."
                    onChange={(e) => setVeriPassword(e.target.value)}
                />
            </div>
            <div className="signup-button-div">
                <button type="submit">회원가입 완료</button>
            </div>
            <div className="signin-button">
                <Link className="signin-link" to="/signin">
                    로그인 페이지로 이동
                </Link>
            </div>
        </form>
    );
};

export default Signup;
