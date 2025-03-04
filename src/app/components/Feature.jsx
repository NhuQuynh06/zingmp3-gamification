import Image from 'next/image';
import styles from "./feature.module.scss";
import { Fragment } from 'react';

const featuresList = [
    {
        img: "/images/feature-1.png",
        content: "Loại bỏ toàn bộ quảng cáo",
    },
    {
        img: "/images/feature-2.png",
        content: "Tùy chỉnh giao diện ứng dụng",
    },
    {
        img: "/images/feature-3.png",
        content: "Lưu trữ nhạc không giới hạn",
    },
    {
        img: "/images/feature-4.png",
        content: "Phát nhạc theo thứ tự tuỳ chỉnh",
    },
    {
        img: "/images/feature-5.png",
        content: "Nghe và tải nhạc chất lượng Lossless",
    },
    {
        img: "/images/feature-6.png",
        content: "Mở khoá các tính năng nghe nhạc nâng cao",
    },
    {
        img: "/images/feature-7.png",
        content: "Thêm hiệu ứng cho lời bài hát",
    },
    {
        img: "/images/feature-8.png",
        content: "Ưu tiên hiển thị bình luận",
    },
    {
        img: "/images/feature-9.png",
        content: "Mở rộng khả năng Upload ",
    },
];
export default function Feature() {
    return (
        <div className={styles.featureWrapper}>
            {featuresList.map((item, i) => (
                <Fragment key={i} >
                    <img className={styles.featureImg} src={item.img} alt="image" />
                    {/* <Image className={styles.featureImg} src={item.img} alt="image" width={390} height={390} /> */}
                    <p className={styles.content}>{item.content}</p>

                </Fragment>
            ))}
            <p className={styles.textDecor}>Zing MP3 Plus</p>
        </div >
    );
};