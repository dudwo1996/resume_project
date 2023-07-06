// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Loading from '../Loding/Loading';
import './WriteResume.css';
import ResumeLeft from './ResumeLeft';
import ResumeArticle from './ResumeArticle';
import ResumeRight from './ResumeRight';
import ResumeFooter from './ResumeFooter';
import { useOutletContext } from 'react-router-dom';
import { useIndexedDB } from 'react-indexed-db';

const WriteResume = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { memberInfo } = useOutletContext();
    const { add } = useIndexedDB('resume');

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveButton = (data) => {
        add({ id: memberInfo.id, resumeData: data }).then(() => {
            alert('이력서 작성 완료!');
        });
    };

    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <div className="write-resume-container">
                <div className="container-main">
                    <aside style={{ width: '20%' }}>
                        <ResumeLeft />
                    </aside>
                    <main style={{ width: '60%' }}>
                        <article style={{ width: '100%' }}>
                            <ResumeArticle saveButton={saveButton} />
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
    }
};

export default WriteResume;
