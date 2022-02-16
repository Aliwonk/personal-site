import React from 'react';
let menuContent = [
  {
      text : 'Главная',
      link : '#home'
  },
  {
      text : 'Стек',
      link : '#stack'
  },
  {
      text : 'Контакты',
      link : '#footer'
  }
];


export function Menu(props) {
    let mobile = props.mobile;
    let className;

    if(mobile === true) {
        className = 'menu'
    }else{
        className = 'headerMenu'
    };

    function closeMenu() {
      document.querySelector('.line1').classList.remove('tLine1');
      document.querySelector('.line2').classList.remove('tLine2');
      document.querySelector('.line3').classList.remove('tLine3');
      document.querySelector('.mobileMenu').classList.remove('mobileMenuTgl');
      document.querySelector('body').classList.remove('bodyFixed');
    };

    const listItems = menuContent.map((todo, index) =>
      <div key={index}>
          <a href={todo.link} onClick={closeMenu}>{todo.text}</a>
      </div>,
    );

    return (
      <div className={className}>{listItems}</div>
    );
};


export function BtnBurger() {
  
  function btnBurger() {
    document.querySelector('.line1').classList.toggle('tLine1');
    document.querySelector('.line2').classList.toggle('tLine2');
    document.querySelector('.line3').classList.toggle('tLine3');
    document.querySelector('.mobileMenu').classList.toggle('mobileMenuTgl');
    document.querySelector('body').classList.toggle('bodyFixed');
  }



  return (
    <div className="btnBurger" onClick={btnBurger}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </div>
  )
}