import styles from "./popup.module.scss";

const Feature = ({ title, des, button }) => {
    return (
        <div className={styles.wrap}>
            <Image className={styles.icon} src={icon} alt="image" width={40} height={40} />
            <p className={styles.text}>{text}</p>
        </div>

    );
};

export default Feature;