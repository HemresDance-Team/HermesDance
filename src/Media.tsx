import { useState } from "react";
import { media_data } from "./data/data";

function Media() {
  const [mediaSlider, setMediaSlider] = useState(0);
  const [animation, setAnimation] = useState("");

  const next = () => {
    setAnimation("slide-left");

    setTimeout(() => {
      setMediaSlider((prev) => (prev + 1 >= media_data.length ? 0 : prev + 1));
      setAnimation("slide-in-right");
    }, 400);
  };

  const before = () => {
    setAnimation("slide-right");

    setTimeout(() => {
      setMediaSlider((prev) => (prev - 1 < 0 ? media_data.length - 1 : prev - 1));
      setAnimation("slide-in-left");
    }, 400);
  };

  return (
    <section className="media">
      <span>Медиа</span>

      <div className="media_items">
        <div className="video_items">
          <video
            key={media_data[mediaSlider].video}
            src={media_data[mediaSlider].video}
            controls
            className={`media_video ${animation}`}
          />
        </div>

        <div className="media_text">
          <div className="media_description_wrapper">
            <span className={`media_description ${animation}`}>{media_data[mediaSlider].text}</span>
          </div>

          <div>
            <span className="media_slider_arrow" onClick={before}>
              ⬅
            </span>

            <span className="media_slider_arrow" onClick={next}>
              ⮕
            </span>
          </div>

          <a href="" className="media_signup">
            Записаться
          </a>
        </div>
      </div>
    </section>
  );
}

export default Media;
