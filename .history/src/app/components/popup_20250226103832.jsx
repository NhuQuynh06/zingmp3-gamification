import styles from "./popup.module.scss";

const Feature = ({ title, des, button }) => {
    return (
        <div className={styles.wrapperPopup}>
            <p className={styles.text}>{title}</p>
        </div>

    );
};

export default Feature;