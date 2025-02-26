// import { useState } from "react";
// import styles from "./popup.module.scss";

// const Feature = ({ title, des, button }) => {
//     return (
//         <div className={styles.wrapperPopup}>
//             <h3 className={styles.title}>{title}</h3>
//             <p className={styles.des}>{des}</p>
//             <button type="button" className="btnSubmit">{button}</button>
//         </div>

//     );
// };

// export default Feature;

// import { useState } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <p>asfgjsf</p>
    // <div>
    //   {/* Button to Open Popup */}
    //   <button
    //     onClick={() => setIsOpen(true)}
    //     className="bg-blue-500 text-white px-4 py-2 rounded"
    //   >
    //     Open Popup
    //   </button>

    //   {/* Popup Content */}
    //   {isOpen && (
    //     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    //       <div className="bg-white p-6 rounded-lg shadow-lg">
    //         <h2 className="text-lg font-bold">Popup Title</h2>
    //         <p>This is a simple popup in Next.js!</p>

    //         {/* Close Button */}
    //         <button
    //           onClick={() => setIsOpen(false)}
    //           className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
    //         >
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}
