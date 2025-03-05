"use client";
import Image from "next/image";
import Feature from "./Feature";
import styles from "./landingPage.module.scss"
import Modal from "./Modal";

export default function LandingPage({ id, isSuccess, message }) {
    console.log(id, isSuccess, message);
    return (
        <>
            <div className={styles.landingPage}>
                <Image
                    className={styles.btnClose}
                    src="/images/xmark.svg"
                    alt="image"
                    width={36}
                    height={36}
                />

                <p className={styles.title}> Nhận miễn phí ngay</p>
                <Image
                    src="/images/item.png"
                    className={styles.img}
                    alt="image"
                    width={239}
                    height={40}
                />

                <p className={styles.text}>
                    Mở khoá các tính năng nâng cao trong <strong>7 ngày</strong>. Bấm nhận
                    gói để trải nghiệm nghe nhạc tốt hơn.
                </p>
                <Feature />
                <div className={styles.btnWrapper}>
                    <button className={styles.btnSubmit}>
                        {message}
                    </button>
                </div>

            </div>
            {id && <Modal isSuccess={isSuccess} />}
        </>
    )
}