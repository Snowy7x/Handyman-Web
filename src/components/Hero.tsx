"use client"

import styles from "../styles/Components.module.css"
import {useEffect, useState} from "react";
import Image from "next/image";

type HeroAnime = {
    Title: string,
    Image: string,
    Description: string,
    genres: string[],
    Id: string,
}

type HeroProps = {
    animes: HeroAnime[]
}
export default function Hero({animes} : HeroProps) {

    const [anime, setAnime] = useState<HeroAnime>(animes[0]);

    useEffect(() => {
        // Set background image
        const hero = document.querySelector(`.${styles.hero}`) as HTMLElement;
        hero.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 1)), url(${anime.Image})`;
    }, [animes]);

    const handleAnimeChange = (newAnime: HeroAnime) => {

        // Smoothly change background image opacity then set it to 0.1
        const hero = document.querySelector(`.${styles.hero}`) as HTMLElement;
        let opacity = 0;
        const interval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 1)), url(${anime.Image})`;
            } else {
                 const interval2 = setInterval(() => {
                        if (opacity > 0.1) {
                            opacity -= 0.1;
                            hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 1)), url(${newAnime.Image})`;
                        } else {
                            hero.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 1)), url(${newAnime.Image})`;
                            clearInterval(interval2);
                        }
                    }, 20);
                    clearInterval(interval);
            }
        }, 20);

        // Set new anime
        setAnime(newAnime as HeroAnime);

    }

    useEffect(() => {
        // Auto change anime every 5 seconds
        const interval = setInterval(() => {
            let index = animes.indexOf(anime);
            if (index === animes.length - 1) index = -1;

            setAnime(animes[index + 1]);
            let newAnime = animes[index + 1];

            // Smoothly change background image opacity then set it to 0.1
            const hero = document.querySelector(`.${styles.hero}`) as HTMLElement;
            let opacity = 0;
            const interval = setInterval(() => {
                if (opacity < 1) {
                    opacity += 0.1;
                    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 1)), url(${anime.Image})`;
                } else {
                    const interval2 = setInterval(() => {
                        if (opacity > 0.1) {
                            opacity -= 0.1;
                            hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 1)), url(${newAnime.Image})`;
                        } else {
                            hero.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 1)), url(${newAnime.Image})`;
                            clearInterval(interval2);
                        }
                    }, 20);
                    clearInterval(interval);
                }
            }, 10);
        }, 5000);

        return () => clearInterval(interval);
    }, [anime]);

    return (
        <div className={styles.hero}>
            <div className={styles.hero__info}>
                <h1 className={styles.hero__title}>{anime.Title}</h1>
                <div className={styles.hero_genres}>
                    {anime.genres.map((genre, index) => {
                        return (
                            <span className={styles.hero__genre} key={index}>{genre}</span>
                        )
                    })}

                </div>
                <p className={styles.hero__description}>{anime.Description}</p>

                <a href={`/anime/${anime.Id}`} className={styles.button}>Watch Now</a>
            </div>

            <div className={styles.hero__selector__radios}>
                {animes.map((an, index) => {
                    return (
                        <input type="radio" name="hero" className={an.Id === anime.Id ? styles.hero__selector__radio_active : styles.hero__selector__radio} key={index} onClick={() => handleAnimeChange(an)}/>
                    )
                })}
            </div>
            <div className={styles.hero__selector}>
                {animes.map((an, index) => {
                        return (
                            <div className={an.Id === anime.Id ? styles.hero__selector__item__active + " " + styles.hero__selector__item : styles.hero__selector__item} key={index} onClick={() => handleAnimeChange(an)}>
                                <Image src={an.Image} alt={an.Title} width="0" height="0" sizes="100vw"/>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}