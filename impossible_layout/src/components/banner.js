import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/bento_layout.module.css";

function Banner() {
    return (
        <div className={styles.bento_layout}>
            <div className={styles.icons_bar}>
                <div className={styles.container_icons}>
                    <div className={styles.logo_img}>GZ</div>
                    <div className={styles.options_menu}>
                        <ul>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faHouse} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFilm} />
                                </a>
                            </li>
                            <li className={styles.selected}>
                                <a href="#">
                                    <FontAwesomeIcon icon={faStar} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.user_logo}></div>
                    <div className={styles.extra_option}>
                        <a href="#">
                            <FontAwesomeIcon icon={faRankingStar} />
                        </a>
                    </div>
                </div>
                <div className={styles.secondary_btns}>
                    <div className={styles.button_circular}>
                        <a href="#">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
                    </div>
                    <div
                        className={`
                            ${styles.button_circular} ${styles.large_btn_circular}
                        `}>
                        <div>
                            <FontAwesomeIcon icon={faMoon} />
                        </div>
                        <div className={styles.selected_theme}>
                            <FontAwesomeIcon icon={faSun} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.center_banner}>
                <div className={styles.buttons_left_right}>
                    <div className={styles.button_prev}>Back to Home</div>
                    <div className={styles.button_next}>Next: The Null</div>
                </div>
                <div className={styles.portrait_img}>
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
                                <div className={styles.icons_content_dnd}>
                                    <div>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faHeart} />
                                            32,190
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <FontAwesomeIcon
                                                icon={faCircleInfo}
                                            />
                                            Synopsis
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faPlay} />
                                            Trailer
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.logo_circle}></div>
                    </div>
                    <div className={styles.container_btn_lft}>
                        <div className={styles.diagonal_left}></div>
                        <div className={styles.container_box}>
                            <div
                                className={`${styles.main_container_left_box} ${styles.inner_banner}`}>
                                <div className={styles.off_tag_container}>
                                    <div className={styles.off_tag}>
                                        <FontAwesomeIcon icon={faTag} />
                                    </div>
                                </div>
                                <div className={styles.promos_container}>
                                    <p>20% off</p>
                                    <div>
                                        <p>Free Popcorn</p>
                                        <p>5% off</p>
                                    </div>
                                </div>
                                <div className={styles.promos_title}>
                                    <p>Promo</p>
                                    <div>
                                        <p>24</p>
                                        <p>ready</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container_top_center}>
                        <div className={styles.top_container_main}>
                            <div>
                                <a href="#">
                                    <FontAwesomeIcon icon={faReceipt} />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <FontAwesomeIcon icon={faWallet} />
                                </a>
                            </div>
                            <div>
                                <a className={styles.alert_msg} href="#">
                                    <FontAwesomeIcon icon={faBell} />
                                </a>
                            </div>
                        </div>
                        <div className={styles.diagonal_1}></div>
                        <div className={styles.diagonal_2}></div>
                    </div>
                </div>
            </div>
            <div className={styles.calendar_section}>
                <div className={styles.top_part_right}>
                    <div className={styles.top_part_slot}>
                        <p>Slot</p>
                    </div>
                    <div className={styles.top_part_address}>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>1875 Robson st Vancouver</p>
                        </div>
                    </div>
                    <div className={styles.top_part_calendar}>
                        <div className={styles.top_part_cal_btn}>
                            <div className={styles.selected_btn}>18:00</div>
                            <div>21:25</div>
                            <div>23:50</div>
                        </div>
                        <div className={styles.top_part_cal_cal}>
                            <div className={styles.div1}> </div>
                            <div className={styles.div2}> </div>
                            <div className={styles.div3}> </div>
                            <div className={styles.div4}> </div>
                            <div
                                className={`${styles.div5} ${styles.selected_seat}`}></div>
                            <div
                                className={`${styles.div6} ${styles.selected_seat}`}></div>
                            <div
                                className={`${styles.div7} ${styles.selected_seat}`}></div>
                            <div
                                className={`${styles.div8} ${styles.selected_seat}`}></div>
                            <div className={styles.div9}> </div>
                            <div className={styles.div10}> </div>
                            <div className={styles.div11}> </div>
                            <div className={styles.div12}> </div>
                            <div className={styles.div13}> </div>
                            <div className={styles.div14}> </div>
                            <div className={styles.div15}> </div>
                            <div className={styles.div16}> </div>
                            <div className={styles.div17}> </div>
                            <div className={styles.div18}> </div>
                            <div className={styles.div19}> </div>
                            <div className={styles.div20}> </div>
                            <div className={styles.div21}> </div>
                            <div className={styles.div22}> </div>
                            <div className={styles.div23}> </div>
                            <div className={styles.div24}> </div>
                            <div className={styles.div25}> </div>
                            <div className={styles.div26}> </div>
                            <div className={styles.div27}> </div>
                            <div className={styles.div28}> </div>
                            <div className={styles.div29}> </div>
                            <div className={styles.div30}> </div>
                            <div className={styles.div31}> </div>
                            <div
                                className={`${styles.div31} ${styles.selected_seat}`}></div>
                            <div
                                className={`${styles.div32} ${styles.selected_seat}`}></div>
                            <div
                                className={`${styles.div33} ${styles.selected_seat}`}></div>
                            <div
                                className={`${styles.div34} ${styles.selected_seat}`}></div>
                            <div className={styles.div35}> </div>
                            <div className={styles.div36}> </div>
                            <div className={styles.div37}> </div>
                            <div
                                className={`${styles.div38} ${styles.selected_seat}`}></div>
                            <div
                                className={`${styles.div39} ${styles.selected_seat}`}></div>
                            <div
                                className={`${styles.div40} ${styles.selected_seat}`}></div>
                            <div className={styles.div41}> </div>
                            <div className={styles.div42}> </div>
                            <div
                                className={`${styles.div43} ${styles.selected_seat}`}></div>
                            <div
                                className={`${styles.div44} ${styles.selected_seat}`}></div>
                            <div className={styles.div45}> </div>
                            <div className={styles.div46}> </div>
                            <div className={styles.div47}> </div>
                            <div className={styles.div48}> </div>
                            <div className={styles.div49}> </div>
                            <div className={styles.div50}> </div>
                            <div className={styles.div51}> </div>
                            <div className={styles.div52}> </div>
                            <div
                                className={`${styles.div53} ${styles.exit_door}`}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </div>
                            <div
                                className={`${styles.div54} ${styles.exit_door}`}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </div>
                        </div>
                        <div className={styles.top_part_cal_info}>
                            <div className={styles.cal_info_string}>
                                <p>Available</p>
                                <div>
                                    <p>158</p>
                                    <p>seats</p>
                                </div>
                            </div>
                            <div className={styles.cal_info_circle}>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom_part_right}>
                    <div className={styles.labels_casting}>
                        <p>Casting</p>
                        <div
                            className={styles.labels_casting_buttons_container}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className={styles.image_casting}>
                        <div className={styles.image_casting_buttons}>
                            <div>
                                <img src="https://imgs.search.brave.com/gkk_r2JudHmMAAk7Pm7LuwevHTAJKyrESxRMXN9j3qI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/em1vLmFpL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzAxL0lt/YWdlLWdlbmVyYXRl/ZC1ieS1aTU9zLUFJ/LWFuaW1lLWdlbmVy/YXRvci53ZWJw" />
                                Shitoda
                            </div>
                            <div>
                                <img src="https://imgs.search.brave.com/1M_9SrDFA8GNgwzgK6gchL_GKYU-_16UUbBOiGLf7f0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VjLzE5/LzY2L2VjMTk2NjI2/M2E2MjkxNDI2ZmJm/ZWI2Yjg0MWIxNGY2/LmpwZw" />
                                James Carl
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.main_container_left_box} ${styles.inner_seats}`}>
                        <div className={styles.off_tag_container}>
                            <div className={styles.off_tag}>
                                <FontAwesomeIcon icon={faTag} />
                            </div>
                        </div>
                        <div className={styles.promos_container}>
                            <p>20% off</p>
                            <div>
                                <p>Free Popcorn</p>
                                <p>5% off</p>
                            </div>
                        </div>
                        <div className={styles.promos_title}>
                            <p>Promo</p>
                            <div>
                                <p>24</p>
                                <p>ready</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
