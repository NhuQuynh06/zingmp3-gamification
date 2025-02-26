import styles from "./popup.module.scss";

const Feature = ({ title, des, button }) => {
    return (
        <div className={styles.wrapperPopup}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.des}>{des}</p>
            <p className={styles.des}>{des}</p>
            
        </div>

    );
};

export default Feature;