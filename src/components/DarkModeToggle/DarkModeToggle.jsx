"use client"

import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
//import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
    //const { toggle, mode } = useContext(ThemeContext);
    const mode = "light"
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={mode === "light" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    );
};

export default DarkModeToggle;