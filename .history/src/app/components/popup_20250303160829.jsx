"use client";
import { useState } from "react";
import styles from "./popup.module.scss";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      {/* Button to Open Popup */}
      <button onClick={() => setIsOpen(true)} className={styles.button}>
        Nhận gói Plus miễn phí
      </button>

      {/* Popup Content */}
      {isOpen && (
        <div className={styles.wrapper}>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    <div>
    </div>
  );
}
