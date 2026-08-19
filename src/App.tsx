import { useState, useEffect } from "react";
import { type IMain } from "./model/model";
import Modal from "./model/model";
import { main_data } from "./data/data";
import "./style.css";
import wlogo from "../content/whitelogo.svg";
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
      </main>
    </>
  );
}

export default App;
