import Projects from "./_components/projects";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import { ModalEmail, ModalWeb, ModalApps } from "./_components/modal-web";

export default function Home() {
  return (
    <div className="page-container">
      <ModalWeb />
      <ModalEmail />
      <ModalApps />
      <div className="content-container">
        <Projects />
        <Contact />
      </div>
      <div className="minigame-container">{/* <Minigame /> */}</div>
      <Footer />
    </div>
  );
}
