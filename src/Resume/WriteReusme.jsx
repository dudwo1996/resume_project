// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './WriteResume.css';
import ResumeLeft from './ResumeLeft';
import ResumeArticle from './ResumeArticle';
import ResumeRight from './ResumeRight';
import ResumeFooter from './ResumeFooter';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useIndexedDB } from 'react-indexed-db';
import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';

const WriteResume = () => {
    const { memberInfo } = useOutletContext();
    const { add, getAll, update } = useIndexedDB('resume');
    const userId = useCookies(['id'])[0].id;
    const navigate = useNavigate();

    useEffect(() => {}, []);

    const saveButton = async (data) => {
        const getAllRes = await getAll();
        const resumeData = getAllRes.filter((x) => x.id === userId);
        const resumeId = uuidv4();
        data.resumeId = resumeId;
        if (resumeData.length !== 0) {
            resumeData[0].resumeData.push(data);
            update({ id: resumeData[0].id, resumeData: resumeData[0].resumeData });
            alert('이력서 작성 완료!');
            navigate('/home/myresume');
        } else {
            add({ id: memberInfo.id, resumeData: [data] }).then(() => {
                alert('이력서 작성 완료!');
                navigate('/home/myresume');
            });
        }
    };

    const editButton = async (data) => {
        const getAllRes = await getAll();
        const resumeData = await getAllRes.filter((x) => x.id === userId);
        const deleteResume = await resumeData[0].resumeData.filter((resume) => resume.resumeId !== data.resumeId);
        await deleteResume.push(data);
        update({ id: resumeData[0].id, resumeData: deleteResume });
        alert('이력서 수정 완료!');
        navigate('/home/myresume');
    };

    return (
        <div className="write-resume-container">
            <div className="container-main">
                <aside style={{ width: '20%' }}>
                    <ResumeLeft />
                </aside>
                <main style={{ width: '60%' }}>
                    <article style={{ width: '100%' }}>
                        <ResumeArticle saveButton={saveButton} editButton={editButton} />
                    </article>
                </main>
                <aside style={{ width: '20%' }}>
                    <ResumeRight />
                </aside>
            </div>
            <footer>
                <ResumeFooter />
            </footer>
        </div>
    );
};

export default WriteResume;
