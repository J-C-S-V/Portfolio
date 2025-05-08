"use client";
import { useState } from "react";
import data from "../data/projects.json";
import styles from "./modal.module.css";
import { IconOpenNewTab } from "../../../public/svg/icons";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  info: string | null;
};

export function Modal({ title, isOpen, onClose, info }: ModalProps) {
  if (!isOpen) return null;

  const infoCardTitle =
    info === "web"
      ? data.categories[0].projects[0].name
      : info === "email"
      ? data.categories[1].projects[0].name
      : info === "apps"
      ? data.categories[2].projects[0].name
      : "";

  const infoCardTitle2 =
    info === "web"
      ? data.categories[0].projects[1].name
      : info === "email"
      ? data.categories[1].projects[1].name
      : info === "apps"
      ? data.categories[2].projects[1].name
      : "";

  const infoCardTitle3 =
    info === "web"
      ? data.categories[0].projects[2].name
      : info === "email"
      ? data.categories[1].projects[2].name
      : info === "apps"
      ? data.categories[2].projects[2].name
      : "";

  const infoCardDescription =
    info === "web"
      ? data.categories[0].projects[0].description
      : info === "email"
      ? data.categories[1].projects[0].description
      : info === "apps"
      ? data.categories[2].projects[0].description
      : "";

  const infoCardDescription2 =
    info === "web"
      ? data.categories[0].projects[1].description
      : info === "email"
      ? data.categories[1].projects[1].description
      : info === "apps"
      ? data.categories[2].projects[1].description
      : "";

  const infoCardDescription3 =
    info === "web"
      ? data.categories[0].projects[2].description
      : info === "email"
      ? data.categories[1].projects[2].description
      : info === "apps"
      ? data.categories[2].projects[2].description
      : "";

  const technologiesList =
    info === "web"
      ? data.categories[0].projects[0].technologies
      : info === "email"
      ? data.categories[1].projects[0].technologies
      : info === "apps"
      ? data.categories[2].projects[0].technologies
      : [];

  const technologiesList2 =
    info === "web"
      ? data.categories[0].projects[1].technologies
      : info === "email"
      ? data.categories[1].projects[1].technologies
      : info === "apps"
      ? data.categories[2].projects[1].technologies
      : [];

  const technologiesList3 =
    info === "web"
      ? data.categories[0].projects[2].technologies
      : info === "email"
      ? data.categories[1].projects[2].technologies
      : info === "apps"
      ? data.categories[2].projects[2].technologies
      : [];

  return (
    <div className={`${styles["modalContainer"]} active`}>
      <div className={styles.modal}>
        <h2 className={styles.modal__title}>{title}</h2>
        <button onClick={onClose} className={styles["modal__close-button"]}>
          X
        </button>
        <div className={styles["modal__articles-container"]}>
          <Card
            cardName={infoCardTitle}
            cardDescription={infoCardDescription}
            technologiesList={technologiesList}
          />
          <Card
            cardName={infoCardTitle2}
            cardDescription={infoCardDescription2}
            technologiesList={technologiesList2}
          />
          <Card
            cardName={infoCardTitle3}
            cardDescription={infoCardDescription3}
            technologiesList={technologiesList3}
          />
        </div>
      </div>
    </div>
  );
}

function Card({
  cardName,
  cardDescription,
  technologiesList = [],
}: {
  cardName: string;
  cardDescription: string;
  technologiesList?: string[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className={styles.article}>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={styles["article__image-container"]}
      >
        <a
          className={styles.article__link}
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.article__image}
            src="test_website.png"
            alt="test website"
          />
        </a>
        <span className={`article__icon-container ${isHovered ? "show" : ""}`}>
          Open <IconOpenNewTab />
        </span>
      </div>
      <h2 className={styles.article__title}>{cardName}</h2>
      <p className={styles.article__description}>{cardDescription}</p>
      <footer className={styles.article__footer}>
        <h3 className={styles["article__technologies-title"]}>Technologies</h3>
        <ul className={styles["article__technologies-list"]}>
          {technologiesList.map((technology, index) => (
            <li key={index} className={styles["article__technology-item"]}>
              {technology}
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
