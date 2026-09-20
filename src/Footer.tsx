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
          <hr ></hr>
          <div>
            <span>Телефон: +7-985-766-41-86</span>
            <a href=" https://vk.ru/hermesdance">Мы в ВК</a>
            <a href="https://germes.mskobr.ru/">Официальный сайт Гермеса</a>
          </div>
          <div>
            <span>Create by</span>
            <a href="https://github.com/Hayk-Tiberius">Prus</a>
            &
            <a href="https://github.com/A-Anubis">Anubis</a>
          </div>
          <div>
            <a href="">Публичная оферта</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
