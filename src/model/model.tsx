import { useEffect } from "react";
import "../style.css";

export interface IMain {
  id: number;
  image: string;
}
export interface ModalProps {
  isOpen: boolean; // Флаг открытия
  onClose: () => void; // Закрытие модалки
  title?: string; // Заголовок
  children: React.ReactNode; // Контент
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Не закрывать при клике внутри
      >
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-body">{children}</div>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;
