import React from 'react';
import iconExpress from '../../../img/icons/expressjs_logo_icon_169186.png'
let techList1 = [
    {
        icon : 'https://img.icons8.com/ios/64/000000/html-5--v1.png', 
        text : 'HTML'
    },
    {
        icon : 'https://img.icons8.com/ios/64/000000/css3.png',
        text : 'CSS'
    },
    {
        icon : 'https://img.icons8.com/ios/64/000000/javascript--v1.png',
        text : 'JAVASCRIPT'
    },
    {
        icon : 'https://img.icons8.com/ios-filled/64/000000/sass.png', 
        text : 'SASS'
    },
    // {
    //     icon : 'https://img.icons8.com/windows/64/000000/vuejs.png',
    //     text : 'VUE'
    // }
];
let techList2 = [
    {
        icon : 'https://img.icons8.com/windows/64/000000/nodejs.png',
        text : 'NODE JS'
    },
    {
        icon : 'https://img.icons8.com/ios/64/000000/typescript.png',
        text : 'TYPESCRIPT'
    },
    {
        icon: iconExpress,
        text : 'EXPRESS'
    },
    {
        icon : 'https://img.icons8.com/ios/64/000000/mysql-logo.png',
        text : 'MYSQL'
    },
    {
        icon : 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/64/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png',
        text : 'MONGODB'
    }
];

export function TechList() {

    const list1 = techList1.map((todo, index) =>
        <div className="list-tech" key={index}>
            <div>
                <img src={todo.icon} alt="icon" />
                <p>{todo.text}</p>
            </div>
        </div>
    );

    const list2 = techList2.map((todo, index) =>
        <div className="list-tech" key={index}>
            <div>
                <img src={todo.icon} alt="icon" />
                <p>{todo.text}</p>
            </div>
        </div>
    );

    return(
        <div className="content__tech" id="stack">
            <h1>Мой стек</h1>
            <div className="content__tech__el">
                <div className="caption">FRONT-END</div>
                {list1}
            </div>
            <div className="content__tech__el">
                <div className="caption">BACK-END</div>
                {list2}
            </div>
        </div>
    )
}