"use client";
import { useState } from "react";
import Projects from "./_components/projects";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import { Modal } from "./_components/modal";
import { motion } from "motion/react";

export default function Home() {
  const [modal, setModal] = useState<"web" | "email" | "apps" | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      className="page-container"
    >
      <div className="content-container">
        <Projects onOpenModal={setModal} />
        <Contact />
      </div>
      <Footer />
      <Modal
        title={
          modal === "web"
            ? "Web Development"
            : modal === "email"
            ? "Email Development"
            : modal === "apps"
            ? "Apps Development"
            : ""
        }
        isOpen={modal !== null}
        onClose={() => setModal(null)}
        info={modal}
      />
    </motion.div>
  );
}
