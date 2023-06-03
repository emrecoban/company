import React from 'react'
import style from './footer.module.css'

const Footer = () => {
    return (
        <div className={style.container}>
            <div>&copy; {new Date().getFullYear()} emreDev. All rights reserved.</div>
            <div></div>
        </div>
    )
}

export default Footer