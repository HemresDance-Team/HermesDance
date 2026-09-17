import { useState, useEffect } from "react";
import { type IMain } from "./model/model";
import Modal from "./model/model";
import { main_data } from "./data/data";

import Fillial from "./Fillial";
import Footer from "./Footer";
import Teacher from "./Teacher";
import Media from "./Media";

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
          <span className="directions_text">Направления</span>
          <div className="grid">
            <div className="cards-1">
              HIP-HOP
              <button className="card_more" onClick={() => setModalOpen(true)}>
                Открыть направление
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Ladies">
                <br />
                <span>То-то сё-то танцуем то-то.</span>
              </Modal>
            </div>
            <div className="cards-1">
              DANCE MIX
              <button className="card_more" onClick={() => setModalOpen(true)}>
                Открыть направление
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Ladies">
                <br />
                <span>То-то сё-то танцуем то-то.</span>
              </Modal>
            </div>
            <div className="cards-1">
              BREAKING
              <button className="card_more" onClick={() => setModalOpen(true)}>
                Открыть направление
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Ladies">
                <br />
                <span>То-то сё-то танцуем то-то.</span>
              </Modal>
            </div>
            <div className="cards-1">
              JAZZ-FANK
              <button className="card_more" onClick={() => setModalOpen(true)}>
                Открыть направление
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Ladies">
                <br />
                <span>То-то сё-то танцуем то-то.</span>
              </Modal>
            </div>
          </div>
          <div className="cards2_container">
            <div className="cards-2">
              K-POP
              <button className="card_more" onClick={() => setModalOpen(true)}>
                Открыть направление
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Ladies">
                <br />
                <span>То-то сё-то танцуем то-то.</span>
              </Modal>
            </div>
            <div className="cards-2">
              CONTEMPORARY
              <button className="card_more" onClick={() => setModalOpen(true)}>
                Открыть направление
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Ladies">
                <br />
                <span>То-то сё-то танцуем то-то.</span>
              </Modal>
            </div>
            <div className="cards-2">
              LADIES
              <button className="card_more" onClick={() => setModalOpen(true)}>
                Открыть направление
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Ladies">
                <br />
                <span>То-то сё-то танцуем то-то.</span>
              </Modal>
            </div>
          </div>
        </section>
        <Media />
        <Teacher />
        <Fillial />
        <Footer />
      </main>
    </>
  );
}

export default App;
