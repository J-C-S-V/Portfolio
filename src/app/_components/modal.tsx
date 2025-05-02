"use client";
import "./modal.css";

// Animation scale 2 on the image, then an opacity 0.5 on the image, then a button indication to _blank open

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

function Card() {
  return (
    <article className="article-container">
      <h2>title</h2>
      <img src="/images/placeholder.png" alt="placeholder" />
      <p>
        DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatibus, cumque, quibusdam, voluptates doloribus
      </p>
      <footer>
        <h3>technologies</h3>
        <ul className="technologies-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </footer>
    </article>
  );
}

export function Modal({ title, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-container active">
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
        <div className="articles-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
