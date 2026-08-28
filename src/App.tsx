import { useState } from "react";
import "./style.css";

function App() {
  return (
    <>
      <main>
        <nav>
          <a href="about">О нас</a>
          <a href="directions">Направления</a>
          <a href="schedule">Расписание</a>
          <a href="teachers">Педагоги</a>
          <a href="prices">Цены</a>
          <a href="branches">Филиалы</a>
          <a href="media">Медиа</a>
          <a href="contacts">Контакты</a>
        </nav>
        <div className="slider">
          {/* <div className="slide"><img src={main1}></div>
            <div className="slide"><img src="/image/main2.jpg"></div>
            <div className="slide"><img src="/image/main3.jpg"></div>
            <div className="slide"><img src="/image/main4.jpg"></div> */}
        </div>
      </main>
    </>
  );
}

export default App;
