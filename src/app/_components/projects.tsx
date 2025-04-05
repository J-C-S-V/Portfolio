"use client";
import Image from "next/image";
import "./projects.css";

export default function Contact() {
  const handleModalOpen = () => {
    const modal = document.querySelector(".modal-container");
    modal?.classList.add("active");
  };

  const handleModalOpenEmail = () => {
    const modal = document.querySelector(".modal-container-email");
    modal?.classList.add("active");
  };

  const handleModalOpenApps = () => {
    const modal = document.querySelector(".modal-container-apps");
    modal?.classList.add("active");
  };

  return (
    <div className="projects-container">
      <h2 className="h2">Projects</h2>
      <aside className="laptops-container">
        <div className="image-container-1" data-tooltip="Web Development">
          <Image
            className="laptops laptop-1"
            src="/laptop.svg"
            alt="Juan Sanchez profile picture"
            width={200}
            height={200}
            onClick={handleModalOpen}
          />
        </div>
        <div className="image-container-2" data-tooltip="Email Development">
          <Image
            className="laptops laptop-2"
            src="/laptop_2.svg"
            alt="Juan Sanchez profile picture"
            width={200}
            height={200}
            onClick={handleModalOpenEmail}
          />
        </div>
        <div className="image-container-3" data-tooltip="Apps Development">
          <Image
            className="laptops laptop-3"
            src="/laptop_2.svg"
            alt="Juan Sanchez profile picture"
            width={200}
            height={200}
            onClick={handleModalOpenApps}
          />
        </div>
      </aside>
    </div>
  );
}
