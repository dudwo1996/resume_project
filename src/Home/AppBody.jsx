// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './AppBody.css';
import addResumeIcon from '../image/add-business-card-symbol.png';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Loading from '../Loding/Loading';

const AppBody = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [cookies, removeCookie] = useCookies(['id']);
    const [isLoading, setIsLoading] = useState(false);

    const toWriteResume = () => {
        navigate('/home/writeresume');
    };

    const logOut = async () => {
        await removeCookie('id');
        await navigate('/signin');
    };
    const handleEvent = () => {
        history.pushState(null, '', location.href);
        if (confirm('로그아웃 하시겠습니까?')) {
            logOut();
        } else {
            return;
        }
    };

    useEffect(() => {
        window.addEventListener('popstate', handleEvent);
        return () => {
            window.removeEventListener('popstate', handleEvent);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
            <div className="AppBody-container">
                <div className="add-resume-img" onClick={toWriteResume}>
                    <img src={addResumeIcon} />
                </div>
            </div>
        );
    }
};
export default AppBody;
