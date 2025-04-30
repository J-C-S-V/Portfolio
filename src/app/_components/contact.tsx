import Image from "next/image";
import "./contact.css";

export default function Home() {
  return (
    <article className="card-container">
      <div className="line"></div>
      <div>
        <section className="text-picture-container">
          <header className="text-container">
            <h2 className="card-name">Juan Sanchez</h2>
            <h3 className="card-title">Front-end developer</h3>
          </header>
          <div>
            <Image
              className="card__img"
              src="/img_profile.jpg"
              alt="Juan Sanchez profile picture"
              width={120}
              height={120}
            />
          </div>
        </section>
        <p className="text-description">
          +2 years of experience in web development, specializing in front-end
          development. I have a strong passion for creating beautiful user
          interfaces and enhancing user experiences.
        </p>
      </div>
    </article>
  );
}
