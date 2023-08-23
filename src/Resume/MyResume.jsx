// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './MyResume.css';
import { useIndexedDB } from 'react-indexed-db';
import { useCookies } from 'react-cookie';
import resumeIcon from '../image/myresumeimage.png';
import deleteIcon from '../image/delete.png';
import eyeIcon from '../image/eye.png';
import { useNavigate } from 'react-router-dom';

const MyResume = () => {
    const navigate = useNavigate();
    const userId = useCookies(['id'])[0].id;
    const { getByIndex } = useIndexedDB('resume');
    const [resumeList, setResumeList] = useState([]);
    const toWriteResume = () => {
        navigate('/home/writeresume');
    };

    const toResumeDetail = (resumeData) => {
        navigate('/home/myresume/myresumedetail', { state: resumeData });
    };

    useEffect(() => {
        getByIndex('id', userId).then((data) => {
            setResumeList(data.resumeData);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="myResume-container" style={{ height: '100%' }}>
            <span style={{ fontSize: '30px', fontWeight: '800' }}>나의 이력서</span>
            {resumeList.length === 0 ? (
                <div onClick={() => console.log(resumeList)} className="empty-text-box">
                    이력서함이 비어있습니다.
                </div>
            ) : (
                <>
                    <div className="my-resume-container">
                        {resumeList.map((resume, idx) => {
                            return (
                                <ul title={resume.resumeTitle} className="mapping-resume" key={idx}>
                                    <li>
                                        <div>
                                            <img
                                                src={eyeIcon}
                                                className="eye-icon"
                                                onClick={() => toResumeDetail(resume)}
                                            />
                                            <img src={deleteIcon} className="delete-icon" />
                                            <img
                                                src={resumeIcon}
                                                // className="resume-icon"
                                                style={{ marginBottom: '5px', width: '80px' }}
                                            />
                                            <div className="mapping-resume-title">
                                                {resume.resumeTitle === '' ? '제목없음' : resume.resumeTitle}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            );
                        })}
                    </div>
                </>
            )}
            <div className="my-resume-btn-wrap">
                <button className="back-button" onClick={() => navigate(-1)}>
                    뒤로가기
                </button>
                <button className="write-resume-btn" onClick={toWriteResume}>
                    이력서 작성
                </button>
            </div>
        </div>
    );
};

export default MyResume;
