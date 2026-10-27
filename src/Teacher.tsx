import { direction_data, teacher_data } from "./data/data";
import { useState } from "react";
import "../src/teacher.css";

function Teacher() {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      setSelected(null);
      return;
    }

    setSelected(i);
  };

  const openModal = (teacherId: number) => {
    setSelectedTeacher(teacherId);
  };

  const closeModal = () => {
    setSelectedTeacher(null);
  };

  const teacher = teacher_data.find((item) => item.id === selectedTeacher);

  return (
    <>
      <section className="teachers">
        <span className="teachers_text">Наши педагоги</span>

        <div className="teachers_directions">
          {direction_data.map((item, i) => (
            <div className="direction_items" key={item.slug}>
              <div className="directions_items_teacher" onClick={() => toggle(i)}>
                {item.label}

                <span>{selected === i ? "-" : "+"}</span>
              </div>

              <div className={selected === i ? "teacher_items show" : "teacher_items"}>
                {teacher_data
                  .filter((teacher_item) => teacher_item.direction === item.slug)
                  .map((el) => (
                    <div className="teacher_content" key={el.id}>
                      <img src={el.photo} alt={el.name} />

                      <span>{el.name}</span>

                      <button onClick={() => openModal(el.id)}>Подробнее</button>

                      <a href="#">Записаться</a>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {teacher && (
        <div className="teacher_modal" onClick={closeModal}>
          <div className="teacher_modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="teacher_modal_close" onClick={closeModal}>
              ×
            </button>

            <div className="teacher_modal_left">
              <img src={teacher.photo} alt={teacher.name} />

              <h2>{teacher.name}</h2>

              <span className="teacher_modal_direction">{teacher.direction}</span>
            </div>

            <div className="teacher_modal_info">
              <p>
                <strong>О преподавателе</strong>
              </p>

              <p>{teacher.bio}</p>

              <p>
                <strong>Стоимость:</strong> {teacher.price}
              </p>

              <p>
                <strong>Расписание:</strong> {teacher.schedule}
              </p>

              <div className="teacher_modal_video">
                <video src={teacher.video} controls />
              </div>

              <a href="#" className="teacher_modal_signup">
                Записаться
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Teacher;
