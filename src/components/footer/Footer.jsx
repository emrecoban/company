import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={style.container}>
            <div>&copy; {new Date().getFullYear()} emreDev. All rights reserved.</div>
            <div className={style.social}>
                <Image className={style.icon} src="/1.png" width={15} height={15} alt="facebook" />
                <Image className={style.icon} src="/2.png" width={15} height={15} alt="instagram" />
                <Image className={style.icon} src="/3.png" width={15} height={15} alt="twitter" />
                <Image className={style.icon} src="/4.png" width={15} height={15} alt="youtube" />
            </div>
        </div>
    )
}

export default Footer