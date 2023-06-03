import Image from 'next/image'
import style from './page.module.css'
import Hero from 'public/hero.png'
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>Better design for your digital products.</h1>
        <p className={style.desc}>Turning your ideas into app!</p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={style.item}>
        <Image src={Hero} alt="" className={style.img} />
      </div>
    </div>
  )
}
