import Image from 'next/image';
import styles from "./feature.module.scss";

const Feature = ({id, icon, text }) => {
    return (
        <div className={styles.item} key={i}>
            <Image className={styles.icon} src={icon} alt="image" width={40} height={40} />
            <p className={styles.text}>{text}</p>
        </div>

    );
};

export default Feature;