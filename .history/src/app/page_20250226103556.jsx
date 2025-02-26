import Image from 'next/image';
import styles from "./page.module.scss";
import Feature from './components/Feature';
import { useState } from "react";

const features = [
  {
    icon: '/images/ad.svg',
    text: 'Loại bỏ toàn bộ quảng cáo',
  },
  {
    icon: '/images/download.svg',
    text: 'Lưu trữ nhạc không giới hạn',
  },
  {
    icon: '/images/brush.svg',
    text: 'Tùy chỉnh giao diện ứng dụng',
  },
  {
    icon: '/images/waves.svg',
    text: 'Nghe và tải nhạc chất lượng Lossless',
  },
];
const [isOpen, setIsOpen] = useState(false);

export default function Home() {


  return (
    <div className={styles.landingPage}>

      <Image className={styles.btnClose} src="/images/xmark.svg" alt="image" width={40} height={40} />

      <p className={styles.title}> Nhận miễn phí ngay</p>

      <Image src="/images/text.svg" className={styles.img} alt="image" width={239} height={40} />

      <p className={styles.text}>Mở khoá các tính năng nâng cao trong  <strong>7 ngày</strong>.
        Bấm nhận gói để trải nghiệm nghe nhạc tốt hơn.</p>

      <div className={styles.wrapper}>
        {features.map((item) => (
          <Feature {...item} />
        ))}
        <a className={styles.more} href="">Xem thêm đặc quyền <Image src="/images/arrow.svg" alt="image" width={12} height={12} /> </a>
      </div>

      <button type="button" className={styles.btnSubmit} onClick={() => setIsOpen(true)}>Nhận gói Plus miễn phí</button>
      
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
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
