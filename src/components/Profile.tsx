'use client';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';

export const ImageProfile = () => {
  return (
    <div className={styles['card__img-container']}>
      <img
        className={styles.card__img}
        src="/img_profile.jpg"
        alt="Juan Sanchez profile picture"
        width={120}
        height={120}
      />
      <div className={styles['card__work-tag']}>
        <div className={styles['card__circle']}></div>
        <span>Open to work!</span>
      </div>
    </div>
  );
};

export const DescriptionProfile = () => {
  return (
    <article className={styles.card}>
      <div className={styles.card__line}></div>
      <div className={styles['card__text-picture-container']}>
        <section>
          <header className={styles['card__text-container']}>
            <h2 className={styles['card__name']}>Juan Sanchez</h2>
            <h3 className={styles['card__title']}>Front-end developer</h3>
          </header>
        </section>
        <p className={styles['card__description']}>
          +2 years of experience in web development, specializing in front-end development. I have a strong passion for
          creating beautiful user interfaces and enhancing user experiences.
        </p>
        <p className={styles['card__description']}>
          I have experience with modern technologies such as React, TypeScript, Next.js, Tailwind CSS, Vite, Windsurf
          and more.
        </p>
        <p className={styles['card__description']}>
          I am currently looking for new challenges to grow and improve my skills while building high quality
          products/services.{' '}
          <Link className={styles['card__link']} to="/about">
            Read more...
          </Link>
        </p>
      </div>
    </article>
  );
};
