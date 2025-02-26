import styles from "./popup.module.scss";

const Feature = ({ title, des, button }) => {
    return (
        <div className={styles.wrapperPopup}>
            <h3 className={styles.text}>{title}</h3>
            <h3 className={styles.text}>{title}</h3>
            
        </div>

    );
};

export default Feature;