import Image from "next/image";
import "./contact.css";

export default function Home() {
  return (
    <main className="card-container">
      <div className="flash"></div>
      <div className="line"></div>
      <div>
        <div className="text-picture-container">
          <div className="text-container">
            <div className="card-name">Juan Sanchez</div>
            <div className="card-title">Front-end developer</div>
          </div>
          <div>
            <Image
              className="card__img"
              src="/img_profile.jpg"
              alt="Juan Sanchez profile picture"
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="text-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nisi
          dolorem dolores ullam omnis sed excepturi error, sint aperiam
          accusamus, quia laborum maiores consectetur voluptate consequuntur
          placeat sit. Non, corrupti!
        </div>
      </div>
    </main>
  );
}
