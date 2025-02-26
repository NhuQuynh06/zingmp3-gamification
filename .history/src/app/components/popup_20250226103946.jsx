import styles from "./popup.module.scss";

const Feature = ({ title, des, button }) => {
    return (
        <div className={styles.wrapperPopup}>
            <h3 className={styles.text}>{title}</h3>
            <p className={styles.des}>{title}</p>
            
        </div>

    );
};

export default Feature;