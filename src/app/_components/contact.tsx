import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";

export default function Home() {
  return (
    <article className={styles.card}>
      <div className={styles.card__line}></div>
      <div>
        <section className={styles["card__text-picture-container"]}>
          <header className={styles["card__text-container"]}>
            <h2 className={styles["card__name"]}>Juan Sanchez</h2>
            <h3 className={styles["card__title"]}>Front-end developer</h3>
          </header>
          <div>
            <Image
              className={styles.card__img}
              src="/img_profile.jpg"
              alt="Juan Sanchez profile picture"
              width={120}
              height={120}
            />
          </div>
        </section>
        <p className={styles["card__description"]}>
          +2 years of experience in web development, specializing in front-end
          development. I have a strong passion for creating beautiful user
          interfaces and enhancing user experiences.
          <Link href="/about">Read more</Link>
        </p>
      </div>
    </article>
  );
}
