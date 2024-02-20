import React from "react";
import styles from "../styles/bento_layout.module.css";

function Banner() {
    return (
        <div className={styles.bento_layout}>
            <div className={styles.icons_bar}>hola</div>
            <div className={styles.center_banner}>
                <div className={styles.portrait_img}>
                    Hola
                    <div className={styles.container_btn_lft}>
                        container bottom left
                    </div>
                    <div className={styles.container_top_center}>
                        container top center
                        <div className={styles.diagonal_1}></div>
                        <div className={styles.diagonal_2}></div>
                    </div>
                </div>
            </div>
            <div className={styles.calendar_section}>hola</div>
        </div>
    );
}

export default Banner;
