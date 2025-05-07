"use client";
import { useState } from "react";
import "./modal.css";
import { IconOpenNewTab } from "../../../public/svg/icons";
// import newf from "laptop.svg";
// Import an image

// Animation scale 2 on the image, then an opacity 0.5 on the image, then a button indication to _blank open

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

function Card() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="article">
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="article__image-container"
      >
        <a
          className="article__link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="article__image"
            src="test_website.png"
            alt="test website"
          />
        </a>
        <span className={`article__icon-container ${isHovered ? "show" : ""}`}>
          Open <IconOpenNewTab />
        </span>
      </div>
      <h2 className="article__title">title</h2>
      <p className="article__description">
        DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatibus, cumque, quibusdam, voluptates doloribus
      </p>
      <footer className="article__footer">
        <h3 className="article__technologies-title">technologies</h3>
        <ul className="article__technologies-list">
          <li className="article__technology">HTML</li>
          <li className="article__technology">CSS</li>
          <li className="article__technology">JavaScript</li>
          <li className="article__technology">React</li>
          <li className="article__technology">Next.js</li>
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
        <button onClick={onClose} className="modal__close-button">
          X
        </button>
        <h2 className="modal__title">{title}</h2>
        <div className="modal__articles-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
