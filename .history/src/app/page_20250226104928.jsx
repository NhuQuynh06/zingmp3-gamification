import Image from 'next/image';
import styles from "./page.module.scss";
import Feature from './components/Feature';
import po

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
      <Popup />
    </div>
  );
}
