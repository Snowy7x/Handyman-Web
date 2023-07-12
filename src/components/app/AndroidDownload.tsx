"use client"

import React, { FC } from "react";
import Android from "../../assets/svgs/Android.svg"
// @ts-ignore
import Button from "./Button"
import {BsAndroid} from "react-icons/bs";


type GooglePlayButtonProps = {
    /**
     * @default dark
     */
    theme?: "dark" | "light";

    /**
     * @default 60px
     */
    height?: number;

    /**
     * @default 180px
     */
    width?: number;

    /**
     * @default ''
     */
    className?: string;

    /**
     * @default ''
     */
    url: string;
};

/**
 *
 * @param {string} theme Choose a theme between dark and light
 * @param {number} height Controls the height of the button
 * @param {number} width Controls the width of the button
 * @param {string} className Add className to the button in order to customize the button appearance
 * @param {string} url Add your store url to the button
 * @example <GooglePlayButton theme="light" height={70} width={130} className="button-container" url="https://play.google.com/" />
 * @returns
 */
const AndroidDownload: FC<GooglePlayButtonProps> = ({
                                                         theme = "light",
                                                         height,
                                                         width,
                                                         className,
                                                         url,
                                                     }) => {
    return (
        <Button
            theme={theme}
            height={height}
            width={width}
            url={url}
            storeName={"Android"}
            Logo={() => (
                <BsAndroid className=""/>
            )}
            className={className}
            title={"GET IT ON"}
        />
    );
};

export default AndroidDownload;