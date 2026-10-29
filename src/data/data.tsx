/* Фото для главного экрана */
import main1 from "../../content/main1.jpg";
import main2 from "../../content/main2.jpg";
import main3 from "../../content/main3.jpg";
import main4 from "../../content/main4.jpg";

/* Видео для Медиа */
import video1 from "../../content/media/media_page_video/Squirrel.mp4";
import video2 from "../../content/media/media_page_video/pigs.mp4";

/* Медиаданные учителей */
import teacher1 from "../../content/media/teacher_media/teacher1.jpg";
import teacher13 from "../../content/media/teacher_media/teacher13.png";

/* Данные созданных интерфейсов */
import type { IMedia, ITeacher, IDirection } from "../model/model";
import type { IMain } from "../model/model";

export const main_data: IMain[] = [
  { id: 1, image: main1 },
  { id: 2, image: main2 },
  { id: 3, image: main3 },
  { id: 4, image: main4 },
];

export const media_data: IMedia[] = [
  { id: 1, video: video1, text: "Jazz-Funk" },
  { id: 2, video: video2, text: "pigs" },
  { id: 3, video: video3, text: "Hip-hop" },
  { id: 4, video: "Hi", text: "something" },
  { id: 5, video: "Hi", text: "something" },
  { id: 6, video: "Hi", text: "something" },
  { id: 7, video: "Hi", text: "something" },
  { id: 8, video: "Hi", text: "something" },
];

