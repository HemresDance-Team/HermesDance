import React from 'react';
import './style.css'; // Не забудьте импортировать стили

function Feedback() {
  return (
    <section className="Feedback">
    
      <div className="feed_img">
        <img 
          src="https://via.placeholder.com/400x300" 
          alt="Фото" 
          className="feedback_img" 
        />
      </div>

      <div className="feedback_form">
       
        <form action="#" method="post">
          
          <input 
            type="text" 
            className="feedback_input" 
            placeholder="ФАМИЛИЯ И ИМЯ" 
            required 
          />
          
          <input 
            type="tel" 
            className="feedback_input" 
            placeholder="+7 (999) 000 00 00" 
            required 
          />

          <label className="feedback_checkbox_label">
            <input 
              type="checkbox" 
              className="feedback_checkbox" 
              required 
            />
            <span className="feedback_checkbox-custom"></span>
            <span className="feedback_checkbox_text">
              Я согласен на обработку персональных данных
            </span>
          </label>

          <button type="submit" className="feedback_btn">
            Записаться
          </button>
          
        </form> 
      </div>
    </section>
  );
}

export default Feedback;