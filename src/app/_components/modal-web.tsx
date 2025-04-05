"use client";
import "./modal-web.css";

export function ModalWeb() {
  const handleModalClose = () => {
    const modal = document.querySelector(".modal-container");
    modal?.classList.remove("active");
  };
  return (
    <div className="modal-container">
      <div className="modal">
        <h2 className="modal-title">Web Development</h2>
        <button onClick={handleModalClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export function ModalEmail() {
  const handleModalClose = () => {
    const modal = document.querySelector(".modal-container-email");

    modal?.classList.remove("active");
  };
  return (
    <div className="modal-container-email">
      <div className="modal">
        <h2 className="modal-title">Email Development</h2>
        <button onClick={handleModalClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export function ModalApps() {
  const handleModalClose = () => {
    const modal = document.querySelector(".modal-container-apps");
    modal?.classList.remove("active");
  };
  return (
    <div className="modal-container-apps">
      <div className="modal">
        <h2 className="modal-title">Apps Development</h2>
        <button onClick={handleModalClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}
