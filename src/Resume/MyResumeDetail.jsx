// eslint-disable-next-line no-unused-vars
import React from 'react';
import phoneIcon from '../image/phone-call.png';
import birthdayIcon from '../image/birthday-cake.png';
import emailIcon from '../image/email.png';
import githubIcon from '../image/github.png';
import blogIcon from '../image/blogger.png';
import notionIcon from '../image/notion-icon.png';
import personIcon from '../image/person.png';
import personInfoIcon from '../image/businessman.png';
import graduationIcon from '../image/graduation-icon.png';
import careerIcon from '../image/building.png';
import projectIcon from '../image/laptop.png';
import educationIcon from '../image/classroom.png';
import linkIcon from '../image/link.png';
import introSelfIcon from '../image/presentation.png';
import './MyResumeDetail.css';
import { useLocation } from 'react-router-dom';

const MyResumeDetail = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className="my-resume-detail-container">
            <div className="my-resume-detail-title">{state.resumeTitle}</div>
            {state.isProfile ? (
                <>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: '15px' }}>
                        <h3 style={{ textAlign: 'left' }}>
                            <img src={personInfoIcon} alt="기본정보" /> 기본 정보
                        </h3>
                    </div>
                    <div className="basic-info-container">
                        <div className="basic-info-image">
                            {state.imageData ? (
                                <img src={state.imageData} style={{ width: '120px', height: '150px' }} />
                            ) : (
                                <img src={personIcon} />
                            )}
                        </div>
                        <div className="basic-name-div">{state.userName}</div>
                        <div className="basic-info-div">
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <img src={birthdayIcon} />
                                    <span style={{ marginLeft: '10px', fontWeight: '600' }}>{state.userBirth}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <img src={phoneIcon} />
                                    <span style={{ marginLeft: '10px', fontWeight: '600' }}>{state.userPhoneNum}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <img src={emailIcon} />
                                    <span style={{ marginLeft: '10px', fontWeight: '600' }}>{state.userEmail}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {state.isLastDegree ? (
                <>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: '15px' }}>
                        <h3 style={{ textAlign: 'left' }}>
                            <img src={graduationIcon} /> 최종 학력
                        </h3>
                    </div>
                    <div className="last-degree-container">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'flex-start',
                            }}
                        >
                            <span>{state.graduationDayY}</span>
                            <span>.</span>
                            <span>{state.graduationDayM}</span>
                            <span style={{ marginLeft: '5px' }}>졸업(예정)</span>
                        </div>
                        <div>
                            <span>
                                {state.highLevel === 'highSchool'
                                    ? '고등학교'
                                    : state.highLevel === 'juniorCollege'
                                    ? '대학(2,3년)'
                                    : state.highLevel === 'university'
                                    ? '대학교(4년)'
                                    : state.highLevel === 'universityMaster'
                                    ? '대학원(석사)'
                                    : state.highLevel === 'universityDocter'
                                    ? '대학원(박사)'
                                    : '없음'}
                            </span>
                            <span style={{ fontSize: '15px' }}> | </span>
                            <span>{state.schoolName}</span>
                            <div>
                                <span>{state.major}</span>
                                <span>{state.score}</span>
                                <span>/</span>
                                <span>{state.perfectScore}</span>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {state.isCareer ? (
                <>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: '15px' }}>
                        <h3 style={{ textAlign: 'left' }}>
                            <img src={careerIcon} /> 경력
                        </h3>
                    </div>
                    <div className="career-container">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'flex-start',
                            }}
                        >
                            <span>{state.careerStartY}</span>
                            <span>.</span>
                            <span>{state.careerStartM}</span>
                            <span>~</span>
                            <span>{state.careerEndY}</span>
                            <span>.</span>
                            <span>{state.careerEndM}</span>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <span style={{ display: 'block' }}>{state.companyName}</span>
                            <span style={{ display: 'block' }}>{state.companyExplain}</span>
                            <span style={{ display: 'block' }}>{state.companyPosition}</span>
                            <span style={{ display: 'block' }}>{state.companyMainBusiness}</span>
                        </div>
                    </div>
                </>
            ) : null}
            {state.isProject ? (
                <>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: '15px' }}>
                        <h3 style={{ textAlign: 'left' }}>
                            <img src={projectIcon} /> 프로젝트
                        </h3>
                    </div>
                    <div className="project-container">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'flex-start',
                            }}
                        >
                            <span>{state.projectStartY}</span>
                            <span>.</span>
                            <span>{state.projectStartM}</span>
                            <span>~</span>
                            <span>{state.projectEndY}</span>
                            <span>.</span>
                            <span>{state.projectEndM}</span>
                        </div>
                        <div>
                            <span>{state.ProjectName}</span>
                            <span>{state.ProjectExplain}</span>
                            <span>{state.projectPosition}</span>
                            <span>{state.projectMainBusiness}</span>
                        </div>
                    </div>
                </>
            ) : null}
            {state.isEducation ? (
                <>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: '15px' }}>
                        <h3 style={{ textAlign: 'left' }}>
                            <img src={educationIcon} /> 교육 이력
                        </h3>
                    </div>
                    <div className="education-container">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'flex-start',
                            }}
                        >
                            <span>{state.educationStartY}</span>
                            <span>.</span>
                            <span>{state.educationStartM}</span>
                            <span>~</span>
                            <span>{state.educationEndY}</span>
                            <span>.</span>
                            <span>{state.educationEndM}</span>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <span style={{ display: 'block' }}>{state.educationExplain}</span>
                            <span style={{ display: 'block' }}>{state.educationName}</span>
                            <span style={{ display: 'block' }}>{state.educationPosition}</span>
                            <span style={{ display: 'block' }}>{state.educationMainBusiness}</span>
                        </div>
                    </div>
                </>
            ) : null}
            {state.isLink ? (
                <>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: '15px' }}>
                        <h3 style={{ textAlign: 'left' }}>
                            <img src={linkIcon} /> 링크
                        </h3>
                    </div>
                    <div className="link-container">
                        {state.githubLink ? (
                            <div className="github-link">
                                <img src={githubIcon} style={{ width: '32px', height: '32px' }} />
                                <div style={{ marginLeft: '20px' }}>
                                    <span style={{ textAlign: 'left', display: 'block' }}>Github Link</span>
                                    <span>{state.githubLink}</span>
                                </div>
                            </div>
                        ) : null}
                        {state.notionLink ? (
                            <div className="notion-link">
                                <img src={notionIcon} style={{ width: '32px', height: '32px' }} />
                                <div style={{ marginLeft: '20px' }}>
                                    <span style={{ textAlign: 'left', display: 'block' }}>Notion Link</span>
                                    <span>{state.notionLink}</span>
                                </div>
                            </div>
                        ) : null}
                        {state.blogLink ? (
                            <div className="blog-link">
                                <img src={blogIcon} style={{ width: '32px', height: '32px' }} />
                                <div style={{ marginLeft: '20px' }}>
                                    <span style={{ textAlign: 'left', display: 'block' }}>Blog Link</span>
                                    <span>{state.blogLink}</span>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </>
            ) : null}
            {state.isIntroSelf ? (
                <>
                    <div style={{ width: '70%', margin: 'auto', marginBottom: '15px' }}>
                        <h3 style={{ textAlign: 'left' }}>
                            <img src={introSelfIcon} /> 자기소개서
                        </h3>
                    </div>
                    <div className="self-intro-container">
                        <span style={{ display: 'block' }}>{state.selfIntroName}</span>
                        <span style={{ display: 'block' }}>{state.selfIntroDetail}</span>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default MyResumeDetail;
