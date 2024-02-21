import React from "react";
import styles from "../styles/bento_layout.module.css";

function Banner() {
    return (
        <div className={styles.bento_layout}>
            <div className={styles.icons_bar}>hola</div>
            <div className={styles.center_banner}>
                <div className={styles.portrait_img}>
                    Hola
                    <div className={styles.bottom_container}>
                        <div className={styles.date_container}>2</div>
                        <div className={styles.rest_content_dnd}>D&D</div>
                        <svg className={styles.svg_bottom_dnd}>
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur
                                        in="SourceGraphic"
                                        stdDeviation="10"></feGaussianBlur>
                                    <feColorMatrix
                                        in="name"
                                        mode="matrix"
                                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -15"></feColorMatrix>
                                    <feBlend in="SourceGraphic"></feBlend>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className={styles.container_btn_lft}>
                        <div className={styles.diagonal_left}></div>
                        <div className={styles.container_box}>
                            <div className={styles.main_container_left_box}>
                                hola
                            </div>
                        </div>
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
