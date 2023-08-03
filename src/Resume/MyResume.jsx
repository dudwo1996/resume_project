// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './MyResume.css';
import { useIndexedDB } from 'react-indexed-db';
import { useCookies } from 'react-cookie';
import resumeIcon from '../image/curriculum64x64.png';
import writeResumeIcon from '../image/edit64x64.png';
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
        <div style={{ height: '100%' }}>
            <span style={{ fontSize: '30px', fontWeight: '800' }}>나의 이력서</span>
            <div className="my-resume-container">
                {resumeList.map((resume, idx) => {
                    return (
                        <ul
                            title={resume.resumeTitle}
                            className="mapping-resume"
                            key={idx}
                            onClick={() => toResumeDetail(resume)}
                        >
                            <li>
                                <img src={resumeIcon} style={{ marginBottom: '5px' }} />
                                <div className="mapping-resume-title">{resume.resumeTitle}</div>
                            </li>
                        </ul>
                    );
                })}
                <ul className="mapping-resume">
                    <li onClick={toWriteResume}>
                        <img src={writeResumeIcon} style={{ marginBottom: '5px' }} />
                        <div className="mapping-resume-title">이력서 작성</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyResume;
