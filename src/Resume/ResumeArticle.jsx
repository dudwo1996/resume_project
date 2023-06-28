// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ResumeArticle.css';
import phoneIcon from '../image/phone-call.png';
import birthdayIcon from '../image/birthday-cake.png';
import emailIcon from '../image/email.png';
const ResumeArticle = () => {
    return (
        <div className="article-container">
            <div className="resume-title-div">
                <input className="resume-title-box" placeholder="자기만의 이력서 제목을 입력해주세요." />
            </div>
            <div className="resume-profile-div">
                <div className="profile-image-div">
                    <input id="profile-image-input" className="profile-image" type="file" />
                    <label className="image-input-label" htmlFor="profile-image-input">
                        사진
                    </label>
                </div>
                <div className="user-info-div">
                    <div className="user-name-div">
                        <input type="text" className="user-name" placeholder="이름" />
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <img src={birthdayIcon} />
                            <input type="text" className="user-birth" placeholder="생년월일" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <img src={phoneIcon} />
                            <input type="text" pattern="[0-9]+" className="user-phone-num" placeholder="연락처" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <img src={emailIcon} />
                            <input type="text" pattern="[0-9]+" className="user-email" placeholder="이메일" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeArticle;
