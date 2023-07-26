// eslint-disable-next-line no-unused-vars
import React from 'react';
import './MainHome.css';

const MainHome = () => {
    let mainText = document.getElementsByClassName('main-text');
    let scrollValue = window.scrollY;
    window.addEventListener('scroll', () => {
        if (scrollValue > 0) {
            mainText.style.animation = 'disappear 1s ease-out forwards';
        } else {
            mainText.style.animation = 'slide 1s ease-out';
        }
    });

    return (
        <div>
            <section className="section1">
                <nav className="home-nav">
                    <span>resume</span>
                    <div>
                        <span>회원가입</span>
                        <span>로그인</span>
                    </div>
                </nav>
                {/* <h1 className="main-text">PICK YOUR FAVORITE</h1>
                <img
                    className="photo"
                    src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_pick_img.png"
                /> */}
            </section>
        </div>
    );
};

export default MainHome;
