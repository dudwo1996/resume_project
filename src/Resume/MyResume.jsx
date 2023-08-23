// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './MyResume.css';
import { useIndexedDB } from 'react-indexed-db';
import { useCookies } from 'react-cookie';
import resumeIcon from '../image/myresumeimage.png';
import deleteIcon from '../image/delete.png';
import { useNavigate } from 'react-router-dom';

const MyResume = () => {
    const navigate = useNavigate();
    const userId = useCookies(['id'])[0].id;
    const { getByIndex, getAll, update } = useIndexedDB('resume');
    const [resumeList, setResumeList] = useState([]);
    const toWriteResume = () => {
        navigate('/home/writeresume');
    };

    const toResumeDetail = (resumeData) => {
        navigate('/home/myresume/myresumedetail', { state: resumeData });
    };

    const myResumeDelete = async (resumeId) => {
        if (confirm('해당 이력서를 정말 삭제하시겠습니까?')) {
            const getAllRes = await getAll();
            const selectedData = getAllRes.filter((x) => x.id === userId);
            const newData = selectedData[0].resumeData.filter((x) => x.resumeId !== resumeId);
            selectedData[0].resumeData = newData;
            update({ id: selectedData[0].id, resumeData: selectedData[0].resumeData });
            alert('해당 이력서가 삭제되었습니다.');
            getByIndex('id', userId).then((data) => {
                setResumeList(data.resumeData);
            });
        } else {
            return;
        }
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
                                        <div className="my-resume-wrap">
                                            <img
                                                src={resumeIcon}
                                                style={{ marginBottom: '5px', width: '80px' }}
                                                onClick={() => toResumeDetail(resume)}
                                            />
                                            <div className="mapping-resume-title">
                                                {resume.resumeTitle === '' ? '제목없음' : resume.resumeTitle}
                                            </div>
                                            <img
                                                src={deleteIcon}
                                                className="delete-icon"
                                                onClick={() => myResumeDelete(resume.resumeId)}
                                            />
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
