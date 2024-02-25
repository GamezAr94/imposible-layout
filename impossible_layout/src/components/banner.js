import React from "react";
import styles from "../styles/bento_layout.module.css";

function Banner() {
    return (
        <div className={styles.bento_layout}>
            <div className={styles.icons_bar}>
                <div className={styles.container_icons}>
                    <div className={styles.logo_img}>logo</div>
                    <div className={styles.options_menu}>
                        <ul>
                            <li>
                                <a href="#">a</a>
                            </li>
                            <li>
                                <a href="#">a</a>
                            </li>
                            <li>
                                <a href="#">a</a>
                            </li>
                            <li>
                                <a href="#">a</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.user_logo}>a</div>
                    <div className={styles.extra_option}>a</div>
                </div>
                <div className={styles.secondary_btns}>
                    <div className={styles.button_circular}>a</div>
                    <div
                        className={`
                            ${styles.button_circular} ${styles.large_btn_circular}
                        `}>
                        <div>a</div>
                        <div>a</div>
                    </div>
                </div>
            </div>
            <div className={styles.center_banner}>
                <div className={styles.buttons_left_right}>
                    <div className={styles.button_prev}>Back to Home</div>
                    <div className={styles.button_next}>Next: The Null</div>
                </div>
                <div className={styles.portrait_img}>
                    Hola
                    <div className={styles.container_bottomRight}>
                        <div className={styles.bottom_container}>
                            <div className={styles.date_container}>
                                <p>Oct. 2024</p>
                                <p>02</p>
                            </div>
                            <div className={styles.rest_content_dnd}>
                                <div>
                                    <p>Dungeon</p>
                                    <p>
                                        Dragon <span>&</span>
                                    </p>
                                </div>
                                <div>
                                    <div>a</div>
                                    <div>a</div>
                                    <div>a</div>
                                </div>
                            </div>
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
                        <div className={styles.logo_circle}></div>
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
                        <div className={styles.top_container_main}>
                            <div>a</div>
                            <div>a</div>
                            <div>a</div>
                        </div>
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
