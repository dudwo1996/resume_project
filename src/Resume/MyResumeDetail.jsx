// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { useIndexedDB } from 'react-indexed-db';
import { useCookies } from 'react-cookie';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const MyResumeDetail = () => {
    const { state } = useLocation();
    const { update, getAll } = useIndexedDB('resume');
    const userId = useCookies(['id'])[0].id;
    const navigate = useNavigate();

    const deleteResume = async () => {
        if (confirm('이력서를 삭제하시겠습니까?')) {
            const getAllRes = await getAll();
            const selectedData = getAllRes.filter((x) => x.id === userId);
            const newData = selectedData[0].resumeData.filter((x) => x.resumeId !== state.resumeId);
            selectedData[0].resumeData = newData;
            update({ id: selectedData[0].id, resumeData: selectedData[0].resumeData });
            alert('해당 이력서가 삭제되었습니다.');
            navigate('/home/myresume');
        } else {
            return;
        }
    };

    const resumeDownload = () => {
        const resumeTitle = prompt('저장하고싶은 이력서 이름을 작성하세요.');
        if (resumeTitle !== '') {
            const element = document.getElementById('resume-container-pdf');
            html2canvas(element).then((canvas) => {
                // 캔버스를 이미지로 변환
                var imgData = canvas.toDataURL('image/png');

                var imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
                var pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준
                var imgHeight = (canvas.height * imgWidth) / canvas.width;
                var heightLeft = imgHeight;
                console.log(imgWidth, imgHeight);
                var doc = new jsPDF('p', 'mm');
                var position = 0;

                // 첫 페이지 출력
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                // 한 페이지 이상일 경우 루프 돌면서 출력
                while (heightLeft >= 20) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                // 파일 저장
                doc.save(resumeTitle + '.pdf');
            });
        } else {
            alert('저장하고싶은 이력서 이름을 작성하세요.');
        }
    };

    return (
        <>
            <div className="my-resume-detail-container">
                <div id="resume-container-pdf">
                    <div className="my-resume-detail-title">{state.resumeTitle}</div>
                    {state.isProfile ? (
                        <>
                            <div className="my-resume-detail-div">
                                <div
                                    style={{
                                        width: '70%',
                                        margin: 'auto',
                                        marginBottom: '15px',
                                        borderBottom: '1px solid black',
                                        height: '35px',
                                    }}
                                >
                                    <h3 style={{ textAlign: 'left' }}>
                                        <img src={personInfoIcon} alt="기본정보" /> 기본 정보
                                    </h3>
                                </div>
                                <div className="basic-info-container">
                                    <div className="basic-info-image">
                                        {state.imageData ? (
                                            <img
                                                src={state.imageData}
                                                style={{ width: '120px', height: '150px', borderRadius: '20px' }}
                                            />
                                        ) : (
                                            <img src={personIcon} />
                                        )}
                                    </div>
                                    <div className="basic-info-div">
                                        <div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                    fontSize: '25px',
                                                    fontWeight: '500',
                                                }}
                                            >
                                                {state.userName}
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <img src={birthdayIcon} />
                                                <span style={{ marginLeft: '10px', fontWeight: '600' }}>
                                                    {state.userBirth}
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <img src={phoneIcon} />
                                                <span style={{ marginLeft: '10px', fontWeight: '600' }}>
                                                    {state.userPhoneNum}
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <img src={emailIcon} />
                                                <span style={{ marginLeft: '10px', fontWeight: '600' }}>
                                                    {state.userEmail}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                    {state.isLastDegree ? (
                        <>
                            <div className="my-resume-detail-div">
                                <div
                                    style={{
                                        width: '70%',
                                        margin: 'auto',
                                        marginBottom: '15px',
                                        borderBottom: '1px solid black',
                                        height: '35px',
                                    }}
                                >
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
                                            width: '150px',
                                        }}
                                    >
                                        <span>
                                            {state.graduationDayY}.{state.graduationDayM} 졸업(예정)
                                        </span>
                                    </div>
                                    <div style={{ textAlign: 'left', width: '295px' }}>
                                        <span className="main-business">
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
                                                : '없음'}{' '}
                                            |{state.schoolName} | {state.major}
                                            {state.score}/{state.perfectScore}{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                    {state.isCareer ? (
                        <>
                            <div className="my-resume-detail-div">
                                <div
                                    style={{
                                        width: '70%',
                                        margin: 'auto',
                                        marginBottom: '15px',
                                        borderBottom: '1px solid black',
                                        height: '35px',
                                    }}
                                >
                                    <h3 style={{ textAlign: 'left' }}>
                                        <img src={careerIcon} /> 경력
                                    </h3>
                                </div>
                                {state.careers.map((state, idx) => {
                                    return (
                                        <>
                                            <div className="career-container" key={idx}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        alignSelf: 'flex-start',
                                                        width: '150px',
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
                                                <div style={{ textAlign: 'left', width: '295px' }}>
                                                    <span style={{ display: 'block', marginBottom: '10px' }}>
                                                        {state.companyName} | {state.companyPosition}
                                                    </span>
                                                    <span style={{ display: 'block', marginBottom: '10px' }}>
                                                        {state.companyExplain}
                                                    </span>
                                                    <span
                                                        className="main-business"
                                                        style={{ display: 'block', whiteSpace: 'pre-wrap' }}
                                                    >
                                                        {state.companyMainBusiness}
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </>
                    ) : null}
                    {state.isProject ? (
                        <>
                            <div className="my-resume-detail-div">
                                <div
                                    style={{
                                        width: '70%',
                                        margin: 'auto',
                                        marginBottom: '15px',
                                        borderBottom: '1px solid black',
                                        height: '35px',
                                    }}
                                >
                                    <h3 style={{ textAlign: 'left' }}>
                                        <img src={projectIcon} /> 프로젝트
                                    </h3>
                                </div>
                                {state.projects.map((state, idx) => {
                                    return (
                                        <>
                                            <div className="project-container" key={idx}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        alignSelf: 'flex-start',
                                                        width: '150px',
                                                    }}
                                                >
                                                    <span>
                                                        {state.projectStartY}.{state.projectStartM} ~{' '}
                                                        {state.projectEndY}.{state.projectEndM}
                                                    </span>
                                                </div>
                                                <div style={{ width: '295px', textAlign: 'left' }}>
                                                    <span style={{ display: 'block', marginBottom: '10px' }}>
                                                        {state.projectName}
                                                    </span>
                                                    <span style={{ display: 'block', marginBottom: '10px' }}>
                                                        {state.projectExplain}
                                                    </span>
                                                    <span style={{ display: 'block', marginBottom: '10px' }}>
                                                        {state.projectPosition}
                                                    </span>
                                                    <span className="main-business">{state.projectMainBusiness}</span>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </>
                    ) : null}
                    {state.isEducation ? (
                        <>
                            <div className="my-resume-detail-div">
                                <div
                                    style={{
                                        width: '70%',
                                        margin: 'auto',
                                        marginBottom: '15px',
                                        borderBottom: '1px solid black',
                                        height: '35px',
                                    }}
                                >
                                    <h3 style={{ textAlign: 'left' }}>
                                        <img src={educationIcon} /> 교육 이력
                                    </h3>
                                </div>
                                {state.educations.map((state, idx) => {
                                    return (
                                        <>
                                            <div className="education-container" key={idx}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        alignSelf: 'flex-start',
                                                        width: '150px',
                                                    }}
                                                >
                                                    <span>
                                                        {state.educationStartY}.{state.educationStartM} ~{' '}
                                                        {state.educationEndY}.{state.educationEndM}
                                                    </span>
                                                </div>
                                                <div style={{ textAlign: 'left', width: '295px' }}>
                                                    <span style={{ display: 'block', marginBottom: '10px' }}>
                                                        {state.educationName} | {state.educationExplain}
                                                    </span>
                                                    <span style={{ display: 'block', marginBottom: '10px' }}>
                                                        {state.educationPosition}
                                                    </span>
                                                    <span
                                                        className="main-business"
                                                        style={{ display: 'block', whiteSpace: 'pre-wrap' }}
                                                    >
                                                        {state.educationMainBusiness}
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </>
                    ) : null}
                    {state.isLink ? (
                        <>
                            <div className="my-resume-detail-div">
                                <div
                                    style={{
                                        width: '70%',
                                        margin: 'auto',
                                        marginBottom: '15px',
                                        borderBottom: '1px solid black',
                                        height: '35px',
                                    }}
                                >
                                    <h3 style={{ textAlign: 'left' }}>
                                        <img src={linkIcon} /> 링크
                                    </h3>
                                </div>
                                <div className="link-container">
                                    {state.githubLink ? (
                                        <div className="myresume-github-link" style={{ justifyContent: 'flexStart' }}>
                                            <img src={githubIcon} style={{ width: '32px', height: '32px' }} />
                                            <div style={{ marginLeft: '20px' }}>
                                                {/* <span style={{ textAlign: 'left', display: 'block' }}>Github</span> */}
                                                <span>{state.githubLink}</span>
                                            </div>
                                        </div>
                                    ) : null}
                                    {state.notionLink ? (
                                        <div className="myresume-notion-link">
                                            <img src={notionIcon} style={{ width: '32px', height: '32px' }} />
                                            <div style={{ marginLeft: '20px' }}>
                                                {/* <span style={{ textAlign: 'left', display: 'block' }}>Notion</span> */}
                                                <span>{state.notionLink}</span>
                                            </div>
                                        </div>
                                    ) : null}
                                    {state.blogLink ? (
                                        <div className="myresume-blog-link">
                                            <img src={blogIcon} style={{ width: '32px', height: '32px' }} />
                                            <div style={{ marginLeft: '20px' }}>
                                                {/* <span style={{ textAlign: 'left', display: 'block' }}>Blog</span> */}
                                                <span>{state.blogLink}</span>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </>
                    ) : null}
                    {state.isIntroSelf ? (
                        <>
                            <div className="my-resume-detail-div">
                                <div
                                    style={{
                                        width: '70%',
                                        margin: 'auto',
                                        marginBottom: '15px',
                                        borderBottom: '1px solid black',
                                        height: '35px',
                                    }}
                                >
                                    <h3 style={{ textAlign: 'left' }}>
                                        <img src={introSelfIcon} /> 자기소개서
                                    </h3>
                                </div>
                                <div className="self-intro-container">
                                    <span style={{ display: 'block' }}>{state.selfIntroName}</span>
                                    <span style={{ textAlign: 'left', display: 'block', whiteSpace: 'pre-wrap' }}>
                                        {state.selfIntroDetail}
                                    </span>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
                <div className="my-resume-detail-button">
                    <button className="back-button" onClick={() => navigate(-1)}>
                        뒤로가기
                    </button>
                    <button className="back-button" onClick={() => resumeDownload()}>
                        pc로 다운로드
                    </button>
                    <button className="edit-button" onClick={() => navigate('/home/writeresume', { state: state })}>
                        수정
                    </button>
                    <button className="delete-button" onClick={deleteResume}>
                        삭제
                    </button>
                </div>
            </div>
        </>
    );
};

export default MyResumeDetail;
