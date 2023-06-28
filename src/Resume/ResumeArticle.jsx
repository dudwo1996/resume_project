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
            <div style={{ width: '70%', margin: 'auto' }}>
                <h4 style={{ textAlign: 'left', marginBottom: '0' }}>기본 정보</h4>
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
            <div style={{ width: '70%', margin: 'auto' }}>
                <h4 style={{ textAlign: 'left', marginBottom: '0' }}>학력</h4>
            </div>
            <div className="education-div">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                        marginTop: '23px',
                    }}
                >
                    <input className="education-year" type="text" placeholder="YYYY" />
                    <span>.</span>
                    <input className="education-month" type="text" placeholder="MM" />
                    <span style={{ height: '19px', fontSize: '14px' }}>졸업(예정)</span>
                </div>
                <div>
                    <select className="education-select" placeholder="학력 구분">
                        <option>고등학교</option>
                        <option>대학(2,3년)</option>
                        <option>대학교(4년)</option>
                        <option>대학원(석사)</option>
                        <option>대학원(박사)</option>
                    </select>
                    <span style={{ fontSize: '15px' }}> | </span>
                    <input className="school-name" type="text" placeholder="학교명을 입력해주세요." />
                    <div>
                        <input className="Major-name" type="text" placeholder="학과명을 입력해주세요." />
                        <input className="education-score" type="text" placeholder="학점" />
                        <span>/</span>
                        <input className="perfect-score" type="text" placeholder="4.5" />
                    </div>
                </div>
            </div>
            <div style={{ width: '70%', margin: 'auto' }}>
                <h4 style={{ textAlign: 'left', marginBottom: '0' }}>링크</h4>
            </div>
        </div>
    );
};

export default ResumeArticle;
