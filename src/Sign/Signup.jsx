// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import addUserIcon from '../image/add-user.png';
import { useIndexedDB } from 'react-indexed-db';
import CheckIcon from '../image/check.png';

const Signup = () => {
    const { add } = useIndexedDB('member');
    const navigate = useNavigate();
    const [nick, setNick] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [veriPassword, setVeriPassword] = useState('');
    const { getAll } = useIndexedDB('member');
    const [db, setDb] = useState();
    const [isNick, setIsNick] = useState(false);
    const [isId, setIsId] = useState(false);

    useEffect(() => {
        getAll().then((dbData) => {
            setDb(dbData);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    const nickConfirm = () => {
        const verifyNick = db.filter((db) => db.nickname === nick);
        if (verifyNick.length === 0) {
            // alert('사용가능한 아이디입니다.');
            if (confirm('사용가능한 닉네임입니다. 사용하시겠습니까?')) {
                setIsNick(true);
            } else {
                setIsNick(false);
            }
        } else {
            alert('이미 사용중인 닉네임입니다.');
        }
    };
    const idConfirm = () => {
        const verifyId = db.filter((db) => db.id === id);
        if (verifyId.length === 0) {
            // alert('사용가능한 아이디입니다.');
            if (confirm('사용가능한 아이디입니다. 사용하시겠습니까?')) {
                setIsId(true);
            } else {
                setIsId(false);
            }
        } else {
            alert('이미 사용중인 아이디입니다.');
        }
    };

    return (
        <form className="signup-container" onSubmit={signup}>
            <div className="signup-logo">
                <img className="" src={addUserIcon} />
            </div>
            <h1 style={{ textAlign: 'center' }}>회원가입</h1>
            <div className="nickname-div">
                <span style={{ marginBottom: '5px' }}>닉네임</span>
                <div className="nickname-input-button">
                    <input
                        type="text"
                        placeholder="사용할 닉네임을 입력하세요."
                        onChange={(e) => setNick(e.target.value)}
                        style={isNick ? { backgroundColor: 'lightGrey', width: '300px' } : { width: '300px' }}
                        value={nick}
                        readOnly={isNick ? true : false}
                    />
                    <button
                        type="button"
                        disabled={isNick ? true : false}
                        onClick={nickConfirm}
                        style={isNick ? { boxShadow: 'none' } : {}}
                    >
                        {isNick ? <img src={CheckIcon} /> : '중복확인'}
                    </button>
                </div>
            </div>
            <div className="id-div">
                <span>아이디</span>
                <div className="id-input-button">
                    <input
                        type="text"
                        placeholder="사용할 아이디를 입력하세요."
                        onChange={(e) => setId(e.target.value)}
                        style={isId ? { backgroundColor: 'lightGrey', width: '300px' } : { width: '300px' }}
                        value={id}
                        readOnly={isId ? true : false}
                    />

                    <button
                        type="button"
                        onClick={idConfirm}
                        disabled={isId ? true : false}
                        style={isId ? { boxShadow: 'none' } : {}}
                    >
                        {isId ? <img src={CheckIcon} /> : '중복확인'}
                    </button>
                </div>
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
