"use client";
import { useState } from "react";
import styles from "./popup.module.scss";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to Open Popup */}
      <button
        onClick={() => setIsOpen(true)}
        className={styles.button}
      >
        Nhận gói Plus miễn phí
      </button>

      {/* Popup Content */}
      {isOpen && (
        <div className={styles.wrapper}>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
              Close
              </button>
          </div>
        </div>
      )}
    </div>
  );
}
