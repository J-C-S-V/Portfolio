"use client";
import "./modal.css";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ title, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-container active">
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}
