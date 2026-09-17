import wlogo from "../content/whitelogo.svg";
import "./style.css";

function Footer() {
  return (
    <>
      <section className="Footer">
        <div className="footer-links">
          <a href="teachers">Педагоги</a>
          <a href="schedule">Расписание</a>
          <a href="directions">Направления</a>
        </div>

        <img src={wlogo} alt="Логотип" className="footer-logo" />
        <div className="footer-text">
          <p>Телефон: +7-985-766-41-86</p>
          <a href=" https://vk.ru/hermesdance">Мы в ВК</a>
          <a href="https://germes.mskobr.ru/">Официальный сайт Гермеса</a>
        </div>
      </section>
    </>
  );
}

export default Footer;
