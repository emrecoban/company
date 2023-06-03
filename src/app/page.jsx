import Image from 'next/image'
import style from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>Better design for your digital products.</h1>
        <p className={style.desc}>Turning your ideas into app!</p>
        <button className={style.button}>See Our Works</button>
      </div>
      <div className={style.item}>
        <Image src={Hero} alt="" className={style.img} />
      </div>
    </div>
  )
}
