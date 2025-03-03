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
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Popup
      </button>

      {/* Popup Content */}
      {isOpen && (
        <div className={styles.wrapper}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Popup Title</h2>
            <p>This is a simple popup in Next.js!</p>

            {/* Close Button */}
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
