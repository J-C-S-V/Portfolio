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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nisi
          dolorem dolores ullam omnis sed excepturi error, sint aperiam
          accusamus, quia laborum maiores consectetur voluptate consequuntur
          placeat sit. Non, corrupti!
        </p>
      </div>
    </article>
  );
}
