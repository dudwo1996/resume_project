// eslint-disable-next-line no-unused-vars
import React from 'react';
import './AppBody.css';
import addResumeIcon from '../image/add-business-card-symbol.png';
import { useNavigate } from 'react-router-dom';
const AppBody = () => {
    const navigate = useNavigate();
    const toWriteResume = () => {
        navigate('/writeresume');
    };
    return (
        <div className="AppBody-container">
            <div className="add-resume-img" onClick={toWriteResume}>
                <img src={addResumeIcon} />
            </div>
        </div>
    );
};
export default AppBody;
