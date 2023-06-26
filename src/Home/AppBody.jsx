// eslint-disable-next-line no-unused-vars
import React from 'react';
import './AppBody.css';
import addResumeIcon from '../image/add-business-card-symbol.png';
const AppBody = () => {
    return (
        <div className="AppBody-container">
            <div className="add-resume-img">
                <img src={addResumeIcon} />
            </div>
        </div>
    );
};
export default AppBody;
