import React from "react";
import './headerComp.css';

function HeaderComp() {
  return (
    <header className="header">
      <div className="logo">Логотип</div>
      <nav className="nav">
        <a href="/new" className="nav-link">Новинки</a>
        <a href="/favorites" className="nav-link">Моё любимое</a>
        <a href="/profile" className="nav-link">Профиль</a>
        <a href="/support" className="nav-link">Поддержка</a>
      </nav>
    </header>
  );
}

export default HeaderComp;