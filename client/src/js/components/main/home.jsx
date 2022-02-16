import React from 'react';
export function Home() {

    function showCallBack() {
        document.querySelector('.callBack').classList.add('callBackClick');
    }

    return(
        <div className="home">
        <h1 id="home__caption">B \ A</h1>
        <p id="home__description">
            Здравствуйте, я веб-разработчик.
            И сейчас вы зашли на мой персональный сайт, в котором вы можете сотрудничать со мной.
            Кто такой веб-разработчик и что он делает? 
            Веб-разработчик-это человек, который может создать веб-инструмент для управление контентом, брендом и т.д.
        </p>
        <div className="home__contacts">
            <div>
                <p>Почта:</p>
                <p>AIDYSH0324@gmail.com</p>
            </div>
            <div>
                <p>Телеграм:</p>
                <a href="https://t.me/ALIWONKI">@ALIWONKI</a>
            </div>
        </div>
        <div id="home__btnCallBack" onClick={showCallBack}>
            СВЯЗАТЬСЯ
        </div>
        <a href="#content" id="home__btnDown">
            <button>
                <img src="https://img.icons8.com/windows/64/000000/expand-arrow--v1.png" alt="arrowDown" />
            </button>
        </a>
    </div>
    )
};