import { cookies } from "next/headers";
import Image from "next/image";
import styles from "./page.module.scss";
import Feature from "./components/Feature";
import Popup from "./components/popup";

const features = [
  {
    icon: "/images/ad.svg",
    text: "Loại bỏ toàn bộ quảng cáo",
  },
  {
    icon: "/images/download.svg",
    text: "Tùy chỉnh giao diện ứng dụng",
  },
  {
    icon: "/images/brush.svg",
    text: "Lưu trữ nhạc không giới hạn",
  },
  {
    icon: "/images/waves.svg",
    text: "Phát nhạc theo thứ tự tuỳ chỉnh",
  },
  {
    icon: "/images/waves.svg",
    text: "Nghe và tải nhạc chất lượng Lossless",
  },
  {
    icon: "/images/waves.svg",
    text: "Mở khoá các tính năng nghe nhạc nâng cao",
  },
  {
    icon: "/images/waves.svg",
    text: "Thêm hiệu ứng cho lời bài hát",
  },
  {
    icon: "/images/waves.svg",
    text: "Ưu tiên hiển thị bình luận",
  },
  {
    icon: "/images/waves.svg",
    text: "Mở rộng khả năng Upload ",
  },
];

export default async function Home() {

  // call api check user login
  const res = await fetch("http://localhost:3000/api/user");
  const data = await res.json();
  const isLoggedIn = !!data.user.id;

  return (<>{isLoggedIn ? (
    <> 
 
    </>
      <Popup />
    ) : (
      <button className={styles.button}>
        Đăng nhập để nhận gói Plus miễn phí
      </button>
    )}
  </>
    
  );
}
