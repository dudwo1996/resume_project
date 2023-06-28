// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Loading from '../Loding/Loading';
import './WriteResume.css';
import ResumeLeft from './ResumeLeft';
import ResumeArticle from './ResumeArticle';
import ResumeRight from './ResumeRight';
import ResumeFooter from './ResumeFooter';

const WriteResume = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <div className="write-resume-container">
                <div className="container-main">
                    <asied style={{ width: '20%' }}>
                        <ResumeLeft />
                    </asied>
                    <main style={{ width: '60%' }}>
                        <article style={{ width: '100%' }}>
                            <ResumeArticle />
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
