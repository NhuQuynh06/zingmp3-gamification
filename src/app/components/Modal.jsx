import Image from 'next/image'
import styles from "./modal.module.scss";
import classnames from 'classnames';

export default function Modal({ isSuccess }) {
  console.log(isSuccess)
  return (
    <>
      <div className={styles.modal}>
        <div className={classnames(styles.modalDialog, isSuccess && styles.success)}>
          {isSuccess ? (
            <>
              <h5 className={styles.title}>Chúc mừng bạn</h5>
              <p className={styles.des}>Bạn đã nhận 7 ngày miễn phí sử dụng Zingmp3 Plus.</p>
              <button className={styles.btnSubmit}>Xem quyền lợi</button>
              <a href="" className={styles.link}>Trở về</a>
            </>
          ) : (
            <>
              <h5 className={styles.title}>Không thành công</h5>
              <p className={styles.des}>Rất tiếc bạn không thuộc danh sách
                nhận Zing MP3 Plus miễn phí.</p>
              <button className={styles.btnSubmit}>Đóng</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
