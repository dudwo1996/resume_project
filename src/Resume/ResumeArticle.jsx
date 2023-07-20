// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './ResumeArticle.css';
import phoneIcon from '../image/phone-call.png';
import birthdayIcon from '../image/birthday-cake.png';
import emailIcon from '../image/email.png';
import githubIcon from '../image/github.png';
import blogIcon from '../image/blogger.png';
import notionIcon from '../image/notion-icon.png';
import personInfoIcon from '../image/businessman.png';
import graduationIcon from '../image/graduation-icon.png';
import careerIcon from '../image/building.png';
import projectIcon from '../image/laptop.png';
import educationIcon from '../image/classroom.png';
import linkIcon from '../image/link.png';
import introSelfIcon from '../image/presentation.png';
import personIcon from '../image/person.png';
import { Checkbox } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const ResumeArticle = (props) => {
    const { saveButton, editButton } = props;
    const { state } = useLocation();
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [resumeId, setResumeId] = useState(state?.resumeId || '');
    const [resumeTitle, setResumeTItle] = useState(state?.resumeTitle || '');
    const [imageData, setImageData] = useState(state?.imageData || '');
    const [userName, setUserName] = useState(state?.userName || '');
    const [userBirth, setUserBirth] = useState(state?.userBirth || '');
    const [userPhoneNum, setUserPhoneNum] = useState(state?.userPhoneNum || '');
    const [userEmail, setUserEmail] = useState(state?.userEmail || '');
    const [graduationDayY, setGraduationDayY] = useState(state?.graduationDayY || '');
    const [graduationDayM, setGraduationDayM] = useState(state?.graduationDayM || '');
    const [highLevel, setHighLevel] = useState(state?.highLevel || '');
    const [schoolName, setSchoolName] = useState(state?.schoolName || '');
    const [major, setMajor] = useState(state?.major || '');
    const [score, setScore] = useState(state?.score || '');
    const [perfectScore, setPerfectScore] = useState(state?.perfectScore || '');
    const [githubLink, setGitgubLink] = useState(state?.githubLink || '');
    const [notionLink, setNotionLink] = useState(state?.notionLink || '');
    const [blogLink, setBlogLink] = useState(state?.blogLink || '');
    const [careerStartY, setCareerStartY] = useState(state?.careerStartY || '');
    const [careerStartM, setCareerStartM] = useState(state?.careerStartM || '');
    const [careerEndY, setCareerEndY] = useState(state?.careerEndY || '');
    const [careerEndM, setCareerEndM] = useState(state?.careerEndM || '');
    const [companyName, setCompanyName] = useState(state?.companyName || '');
    const [companyExplain, setCompanyExplain] = useState(state?.companyExplain || '');
    const [companyPosition, setCompanyPosition] = useState(state?.companyPosition || '');
    const [companyMainBusiness, setCompanyMainBusiness] = useState(state?.companyMainBusiness || '');
    const [projectStartY, setProjectStartY] = useState(state?.projectStartY || '');
    const [projectStartM, setProjectStartM] = useState(state?.projectStartM || '');
    const [projectEndY, setProjectEndY] = useState(state?.projectEndY || '');
    const [projectEndM, setProjectEndM] = useState(state?.projectEndM || '');
    const [projectName, setProjectName] = useState(state?.projectName || '');
    const [projectExplain, setProjectExplain] = useState(state?.projectExplain || '');
    const [projectPosition, setProjectPosition] = useState(state?.projectPosition || '');
    const [projectMainBusiness, setProjectMainBusiness] = useState(state?.projectMainBusiness || '');
    const [educationStartY, setEducationStartY] = useState(state?.educationStartY || '');
    const [educationStartM, setEducationStartM] = useState(state?.educationStartM || '');
    const [educationEndY, setEducationEndY] = useState(state?.educationEndY || '');
    const [educationEndM, setEducationEndM] = useState(state?.educationEndM || '');
    const [educationName, setEducationName] = useState(state?.educationName || '');
    const [educationExplain, setEducationExplain] = useState(state?.educationExplain || '');
    const [educationPosition, setEducationPosition] = useState(state?.educationPosition || '');
    const [educationMainBusiness, setEducationMainBusiness] = useState(state?.educationMainBusiness || '');
    const [selfIntroName, setSelfIntroName] = useState(state?.selfIntroName || '');
    const [selfIntroDetail, setSelfIntroDetail] = useState(state?.selfIntroDetail || '');
    const [isProfile, setIsProfile] = useState(state?.isProfile ?? true);
    const [isLastDegree, setIsLastDegree] = useState(state?.isLastDegree ?? true);
    const [isCareer, setIsCareer] = useState(state?.isCareer ?? true);
    const [isProject, setIsProject] = useState(state?.isProject ?? true);
    const [isEducation, setIsEducation] = useState(state?.isEducation ?? true);
    const [isLink, setIsLink] = useState(state?.isLink ?? true);
    const [isIntroSelf, setIsIntroSelf] = useState(state?.isIntroSelf ?? true);
    const changeImage = (files) => {
        const file = files[0];
        var reader = new FileReader();
        reader.onload = function () {
            var base64data = reader.result;
            setImageData(base64data);
        };
        reader.readAsDataURL(file);
    };

    const checkboxOncahnge = (value) => {
        if (value === 'isProfile') {
            setIsProfile(!isProfile);
        }
        if (value === 'isLastDegree') {
            setIsLastDegree(!isLastDegree);
        }
        if (value === 'isCareer') {
            setIsCareer(!isCareer);
        }
        if (value === 'isProject') {
            setIsProject(!isProject);
        }
        if (value === 'isEducation') {
            setIsEducation(!isEducation);
        }
        if (value === 'isLink') {
            setIsLink(!isLink);
        }
        if (value === 'isEducation') {
            setIsEducation(!isEducation);
        }
        if (value === 'isIntroSelf') {
            setIsIntroSelf(!isIntroSelf);
        }
    };

    const goBack = () => {
        if (confirm('작성한 내용이 사라집니다. 뒤로 가시겠습니까?')) {
            navigate(-1);
        } else {
            return;
        }
    };

    const autoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    };

    return (
        <div className="article-container">
            <div className="resume-title-div">
                <input
                    className="resume-title-box"
                    placeholder="자기만의 이력서 제목을 작성해주세요."
                    onChange={(e) => setResumeTItle(e.target.value)}
                    value={resumeTitle}
                />
            </div>
            <div className="sub-title">
                <div style={{ display: 'flex' }}>
                    <img src={personInfoIcon} />
                    <span>기본 정보</span>
                </div>
                <Checkbox value="isProfile" checked={isProfile} onChange={(e) => checkboxOncahnge(e.target.value)} />
            </div>
            {isProfile ? (
                <div className="resume-profile-div">
                    <div className="profile-image-div">
                        <input
                            id="profile-image-input"
                            className="profile-image"
                            type="file"
                            onChange={(e) => changeImage(e.target.files)}
                        />
                        <label className="image-input-label" htmlFor="profile-image-input">
                            <img
                                src={imageData ? imageData : personIcon}
                                alt=""
                                style={
                                    imageData
                                        ? { borderRadius: '20px', width: '120px', height: '150px' }
                                        : { width: '100px', height: '100px' }
                                }
                            />
                        </label>
                    </div>
                    <div className="user-info-div">
                        <div className="user-name-div">
                            <input
                                type="text"
                                className="user-name"
                                placeholder="이름"
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                            />
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <img src={birthdayIcon} />
                                <input
                                    type="text"
                                    className="user-birth"
                                    placeholder="생년월일"
                                    onChange={(e) => setUserBirth(e.target.value)}
                                    value={userBirth}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <img src={phoneIcon} />
                                <input
                                    type="text"
                                    pattern="[0-9]+"
                                    className="user-phone-num"
                                    placeholder="연락처"
                                    onChange={(e) => setUserPhoneNum(e.target.value)}
                                    value={userPhoneNum}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <img src={emailIcon} />
                                <input
                                    type="text"
                                    pattern="[0-9]+"
                                    className="user-email"
                                    placeholder="이메일"
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    value={userEmail}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            <div className="sub-title">
                <div style={{ display: 'flex' }}>
                    <img src={graduationIcon} />
                    <span>최종 학력</span>
                </div>
                <Checkbox
                    value="isLastDegree"
                    checked={isLastDegree}
                    onChange={(e) => checkboxOncahnge(e.target.value)}
                />
            </div>
            {isLastDegree ? (
                <div className="education-div">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'flex-start',
                        }}
                    >
                        <input
                            className="education-year"
                            type="text"
                            placeholder="YYYY"
                            onChange={(e) => setGraduationDayY(e.target.value)}
                            value={graduationDayY}
                        />
                        <span>.</span>
                        <input
                            className="education-month"
                            type="text"
                            placeholder="MM"
                            onChange={(e) => setGraduationDayM(e.target.value)}
                            value={graduationDayM}
                        />
                        <span style={{ height: '19px', fontSize: '14px' }}>졸업(예정)</span>
                    </div>
                    <div>
                        <select
                            className="education-select"
                            placeholder="학력 구분"
                            onChange={(e) => setHighLevel(e.target.value)}
                            value={highLevel}
                        >
                            <option value="highSchool">고등학교</option>
                            <option value="juniorCollege">대학(2,3년)</option>
                            <option value="university">대학교(4년)</option>
                            <option value="universityMaster">대학원(석사)</option>
                            <option value="universityDocter">대학원(박사)</option>
                        </select>
                        <span style={{ fontSize: '15px' }}> | </span>
                        <input
                            className="school-name"
                            type="text"
                            placeholder="학교명을 작성해주세요."
                            onChange={(e) => setSchoolName(e.target.value)}
                            value={schoolName}
                        />
                        <div>
                            <input
                                className="Major-name"
                                type="text"
                                placeholder="학과명을 작성해주세요."
                                onChange={(e) => setMajor(e.target.value)}
                                value={major}
                            />
                            <input
                                className="education-score"
                                type="text"
                                placeholder="학점"
                                onChange={(e) => setScore(e.target.value)}
                                value={score}
                            />
                            <span>/</span>
                            <input
                                className="perfect-score"
                                type="text"
                                placeholder="4.5"
                                onChange={(e) => setPerfectScore(e.target.value)}
                                value={perfectScore}
                            />
                        </div>
                    </div>
                </div>
            ) : null}

            <div className="sub-title">
                <div style={{ display: 'flex' }}>
                    <img src={careerIcon} />
                    <span>경력</span>
                </div>
                <Checkbox value="isCareer" checked={isCareer} onChange={(e) => checkboxOncahnge(e.target.value)} />
            </div>
            {isCareer ? (
                <div className="career-div">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'flex-start',
                        }}
                    >
                        <input
                            className="career-year"
                            type="text"
                            placeholder="YYYY"
                            onChange={(e) => setCareerStartY(e.target.value)}
                            value={careerStartY}
                        />
                        <span>.</span>
                        <input
                            className="career-month"
                            type="text"
                            placeholder="MM"
                            onChange={(e) => setCareerStartM(e.target.value)}
                            value={careerStartM}
                        />
                        <span>~</span>
                        <input
                            className="career-year"
                            type="text"
                            placeholder="YYYY"
                            onChange={(e) => setCareerEndY(e.target.value)}
                            value={careerEndY}
                        />
                        <span>.</span>
                        <input
                            className="career-month"
                            type="text"
                            placeholder="MM"
                            onChange={(e) => setCareerEndM(e.target.value)}
                            value={careerEndM}
                        />
                    </div>
                    <div>
                        <input
                            className="company-name"
                            type="text"
                            placeholder="회사명을 작성해주세요."
                            onChange={(e) => setCompanyName(e.target.value)}
                            value={companyName}
                        />
                        <input
                            className="company-profile"
                            type="text"
                            placeholder="회사소개를 간략하게 작성해주세요."
                            onChange={(e) => setCompanyExplain(e.target.value)}
                            value={companyExplain}
                        />
                        <input
                            className="company-position"
                            type="text"
                            placeholder="부서/직책"
                            onChange={(e) => setCompanyPosition(e.target.value)}
                            value={companyPosition}
                        />
                        <textarea
                            className="company-task-detail"
                            placeholder="주요 업무를 작성해주세요"
                            onChange={(e) => setCompanyMainBusiness(e.target.value)}
                            value={companyMainBusiness}
                            onInput={autoResize}
                        />
                    </div>
                </div>
            ) : null}
            <div className="sub-title">
                <div style={{ display: 'flex' }}>
                    <img src={projectIcon} />
                    <span>프로젝트</span>
                </div>
                <Checkbox value="isProject" checked={isProject} onChange={(e) => checkboxOncahnge(e.target.value)} />
            </div>
            {isProject ? (
                <div className="project-div">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'flex-start',
                        }}
                    >
                        <input
                            className="career-year"
                            type="text"
                            placeholder="YYYY"
                            onChange={(e) => setProjectStartY(e.target.value)}
                            value={projectStartY}
                        />
                        <span>.</span>
                        <input
                            className="career-month"
                            type="text"
                            placeholder="MM"
                            onChange={(e) => setProjectStartM(e.target.value)}
                            value={projectStartM}
                        />
                        <span>~</span>
                        <input
                            className="career-year"
                            type="text"
                            placeholder="YYYY"
                            onChange={(e) => setProjectEndY(e.target.value)}
                            value={projectEndY}
                        />
                        <span>.</span>
                        <input
                            className="career-month"
                            type="text"
                            placeholder="MM"
                            onChange={(e) => setProjectEndM(e.target.value)}
                            value={projectEndM}
                        />
                    </div>
                    <div>
                        <input
                            className="company-name"
                            type="text"
                            placeholder="프로젝트명을 작성해주세요."
                            onChange={(e) => setProjectName(e.target.value)}
                            value={projectName}
                        />
                        <input
                            className="company-profile"
                            type="text"
                            placeholder="프로젝트를 간략하게 작성해주세요."
                            onChange={(e) => setProjectExplain(e.target.value)}
                            value={projectExplain}
                        />
                        <input
                            className="company-position"
                            type="text"
                            placeholder="역할 ex) 프론트엔드"
                            onChange={(e) => setProjectPosition(e.target.value)}
                            value={projectPosition}
                        />
                        <textarea
                            className="project-detail"
                            placeholder="프로젝트 상세내용을 작성해주세요"
                            onChange={(e) => setProjectMainBusiness(e.target.value)}
                            value={projectMainBusiness}
                            onInput={autoResize}
                        />
                    </div>
                </div>
            ) : null}
            <div className="sub-title">
                <div style={{ display: 'flex' }}>
                    <img src={educationIcon} />
                    <span>교육 이력</span>
                </div>
                <Checkbox
                    value="isEducation"
                    checked={isEducation}
                    onChange={(e) => checkboxOncahnge(e.target.value)}
                />
            </div>
            {isEducation ? (
                <div className="project-div">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'flex-start',
                        }}
                    >
                        <input
                            className="career-year"
                            type="text"
                            placeholder="YYYY"
                            onChange={(e) => setEducationStartY(e.target.value)}
                            value={educationStartY}
                        />
                        <span>.</span>
                        <input
                            className="career-month"
                            type="text"
                            placeholder="MM"
                            onChange={(e) => setEducationStartM(e.target.value)}
                            value={educationStartM}
                        />
                        <span>~</span>
                        <input
                            className="career-year"
                            type="text"
                            placeholder="YYYY"
                            onChange={(e) => setEducationEndY(e.target.value)}
                            value={educationEndY}
                        />
                        <span>.</span>
                        <input
                            className="career-month"
                            type="text"
                            placeholder="MM"
                            onChange={(e) => setEducationEndM(e.target.value)}
                            value={educationEndM}
                        />
                    </div>
                    <div>
                        <input
                            className="company-name"
                            type="text"
                            placeholder="교육기관을 작성해주세요."
                            onChange={(e) => setEducationName(e.target.value)}
                            value={educationName}
                        />
                        <input
                            className="company-profile"
                            type="text"
                            placeholder="교육 과정명을 작성해주세요."
                            onChange={(e) => setEducationExplain(e.target.value)}
                            value={educationExplain}
                        />
                        <input
                            className="company-position"
                            type="text"
                            placeholder="역할 ex) 프론트엔드"
                            onChange={(e) => setEducationPosition(e.target.value)}
                            value={educationPosition}
                        />
                        <textarea
                            className="project-detail"
                            placeholder="상세내용을 작성해주세요"
                            onInput={autoResize}
                            value={educationMainBusiness}
                            onChange={(e) => setEducationMainBusiness(e.target.value)}
                        />
                    </div>
                </div>
            ) : null}
            <div className="sub-title">
                <div style={{ display: 'flex' }}>
                    <img src={linkIcon} />
                    <span>링크</span>
                </div>
                <Checkbox value="isLink" checked={isLink} onChange={(e) => checkboxOncahnge(e.target.value)} />
            </div>
            {isLink ? (
                <div className="link-div">
                    <div className="github-link">
                        <img src={githubIcon} style={{ width: '32px', height: '32px' }} />
                        <div style={{ marginLeft: '15px' }}>
                            <div style={{ textAlign: 'left' }}>Github</div>
                            <input
                                type="text"
                                placeholder="https://github.com"
                                onChange={(e) => setGitgubLink(e.target.value)}
                                value={githubLink}
                            />
                        </div>
                    </div>
                    <div className="notion-link">
                        <img src={notionIcon} style={{ width: '32px', height: '32px' }} />
                        <div style={{ marginLeft: '15px' }}>
                            <div style={{ textAlign: 'left' }}>Notion</div>
                            <input
                                type="text"
                                placeholder="https://notion.so"
                                onChange={(e) => setNotionLink(e.target.value)}
                                value={notionLink}
                            />
                        </div>
                    </div>
                    <div className="blog-link">
                        <img src={blogIcon} style={{ width: '32px', height: '32px' }} />
                        <div style={{ marginLeft: '15px' }}>
                            <div style={{ textAlign: 'left' }}>Blog</div>
                            <input
                                type="text"
                                placeholder="https:// 또는 http://를 포함해서 작성하세요."
                                onChange={(e) => setBlogLink(e.target.value)}
                                value={blogLink}
                            />
                        </div>
                    </div>
                </div>
            ) : null}
            <div className="sub-title">
                <div style={{ display: 'flex' }}>
                    <img src={introSelfIcon} />
                    <span>자기소개서</span>
                </div>
                <Checkbox
                    value="isIntroSelf"
                    checked={isIntroSelf}
                    onChange={(e) => checkboxOncahnge(e.target.value)}
                />
            </div>
            {isIntroSelf ? (
                <div className="cover-letter-div">
                    <input
                        className="cover-letter-title"
                        type="text"
                        placeholder="소제목을 작성해주세요."
                        onChange={(e) => setSelfIntroName(e.target.value)}
                        value={selfIntroName}
                    />
                    <textarea
                        className="cover-letter-detail"
                        placeholder="자기소개서 내용을 작성해주세요"
                        onChange={(e) => setSelfIntroDetail(e.target.value)}
                        value={selfIntroDetail}
                        onInput={autoResize}
                    />
                </div>
            ) : null}
            <div>
                <button className="save-button" onClick={goBack}>
                    뒤로가기
                </button>
                <button
                    className="save-button"
                    onClick={
                        state
                            ? () =>
                                  editButton({
                                      resumeId,
                                      resumeTitle,
                                      userName,
                                      userBirth,
                                      userPhoneNum,
                                      userEmail,
                                      imageData,
                                      graduationDayY,
                                      graduationDayM,
                                      highLevel,
                                      schoolName,
                                      major,
                                      score,
                                      perfectScore,
                                      githubLink,
                                      notionLink,
                                      blogLink,
                                      careerStartY,
                                      careerStartM,
                                      careerEndY,
                                      careerEndM,
                                      companyName,
                                      companyExplain,
                                      companyPosition,
                                      companyMainBusiness,
                                      projectStartY,
                                      projectStartM,
                                      projectEndY,
                                      projectEndM,
                                      projectName,
                                      projectExplain,
                                      projectPosition,
                                      projectMainBusiness,
                                      educationStartY,
                                      educationStartM,
                                      educationEndY,
                                      educationEndM,
                                      educationName,
                                      educationExplain,
                                      educationPosition,
                                      educationMainBusiness,
                                      selfIntroName,
                                      selfIntroDetail,
                                      isCareer,
                                      isEducation,
                                      isIntroSelf,
                                      isLastDegree,
                                      isLink,
                                      isProfile,
                                      isProject,
                                  })
                            : () =>
                                  saveButton({
                                      resumeTitle,
                                      userName,
                                      userBirth,
                                      userPhoneNum,
                                      userEmail,
                                      imageData,
                                      graduationDayY,
                                      graduationDayM,
                                      highLevel,
                                      schoolName,
                                      major,
                                      score,
                                      perfectScore,
                                      githubLink,
                                      notionLink,
                                      blogLink,
                                      careerStartY,
                                      careerStartM,
                                      careerEndY,
                                      careerEndM,
                                      companyName,
                                      companyExplain,
                                      companyPosition,
                                      companyMainBusiness,
                                      projectStartY,
                                      projectStartM,
                                      projectEndY,
                                      projectEndM,
                                      projectName,
                                      projectExplain,
                                      projectPosition,
                                      projectMainBusiness,
                                      educationStartY,
                                      educationStartM,
                                      educationEndY,
                                      educationEndM,
                                      educationName,
                                      educationExplain,
                                      educationPosition,
                                      educationMainBusiness,
                                      selfIntroName,
                                      selfIntroDetail,
                                      isCareer,
                                      isEducation,
                                      isIntroSelf,
                                      isLastDegree,
                                      isLink,
                                      isProfile,
                                      isProject,
                                  })
                    }
                >
                    {state ? '수정완료' : '작성완료'}
                </button>
            </div>
        </div>
    );
};

export default ResumeArticle;
