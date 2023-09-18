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
                <a className={styles.navbar__logo} href={"/"}>
                    <h1><span>HandyMan</span>App</h1>
                </a>

                <div className={styles.navbar__list}>
                    <a className={styles.navbar__listItem} href="/policy">Privacy & Policy</a>
                </div>

                <div className={[styles.navbar__list, styles.search_login].join(" ")}>
                    {/* Search bar section */}
                    <a className={styles.navbar__listRedBtn} href="/delete">Delete Your Account</a>
                </div>
            </div>

            <div className={styles.navbar__mobile}>
                <a className={styles.navbar__mobileLogo} href={"/"}>
                    <h1><span>HandyMan</span>App</h1>
                </a>
                <div className={styles.navbar__mobileList}>
                    <a className={styles.navbar__mobileListItem} href="/policy">Privacy & Policy</a>
                    <a className={styles.navbar__mobileListItem} href="/delete">Delete Your Account</a>
                </div>
            </div>
        </div>
    )
}