export const teacher_data: ITeacher[] = [
  {
    id: 1,
    name: "Гребнева Елизавета",
    direction: "hip-hop",
    photo: teacher1,
    video: "/videos/teachers/teacher-1.mp4",
    price: "1500 ₽",
    schedule: "Пн, Ср — 18:00",
    bio: "Преподаватель hip-hop с опытом более 5 лет. Помогает развивать чувство ритма, пластику и уверенность в танце.",
  },
  {
    id: 2,
    name: "Родионова Анастасия",
    direction: "hip-hop",
    photo: "/images/teachers/teacher-2.jpg",
    video: "",
    price: "1500 ₽",
    schedule: "Вт, Чт — 19:00",
    bio: "Преподаватель hip-hop для начинающих и продолжающих. На занятиях уделяет внимание технике и музыкальности.",
  },
  {
    id: 3,
    name: "Макарова Анжелика",
    direction: "jazz-funk",
    photo: "/images/teachers/teacher-3.jpg",
    video: "/videos/teachers/teacher-3.mp4",
    price: "1700 ₽",
    schedule: "Пн, Пт — 19:30",
    bio: "Преподаватель jazz-funk. Энергичные тренировки, яркие постановки и работа над артистичностью.",
  },
  {
    id: 4,
    name: "Малова Наталья",
    direction: "dance-mix",
    photo: "/images/teachers/teacher-4.jpg",
    video: "/videos/teachers/teacher-4.mp4",
    price: "1400 ₽",
    schedule: "Вт, Сб — 12:00",
    bio: "Преподаватель dance-mix. Сочетает разные танцевальные направления и помогает раскрыть индивидуальный стиль.",
  },
  {
    id: 5,
    name: "Матюшкина Ирина",
    direction: "dance-mix",
    photo: "/images/teachers/teacher-5.jpg",
    video: "/videos/teachers/teacher-5.mp4",
    price: "1400 ₽",
    schedule: "Ср, Сб — 14:00",
    bio: "Опытный преподаватель танцев. Занятия подходят как новичкам, так и танцорам с базовой подготовкой.",
  },
  {
    id: 6,
    name: "Маншилина Каролина",
    direction: "dance-mix",
    photo: "",
    video: "/videos/teachers/teacher-6.mp4",
    price: "1500 ₽",
    schedule: "Пн, Чт — 17:30",
    bio: "Преподаватель dance-mix с творческим подходом. Большое внимание уделяет пластике, координации и эмоциям.",
  },
  {
    id: 7,
    name: "Галкина Юлия",
    direction: "breaking",
    photo: "/images/teachers/teacher-7.jpg",
    video: "/videos/teachers/teacher-7.mp4",
    price: "1600 ₽",
    schedule: "Вт, Пт — 18:00",
    bio: "Преподаватель breaking. Помогает освоить базовые элементы, силовые движения и фристайл.",
  },
  {
    id: 8,
    name: "Николаева Анна",
    direction: "breaking",
    photo: "/images/teachers/teacher-8.jpg",
    video: "/videos/teachers/teacher-8.mp4",
    price: "1600 ₽",
    schedule: "Ср, Сб — 16:00",
    bio: "Тренер по breaking. Занятия направлены на развитие силы, координации и индивидуального стиля.",
  },
  {
    id: 9,
    name: "Урлапова Екатерина",
    direction: "breaking",
    photo: "/images/teachers/teacher-9.jpg",
    video: "/videos/teachers/teacher-9.mp4",
    price: "1600 ₽",
    schedule: "Пн, Пт — 18:30",
    bio: "Преподаватель breaking для разных уровней подготовки. Акцент на технику, музыкальность и уверенность.",
  },
  {
    id: 10,
    name: "Алексеев Максим",
    direction: "k-pop",
    photo: "/images/teachers/teacher-10.jpg",
    video: "/videos/teachers/teacher-10.mp4",
    price: "1500 ₽",
    schedule: "Вт, Чт — 18:00",
    bio: "Преподаватель K-pop. Разбирает хореографии популярных исполнителей и помогает улучшить технику.",
  },
  {
    id: 11,
    name: "Маркин Роман",
    direction: "k-pop",
    photo: "/images/teachers/teacher-11.jpg",
    video: "/videos/teachers/teacher-11.mp4",
    price: "1500 ₽",
    schedule: "Ср, Пт — 19:00",
    bio: "Преподаватель K-pop с акцентом на точность движений, синхронность и сценическую подачу.",
  },
  {
    id: 12,
    name: "Чибиряев Егор",
    direction: "k-pop",
    photo: "/images/teachers/teacher-12.jpg",
    video: "/videos/teachers/teacher-12.mp4",
    price: "1500 ₽",
    schedule: "Пн, Сб — 15:00",
    bio: "Преподаватель K-pop. Помогает ученикам быстро запоминать хореографии и работать над выразительностью.",
  },
  {
    id: 13,
    name: "Федулова Таисия",
    direction: "contemporary",
    photo: "/images/teachers/teacher-13.jpg",
    video: "/videos/teachers/teacher-13.mp4",
    price: "1700 ₽",
    schedule: "Вт, Чт — 20:00",
    bio: "Преподаватель contemporary. На занятиях внимание уделяется пластике, импровизации и осознанности движения.",
  },
  {
    id: 14,
    name: "Завьялова Дарья",
    direction: "contemporary",
    photo: "/images/teachers/teacher-14.jpg",
    video: "/videos/teachers/teacher-14.mp4",
    price: "1700 ₽",
    schedule: "Пн, Ср — 20:00",
    bio: "Преподаватель contemporary с мягким и внимательным подходом. Помогает раскрыть эмоции через движение.",
  },
  {
    id: 15,
    name: "Волкова Валерия",
    direction: "ladies",
    photo: "/images/teachers/teacher-15.jpg",
    video: "/videos/teachers/teacher-15.mp4",
    price: "1600 ₽",
    schedule: "Пт, Сб — 18:00",
    bio: "Преподаватель направления ladies. Работа над пластикой, женственностью, уверенностью и сценической подачей.",
  },
];

export const direction_data: IDirection[] = [
  { slug: "hip-hop", label: "Hip-Hop" },
  { slug: "dance-mix", label: "Dance-Mix" },
  { slug: "breaking", label: "BREAKING" },
  { slug: "jazz-funk", label: "Jazz-Funk" },
  { slug: "k-pop", label: "K-POP" },
  { slug: "contemporary", label: "CONTEMPORARY" },
  { slug: "ladies", label: "LADIES" },
];
