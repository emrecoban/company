import React from 'react'
import styles from './blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
    return (
        <div className={styles.mainContainer}>

            <Link href={`/blog/`} className={styles.container} key={"#"}>
                <div className={styles.imageContainer}>
                    <Image
                        src={"https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{"#"}</h1>
                    <p className={styles.desc}>{"#"}</p>
                </div>
            </Link>

        </div>
    )
}

export default Blog