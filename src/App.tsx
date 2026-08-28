import { useState, useEffect } from "react";
import { type IMain } from "./model/model";
import Modal from "./model/model";
import { main_data } from "./data/data";
import "./style.css";
import wlogo from "../content/whitelogo.svg";
import teacher from "../content/teacher.PNG";
// import blogo from "../content/blacklogo.svg";

function App() {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlider((prev) => (prev + 1) % main_data.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [slider]);

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <main>
        <section className="main_section">
          <nav>
            <img src={wlogo} />
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
            {<img src={main_data[slider].image} alt="main_photo" className="main_section_photo" />}
          </div>
        </section>
        <section className="directions">
          <span className="directions_text">Направления</span>
          <div className="grid">
              <div className="cards-1">HIP-HOP<span className="card_more">Подробнее</span></div>
              <div className="cards-1">DANCE MIX<span className="card_more">Подробнее</span></div>
              <div className="cards-1">BREAKING<span className="card_more">Подробнее</span></div>
              <div className="cards-1">JAZZ-FANK<span className="card_more">Подробнее</span></div>
              <div className="cards-2">K-POP<span className="card_more">Подробнее</span></div>
              <div className="cards-2">CONTEMPORARY<span className="card_more">Подробнее</span></div>
              <div className="cards-2">LADIES<span className="card_more">Подробнее</span></div>
          </div>
          <div className="directions_grid">
            <div>
              <span>Армянские танцы</span>

              <button onClick={() => setModalOpen(true)}>Открыть направление</button>
              <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title="Армянские танцы"
              >
                <br />
                <span>То-то сё-то танцуем то-то.</span>
              </Modal>
            </div>
          </div>
        </section>
        <section className="Teachers">
            <span className="teachers_text">Наши педагоги</span>
            <div className="grid">
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Гребнева Елизавета</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Родионова Анастасия</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Макарова Анжела</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Малова Наталья</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Матюшкина Ирина</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Маншилина Каролина</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Галкина Юлия</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Николаева Анна</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Урлапова Екатерина</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Алексеев Максим</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Маркин Роман</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Чибиряев Егор</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Федулова Таисия</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Завьялова Дарья</span></div>
                <div className="grid_content"><img src={teacher}/><span className="teachers_name">Волкова Валерия</span></div>
            </div>
        </section>
      </main>
    </>
  );
}

export default App;
