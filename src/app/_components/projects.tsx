"use client";
import Image from "next/image";
import "./projects.css";

type ProjectsProps = {
  onOpenModal: (type: "web" | "email" | "apps") => void;
};

export default function Projects({ onOpenModal }: ProjectsProps) {
  return (
    <div className="projects-container">
      <h2 className="h2">Projects</h2>
      <aside className="laptops-container">
        <div className="image-container-1" data-tooltip="Web Development">
          <Image
            className="laptops laptop-1"
            src="/svg/laptop.svg"
            alt="Laptop for web development"
            width={200}
            height={200}
            onClick={() => onOpenModal("web")}
          />
        </div>
        <div className="image-container-2" data-tooltip="Apps Development">
          <Image
            className="laptops laptop-2"
            src="/svg/laptop_2.svg"
            alt="Laptop for apps development"
            width={200}
            height={200}
            onClick={() => onOpenModal("apps")}
          />
        </div>
        <div className="image-container-3" data-tooltip="Email Development">
          <Image
            className="laptops laptop-3"
            src="/svg/laptop_2.svg"
            alt="Laptop for email development"
            width={200}
            height={200}
            onClick={() => onOpenModal("email")}
          />
        </div>
      </aside>
    </div>
  );
}
