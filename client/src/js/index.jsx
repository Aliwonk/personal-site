import React from 'react';
import {render} from 'react-dom';
import { TechList } from "./components/main/content.jsx";
import { Contacts } from "./components/main/footer.jsx";
import { CallBackForm } from "./components/main/forms.jsx";
import { Menu, BtnBurger } from "./components/main/head.jsx";
import { Home } from "./components//main/home.jsx";
import preloader from '../img/preloader.gif';
import '../sass/style.sass';
import '../sass/admin.sass';

window.onload = () => {
    let preloader = document.querySelector('.preloader');

    setTimeout(() => {
        preloader.classList.add('preloaderHide');
    }, 1000);
};

// PRELOADER
render(
    <div className="preloader__img">
        <img src={preloader} alt="preloader"></img>
    </div>,
    document.querySelector('.preloader')
)
// END PRELOADER
// HEADER
render(
    <div className="header">
        <Menu mobile={false}/>
        <BtnBurger/>
    </div>,
    document.getElementById('head')
);
// END HEADER

// CALLBACK
render(
    <CallBackForm />,
    document.querySelector('.callBack')
);
// END CALLBACK

// MOBILEMENU
render(
    <Menu mobile={true}/>,
    document.querySelector('.mobileMenu')
);
// END MOBILEMENU

// HOME
render(
    <Home />,
    document.getElementById('home')
);
// END HOME

// CONTENT
render(
    <TechList />,
    document.getElementById('content')
);
// END CONTENT

// FOOTER
render(
    <Contacts />,
    document.getElementById('footer')
);
// END FOOTER