/* Фото для главного экрана */
import main1 from "../../content/main1.jpg";
import main2 from "../../content/main2.jpg";
import main3 from "../../content/main3.jpg";
import main4 from "../../content/main4.jpg";

/* Видео для Медиа */
import video1 from "../../content/media/media_page_video/Squirrel.mp4";
import video2 from "../../content/media/media_page_video/pigs.mp4";

import type { IMedia } from "../model/model";
import type { IMain } from "../model/model";

export const main_data: IMain[] = [
  { id: 1, image: main1 },
  { id: 2, image: main2 },
  { id: 3, image: main3 },
  { id: 4, image: main4 },
];

export const media_data: IMedia[] = [
  { id: 1, video: video1, text: "squirell" },
  { id: 2, video: video2, text: "pigs" },
  { id: 3, video: "Hi", text: "something" },
  { id: 4, video: "Hi", text: "something" },
  { id: 5, video: "Hi", text: "something" },
  { id: 6, video: "Hi", text: "something" },
  { id: 7, video: "Hi", text: "something" },
  { id: 8, video: "Hi", text: "something" },
];
