import { useState } from "react";
import main1 from "../content/main1.jpg"
import main2 from "../content/main2.jpg"
import main3 from "../content/main3.jpg"
import main4 from "../content/main4.jpg"
import "./style.css"
function App() {
  return <>
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
            <div className="slide"><img src={main1}/></div>
            <div className="slide"><img src={main2}/></div>
            <div className="slide"><img src={main3}/></div>
            <div className="slide"><img src={main4}/></div>
        </div>

    </main></>;
}

export default App;
