"use client"

import styles from "../styles/Components.module.css"
import {BiMenu} from "react-icons/bi";
import {useEffect, useState} from "react";
import {GrClose} from "react-icons/gr";
import {IoClose} from "react-icons/io5";

export default function Navbar() {
    const [menuActive, setMenuActive] = useState<boolean>(false);

    useEffect(() => {
        // Set menu active
        const navbar = document.querySelector(`.${styles.navbar__mobile}`) as HTMLElement;
        if (menuActive) {
            if (navbar.classList.contains(styles.active)) return;
            navbar.classList.add(styles.active);
            navbar.classList.remove(styles.inactive);
        } else {
            if (!navbar.classList.contains(styles.active)) return;
            navbar.classList.add(styles.inactive);
            navbar.classList.remove(styles.active);
        }
    }, [menuActive]);

    const handleMenuClick = () => {
        setMenuActive(!menuActive);
    }

    return (
        <div className={styles.navbar}>
            <a className={styles.menuBtn} onClick={() => {
                handleMenuClick();
            }}>
                {menuActive ? <IoClose/> : <BiMenu/>}
            </a>

            <div className={styles.navbar__content}>
                <div className={styles.navbar__logo}>
                    <h1><span>Sn</span>Anime</h1>
                </div>

                <div className={styles.navbar__list}>
                    <a className={styles.navbar__listItem} href="#">Top Animes</a>
                    <a className={styles.navbar__listItem} href="#">Anime List</a>
                    <a className={styles.navbar__listItem} href="#">My List</a>
                    <a className={styles.navbar__listItem} href="#">Manga</a>
                </div>

                <div className={[styles.navbar__list, styles.search_login].join(" ")}>
                    {/* Search bar section */}
                    <div className={styles.navbar__search}>
                        <input className={styles.navbar__searchInput} type="text" placeholder="Search..."/>
                        {/* Search results */}
                        <div className={styles.navbar__searchResults}>
                            <div className={styles.navbar__searchResult}>
                                <img className={styles.navbar__searchResultImage}
                                     src="https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=4c9f0b7b4b2b2b2b2b2b2b2b2b2b2b2"
                                     alt="Anime Image"/>
                                <div className={styles.navbar__searchResultInfo}>
                                    <h3 className={styles.navbar__searchResultTitle}>Anime Title</h3>
                                </div>
                            </div>

                            <div className={styles.navbar__searchResult}>
                                <img className={styles.navbar__searchResultImage}
                                     src="https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=4c9f0b7b4b2b2b2b2b2b2b2b2b2b2b2"
                                     alt="Anime Image"/>
                                <div className={styles.navbar__searchResultInfo}>
                                    <h3 className={styles.navbar__searchResultTitle}>Anime Title</h3>
                                </div>
                            </div>
                            <div className={styles.navbar__searchResult}>
                                <img className={styles.navbar__searchResultImage}
                                     src="https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=4c9f0b7b4b2b2b2b2b2b2b2b2b2b2b2"
                                     alt="Anime Image"/>
                                <div className={styles.navbar__searchResultInfo}>
                                    <h3 className={styles.navbar__searchResultTitle}>Anime Title</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className={styles.navbar__listItem} href="#">Login</a>
                    <a className={styles.navbar__listItem} href="#">Sign Up</a>
                </div>
            </div>

            <div className={styles.navbar__mobile}>
                <div className={styles.navbar__mobileLogo}>
                    <h1><span>Sn</span>Anime</h1>
                </div>
                <div className={styles.navbar__search}>
                    <input className={styles.navbar__searchInput} type="text" placeholder="Search..."/>
                    {/* Search results */}
                    <div className={styles.navbar__searchResults}>
                        <div className={styles.navbar__searchResult}>
                            <img className={styles.navbar__searchResultImage}
                                 src="https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=4c9f0b7b4b2b2b2b2b2b2b2b2b2b2b2"
                                 alt="Anime Image"/>
                            <div className={styles.navbar__searchResultInfo}>
                                <h3 className={styles.navbar__searchResultTitle}>Anime Title</h3>
                            </div>
                        </div>

                        <div className={styles.navbar__searchResult}>
                            <img className={styles.navbar__searchResultImage}
                                 src="https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=4c9f0b7b4b2b2b2b2b2b2b2b2b2b2b2"
                                 alt="Anime Image"/>
                            <div className={styles.navbar__searchResultInfo}>
                                <h3 className={styles.navbar__searchResultTitle}>Anime Title</h3>
                            </div>
                        </div>
                        <div className={styles.navbar__searchResult}>
                            <img className={styles.navbar__searchResultImage}
                                 src="https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=4c9f0b7b4b2b2b2b2b2b2b2b2b2b2b2"
                                 alt="Anime Image"/>
                            <div className={styles.navbar__searchResultInfo}>
                                <h3 className={styles.navbar__searchResultTitle}>Anime Title</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.navbar__mobileList}>
                    <a className={styles.navbar__mobileListItem} href="#">Top Animes</a>
                    <a className={styles.navbar__mobileListItem} href="#">Anime List</a>
                    <a className={styles.navbar__mobileListItem} href="#">My List</a>
                    <a className={styles.navbar__mobileListItem} href="#">Manga</a>
                    <a className={styles.navbar__mobileListItem} href="#">Login</a>
                    <a className={styles.navbar__mobileListItem} href="#">Sign Up</a>
                </div>
            </div>
        </div>
    )
}